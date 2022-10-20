import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>} ></Route>
        <Route path='/home'element={<Home></Home>} ></Route>
        <Route path='/about'element={<About></About>} ></Route>
        <Route path='/Login'element={<Login></Login>} ></Route>
        <Route path='/signUp'element={<SignUp></SignUp>} ></Route>
      </Routes>
    </div>
  );
}

export default App;