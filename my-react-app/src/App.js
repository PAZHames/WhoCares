import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "./pages/Home";
import Profile from './pages/Profile';
import Groups from './pages/Groups';
import Events from './pages/Events';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route path = '/' element={<HomePage/>} index/>
        <Route path = '/profile' element={<Profile/>} />
        <Route path = '/groups' element={<Groups/>} />
        <Route path = '/events' element={<Events/>} />
        <Route path = '/signUp' element={<Signup/>} />


      </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App;
