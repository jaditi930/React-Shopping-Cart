import React from 'react'
import { useContext,useState } from 'react';
import Product from './Product'
import { ProductContext } from '../Context';
import './home.css'


const Home = () => {

    const {products} = useContext(ProductContext);

    let all_products=products.map((product,index)=>{
        return (
        <Product product={product} key={product.id}/>
        )
    })
  return (
    <>

    <div className='container'>
      {all_products}
    </div>
    </>
  )
}

export default Home
