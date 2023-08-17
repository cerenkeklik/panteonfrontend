import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Configuration from './pages/Configuration';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path ='/register' element={<Register />}/>
      <Route path= '/login' element={<Login />} />
      <Route path ='/configuration' element={<Configuration />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
