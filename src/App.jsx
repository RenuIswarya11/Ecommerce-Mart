import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import Home from '../src/Pages/Home/Home';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Product from './Pages/Product/Product';
import { AuthContext } from "./contexts/AuthContext";
import { Profile } from './Pages/Profile/Profile';
import { ProtectedRoute } from "./helpers/ProtectedRoute";
import { WishList } from './Pages/WishList/WishList';
import { Checkout } from './Pages/Checkout/Checkout';

const App = () => {
  return (
    
       
          <Routes>
            <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/wishList" element={<ProtectedRoute><WishList /></ProtectedRoute>} />
            <Route path="/user" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products/:productId" element={<Product />} />
          </Routes>
        
 
  );
};

export default App;
