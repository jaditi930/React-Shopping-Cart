import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductContext,CartContext } from './Context';

import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [products,setProducts]=useState([])

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
      <Routes>
      <ProductContext.Provider value={{ products }}>
            <Route path="/" element={<Home products={products} />}/>
            <Route path="cart" element={<Cart />} />
      </ProductContext.Provider>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
