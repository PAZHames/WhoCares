import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "./pages/Home";
import Profile from './pages/Profile';
import Nav from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route path = '/' element={<HomePage/>} index/>
        <Route path = '/profile' element={<Profile/>} />

      </Routes>
      <Nav />
    </div>
    </BrowserRouter>

  )
}

export default App;
