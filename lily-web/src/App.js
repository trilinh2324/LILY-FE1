import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ProductDetail from './Components/Product/ProductDetail';
import Cart from './Components/Cart/cart';
import Login from './Components/User/Login';
import Register from './Components/User/Register';

const App = () => {
  
  const [userId, setUserId] = useState(null);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;
