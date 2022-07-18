import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../redux/actions/post.action';
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";

function Vote({ post }) {
    const dispatch = useDispatch();

    const addRemoveVote = async (val) => {
        const vote = {
            userId: 7,
            userVote: val,
        }
        try {
            // Post Method
            const API = axios.create({ baseURL: 'https://api.tawwr.com' });
            const addRemove = await API.post(`/posts/${post.id}/vote`, vote);
            const getPosts = await API.get('/posts');
            dispatch(getAllPosts(getPosts.data.data));
        } catch (error) {
            console.log('404! Not Found')
        }
    }

    return (
        <div>
            <TbArrowBigTop className='ms-1' size={"1.5em"} onClick={() => addRemoveVote(1)} />
            <div className=' d-flex justify-content-center w-100 mx-1'> {post.upVotesTotal}</div>
            <TbArrowBigDown className='ms-1' size={"1.5em"} onClick={() => addRemoveVote(-1)} />
        </div>
    )
}

export default Vote;
