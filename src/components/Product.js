import React from 'react'
import { useContext } from 'react';
import './product.css'
import { CartContext } from '../Context';

const Product = ({product}) => {
  const {cart,setCart} = useContext(CartContext);

     function text_truncate(str, length, ending) {
        if (length == null) {
          length = 100;
        }
        if (ending == null) {
          ending = '...';
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
      }

      function add_to_cart(e){

        console.log(e.target.id)

        let index=cart.findIndex((item)=>item.id==product.id)

       // If product already present, then increase its quantity
        if( index!=-1 ){
          console.log(index)
          let current_product=cart[index]
          current_product.quantity++;
          setCart([...cart.slice(0,index),current_product,...cart.slice(index+1)])
        }  
        //otherwise, add it to cart
        else{
          let current_product={...product}
          current_product.quantity=1;
          setCart([...cart,current_product])
        }

        console.log(cart)
      }

  return (
    <div className='card'>
      <img src={product.image} alt="" />
      <div className='bold'>{product.title}</div>
      <div>{text_truncate(product.description)}</div>
      <div className='price'>   <span>${product.price}</span>   </div>
      <button className='bold add_cart' onClick={add_to_cart}>Add To Cart</button>
    </div>
  )
}

export default Product
