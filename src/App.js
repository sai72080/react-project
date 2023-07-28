import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Appheader from './Appheader';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Appheader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
    </div>
  );
}

export default App;
