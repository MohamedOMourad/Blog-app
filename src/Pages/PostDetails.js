import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from "../Components/post";
import { useDispatch, useSelector } from 'react-redux';


function PostDetails() {

    const posts = useSelector(state => state.postsReducer);

    const { id } = useParams();
    const [post, setPost] = useState({});



    useEffect(() => {
        const post = posts.find(post => post.id === +id);
        setPost(post);
    }, [posts]);

    return (
        <Post post={post}/>
    )
}

export default PostDetails;
