import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import PostDetails from './Pages/PostDetails';
import { NewContext } from './Components/Context';
import { useContext } from 'react';


function App() {
  const { theme, status } = useContext(NewContext);
  const [posts, setPosts] = useState([]);
  const [users, setUSers] = useState([]);

  useEffect(() => {
    const API = axios.create({ baseURL: ' https://api.tawwr.com' });
    //Get Posts
    API.get('/posts').then(posts => setPosts(posts.data.data.sort((a, b) => a.id - b.id)));
  }, []);

  useEffect(() => {
    const useAPI = axios.create({ baseURL: ' https://jsonplaceholder.typicode.com' });
    //Get Posts
    useAPI.get('/users').then(user => setUSers(user.data));
  }, []);

  return (
    <div className={`${status ? theme.light : theme.dark}`}>
        <NavBar setPosts={setPosts} />
        <Routes>
          <Route path="/post/:id" element={<PostDetails posts={posts} users={users} />} />
          <Route path='/' element={<Home posts={posts} users={users} setPosts={setPosts} />} />
        </Routes>
      </div>
  );
}

export default App;

//javascript optional chaining
