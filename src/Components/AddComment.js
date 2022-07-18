import { useFormik } from "formik";
import axios from 'axios';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../redux/actions/post.action';


function AddComment({ post }) {
    const dispatch = useDispatch();
    const addComment = async (comment) => {
        try {
            // Post Method
            const API = axios.create({ baseURL: ' https://api.tawwr.com' });
            const sendComment = await API.post(`/posts/${post.id}/comment`, comment);
            const getPosts = await API.get('/posts');
            dispatch(getAllPosts(getPosts.data.data))
        } catch (error) {
            console.log('404! Not Found')
        }
    }

    const formik = useFormik({
        initialValues: {
            body: "",
        },
        onSubmit: (values) => {
            const comment = { ...values, userId: Math.floor(Math.random() * 10) + 1 };
            addComment(comment)
        },

    });

    return (
        <Form onSubmit={formik.handleSubmit} className='mx-1'>
            <InputGroup>
                <Form.Control
                    type="text" placeholder="Enter Your Comment" name="body" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}
                    aria-describedby="basic-addon2"
                />
                <Button id="basic-addon2" variant="outline-dark" type="submit">Add comment</Button>
            </InputGroup>
        </Form>
    )
}
export default AddComment;
