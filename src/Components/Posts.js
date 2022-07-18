import { Container, Card, Button, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Comment from './AddComment';
import { NewContext } from './Context';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Vote from './Vote';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../redux/actions/post.action';
import { getAllUsers } from '../redux/actions/user.action';
import { VscComment } from "react-icons/vsc";

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsReducer);
    const users = useSelector(state => state.UsersReducer);

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

    return (
        <Container className='py-1 '>
            {
                posts.map(post => {
                    return (
                        <div key={post.id} className='d-flex justify-content-between p-1 my-3 bg-light w-75'>
                            <div className='my-4'>
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
                                        <div className='ms-3'>
                                            <Link to={'/post/' + post.id}>
                                                <VscComment className='me-3' />
                                            </Link>
                                            {post.comments.length} Comments
                                        </div>
                                        <div >
                                            <Link to={'/post/' + post.id}><Button variant="outline-dark">show more</Button></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </div>
                        </div>
                    )
                })
            }
        </Container>
    );
}

export default Posts;
// ${ status ? theme.light : theme.dark }