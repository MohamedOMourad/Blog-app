import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import PostDetails from './Pages/PostDetails';
import { NewContext } from './Components/Context';
import { useContext } from 'react';




function App() {
  const { theme, status } = useContext(NewContext);
  // useEffect(() => {
  //   const useAPI = axios.create({ baseURL: ' https://jsonplaceholder.typicode.com' });
  //   //Get Posts
  //   useAPI.get('/users').then(user => setUSers(user.data));
  // }, []);

  return (
    <div className={`${status ? theme.light : theme.dark} `}>
        <NavBar />
        <Routes>
          <Route path="/post/:id" element={<PostDetails/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
  );
}

export default App;

//javascript optional chaining
