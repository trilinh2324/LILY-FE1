import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ProductDetail from './Components/Product/ProductDetail';
import Cart from './Components/Cart/cart';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import { AuthProvider } from "./Components/context/AuthContext";
import Cart1 from './Components/Cart/test2';
import ProductBuy from './Components/Bill/ProductBuy';
import ProductBuy1 from './Components/Bill/test1';
import Bill from './Components/Bill/Bill';

const App = () => {
  

  
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/cart1" element={<Cart1 />} />
        <Route path='/buy' element={<ProductBuy/>}/>
        <Route path='/test' element={<ProductBuy1/>}/>
        <Route path="/bill" element={<Bill />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
