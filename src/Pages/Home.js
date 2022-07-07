import Posts from "../Components/Posts";

function Home({ posts, users, setPosts }) {
    return (
        <Posts posts={posts} users={users} setPosts={setPosts} />
    );
}

export default Home;