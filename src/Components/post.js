import moment from 'moment';
import { Container, Card, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AddComment from './AddComment';
import Vote from './Vote';

function Post({ post }) {
    const users = useSelector(state => state.UsersReducer);
    return (
        <Container className='min-vh-100'>
            <div key={post.id} className='d-flex justify-content-between  my-1 bg-light w-75'>
                <div className='my-1'>
                    <Vote post={post} />
                </div>
                <div className='w-100'>
                    <Card.Body className={` ّbg-light`}>
                        <div className='d-flex align-items-center ms-3'>
                            <div className='me-3'>
                                <Image roundedCircle src="https://randomuser.me/api/portraits/thumb/women/3.jpg"></Image>
                            </div>
                            <div className='me-3'>
                                {users.map(user => user.id === post.userId && user.name)}
                            </div>
                            <div >
                                {moment(post.createdAt).format(' h:m a')}
                            </div>
                        </div>
                        <Card.Title className={`ّbg-light m-3`}>{post.title}</Card.Title>
                        <Card.Text className={`ّbg-light m-3`}>
                            {post.body}
                        </Card.Text >
                        <div className={` d-flex align-items-center justify-content-between bg-light`}>
                            <div className='me-3'>
                                <AddComment post={post} />
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Container>
    );
}

export default Post;
// <Container className='py-5 min-vh-100' >
//     <div >
//         <h1>{post?.title}</h1>
//         <h6>By {users.map(user => user.id === post?.userId && user.name)}</h6>
//         <p>{post?.body}</p>
//         <div>
//             {moment(post?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
//         </div>
//     </div>
// </Container>