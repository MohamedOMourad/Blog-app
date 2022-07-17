import moment from 'moment';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function Post({ post }) {
    const users = useSelector(state => state.UsersReducer);
    return (
        <Container className='py-5 min-vh-100' >
            <div >
                <h1>{post?.title}</h1>
                <h6>By {users.map(user => user.id === post?.userId && user.name)}</h6>
                <p>{post?.body}</p>
                <div>
                    {moment(post?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </div>
            </div>
        </Container>
    );
}

export default Post;
