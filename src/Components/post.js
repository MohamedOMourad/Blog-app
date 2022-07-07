import moment from 'moment';


function Post({ post, users }) {
    // console.log(post);
    return (
        <div>
            <h1>{post?.title}</h1>
            <h6>By {users.map(user => user.id === post?.userId && user.name)}</h6>
            <p>{post?.body}</p>
            <div>
                {moment(post?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </div>
        </div>
    );
}

export default Post;
