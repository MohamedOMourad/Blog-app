import moment from 'moment';


function PostCard() {
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

export default PostCard;
