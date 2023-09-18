import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Modules/navbar/Navbar';
import Home from './pages/home/Home';
import 'tailwindcss/tailwind.css';
import Post from './pages/post/Post';
import Login from './Modules/login/Login';
import Signup from './Modules/signup/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <Signup/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Home />} />
          <Route path='/boat/:id' element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
