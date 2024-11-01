import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import StoreContextProvider from './context/StoreContext';
import Login from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
import { useState } from 'react';
import NotFound from './pages/NotFound';

function App() {
  // const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {/* {showLogin ? <Login setShowLogin={setShowLogin}></Login> : <></>} */}
      <BrowserRouter classname="overflow-x-hidden">
        <StoreContextProvider>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
            <Route path='cart' element={<Cart></Cart>}></Route>
            <Route path='order' element={<PlaceOrder></PlaceOrder>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='sign_up' element={<Signup></Signup>}></Route>
          </Routes>
        </StoreContextProvider>
      </BrowserRouter>


    </>
  );
}

export default App;
