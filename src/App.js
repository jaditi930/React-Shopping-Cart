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
  const [displayCart,setDisplayCart]=useState("none")

  useEffect(()=>{

  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setProducts(data)
  });

  },[])

  return (
        <ProductContext.Provider value={{ products }}>
          <CartContext.Provider value={{cart,setCart}}>

              <Navbar setDisplayCart={setDisplayCart}/>
              <div className='main'>
              <Home/>
              <Cart displayCart={displayCart} setDisplayCart={setDisplayCart}/>
              </div>

              {/* <Navbar/> */}

                  {/* <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="cart" element={<Cart />} />
                  </Routes> */}

          </CartContext.Provider>
        </ProductContext.Provider>
  )
  
}

export default App;
