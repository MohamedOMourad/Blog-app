import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Comment from './Comment';
import { NewContext } from './Context';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import Vote from './Vote';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../redux/actions/post.action';
import { getAllUsers } from '../redux/actions/user.action';

function Posts() {

    const { theme, status } = useContext(NewContext);
    const posts = useSelector(state => state.postsReducer);
    const users = useSelector(state => state.UsersReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const API = axios.create({ baseURL: 'https://api.tawwr.com' });
        //Get Posts
        API.get('/posts').then(response => dispatch(getAllPosts(response.data.data)));
    }, []);

    useEffect(() => {
        const userAPI = axios.create({ baseURL: ' https://jsonplaceholder.typicode.com' });
        //Get Posts
        userAPI.get('/users').then(users => dispatch(getAllUsers(users.data)));
    }, []);

    async function loop() {
        // const useAPI = axios.create({ baseURL: 'https://api.tawwr.com' });
        // for (let i = 1; i <= 2000; i++){
        //     await useAPI.delete(`/posts/${i}`);
        // }
    }
    useEffect(() => {
        loop();
    }, []);

    return (
        <Container className='py-1 '>
            {
                posts.map(post => {
                    return (
                        <Card key={post.id} className=' d-flex  card'>
                            <Card.Header className={`${status ? theme.secondary : theme.secondary} `}>
                                <div>
                                    {users.map(user => user.id === post.userId && user.name)}
                                </div>
                                <div >
                                    {moment(post.createdAt).format(' h:m a')}
                                </div>
                            </Card.Header>
                            <Card.Body className={`${status ? theme.light : theme.dark} ّ`}>
                                <Card.Title >{post.title}</Card.Title>
                                <Card.Text >
                                    {post.body}
                                </Card.Text>
                                <Card.Text >
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className={`${status ? theme.secondary : theme.secondary} d-flex align-items-center justify-content-between`}>
                                <div>
                                    <Vote post={post} />
                                </div>
                                <div className='me-3'>
                                    <Comment post={post} />
                                </div>
                                {post.comments.length} Comments
                                <div >
                                    <Link to={'/post/' + post.id}><Button variant="outline-light">show more</Button></Link>
                                </div>
                            </Card.Footer>
                        </Card>
                    )
                })
            }
        </Container>
    );
}

export default Posts;
