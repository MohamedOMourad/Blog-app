import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import PostDetails from './Pages/PostDetails';
import { NewContext } from './Components/Context';
import { useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';






function App() {
  const { theme, status } = useContext(NewContext);


  return (
    <div className='light'>
      <NavBar />
      <Routes>
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

//javascript optional chaining
// className = {`${status ? theme.light : theme.dark} `}