import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Modules/navbar/Navbar';
import Home from './pages/home/Home';
import 'tailwindcss/tailwind.css';
import Post from './pages/post/Post';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { isCurrentPath } from './helpers/routeHelper';
import { randomKey } from './helpers/mathHelper';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Navbar />
        <div className='mt-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/boat/:id' element={<Post />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
