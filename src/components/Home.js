import React from 'react'
import { useContext } from 'react';
import Product from './Product'
import { MyContext } from './MyContext';


const Home = () => {
    const {products} = useContext(MyContext);

    let all_products=products.map((product,index)=>{
        return (
        <Product product={product}/>
        )
    })
  return (
    <div>
      {all_products}
    </div>
  )
}

export default Home
