import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';


function Vote({ post, setPosts }) {

    const addRemoveVote = async (val)=>  {
        const vote = {
            userId: 7,
            userVote: val,
        }
        try {
            // Post Method
            const API = axios.create({ baseURL: 'https://api.tawwr.com' });
            const addRemove = await API.post(`/posts/${post.id}/vote`, vote);
            console.log(addRemove)
            const getPosts = await API.get('/posts');
            console.log(getPosts)
            setPosts(getPosts.data.data.sort((a, b) => a.id - b.id));
        } catch (error) {
            console.log('404! Not Found')
        }
    }

    return (
        <div>
            <Button variant='outline-light' size='sm' onClick={() => addRemoveVote(1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            </Button>
            <div className='my-2'>{post.upVotesTotal} Like</div>
            <Button variant='outline-light' size='sm' onClick={()=>addRemoveVote(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </Button>
        </div>
    )
}

export default Vote;
