import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Comment from './Comment';
import { NewContext } from './Context';
import { useContext } from 'react';
import Vote from './Vote';


function Posts({ posts, users, setPosts }) {
    const { theme, status } = useContext(NewContext);
    return (
        <Container>
            {
                posts.map(post => {
                    return (
                        <Row key={post.id} >
                            <Col className='d-flex justify-content-center align-items-center flex-wrap'>
                                <Card className='my-2 w-75 '>
                                    <Card.Header className={`${status ? theme.secondary : theme.secondary} d-flex justify-content-between`}>
                                        <div>
                                            {users.map(user => user.id === post.userId && user.name)}
                                        </div>
                                        <div >
                                            {moment(post.createdAt).format(' h:m a')}
                                        </div>
                                    </Card.Header>
                                    <Card.Body className={`${status ? theme.light : theme.dark} d-flex  justify-content-start flex-wrap alighn-items-center`}>
                                        <Card.Title className='d-flex w-75'>{post.title}</Card.Title>
                                        <Card.Text className='d-flex w-75'>
                                            {post.body}
                                        </Card.Text>
                                        <Card.Text className='d-flex w-100  justify-content-between align-items-center'>
                                            <div className=' w-50'>
                                                <Comment post={post} setPosts={setPosts} />
                                            </div>
                                            <div>
                                                {post.comments.length} Comments
                                            </div>
                                            <div>
                                                <Vote post={post} setPosts={setPosts} /> 
                                            </div>
                                            <Link to={'/post/' + post.id}><Button variant="primary">show more</Button></Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
    );
}

export default Posts;
