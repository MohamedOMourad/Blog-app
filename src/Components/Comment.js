import { useFormik } from "formik";
import axios from 'axios';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../redux/actions/post.action';



function Comment({ post }) {
    const dispatch = useDispatch();

    const addComment = async (comment) => {
        try {
            // Post Method
            const API = axios.create({ baseURL: ' https://api.tawwr.com' });
            const sendComment = await API.post(`/posts/${post.id}/comment`, comment);
            const getPosts = await API.get('/posts');
            const updatePosts =  dispatch(getAllPosts(getPosts.data.data))
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
        <Form onSubmit={formik.handleSubmit} className=''>
            <InputGroup className="mb-3">
                <Form.Control
                    type="text" placeholder="Enter Your Comment" name="body" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}
                    aria-describedby="basic-addon2"
                    />
                <Button id="basic-addon2" variant="outline-light" type="submit">Add comment</Button>
            </InputGroup>
        </Form>
    )
}

{/* <InputGroup className="mb-3">
<Form.Group className="mb-3">
    <Form.Control
        type="text" placeholder="Enter Your Comment" name="body" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} />
    </Form.Group>
    <InputGroup.Text type="submit" >Add comment</InputGroup.Text>
<Button variant="primary" type="submit">Add comment</Button>
</InputGroup> */}

export default Comment;
