import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductContext,CartContext } from './Context';

import './App.css';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Cart from './components/Cart';


function App() {
  const [products,setProducts]=useState([])
  const [cart,setCart]=useState([])

  useEffect(()=>{

  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setProducts(data)
  });

  },[])

  return (
  <BrowserRouter>
        <ProductContext.Provider value={{ products }}>
          <CartContext.Provider value={{cart,setCart}}>
              <Navbar/>
                  <Routes>
                        <Route path="/" element={<Home products={products} />}/>
                        <Route path="cart" element={<Cart />} />
                  </Routes>
          </CartContext.Provider>
        </ProductContext.Provider>
    </BrowserRouter>
  )
}

export default App;
