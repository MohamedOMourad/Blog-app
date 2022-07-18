import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Comments() {
    const posts = useSelector(state => state.postsReducer);
  return (
      <Container className='py-1 '>
          {
              posts.map(post => {
                  return (
                      <div key={post.id} className='d-flex justify-content-between p-1 my-3 bg-light w-75'>
                          <div className='w-100'>
                              <Card.Body className={` ّbg-light`}>
                                  <div className='d-flex align-items-center ms-3'>
                                      <div className='me-3'>
                                          <Image roundedCircle src={profilePic}></Image>
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
  )
}

export default Comments
