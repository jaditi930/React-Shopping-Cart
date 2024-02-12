import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Context';

import './CartProduct.css'

const CartProduct = ({product}) => {

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

    const {cart,setCart} = useContext(CartContext);

    let increaseQuantity=()=>{

        let index=cart.findIndex((p)=>p.id === product.id)
        let current_product=cart[index]
    
        if(current_product.quantity<4){
          current_product.quantity++;
    
          // update the cart
          setCart([...cart.slice(0,index),current_product,...cart.slice(index+1)])
        }
    
      }
    
      let decreaseQuantity=()=>{
        
        let index=cart.findIndex((p)=>p.id === product.id)
        let current_product=cart[index]
    
        if(current_product.quantity>1){
    
          current_product.quantity--;
    
          // update the cart
          setCart([...cart.slice(0,index),current_product,...cart.slice(index+1)])
        }
        // if quantity equals to zero, then remove it from the cart
        else{
          setCart([...cart.slice(0,index),...cart.slice(index+1)])
        }
      }


  return (
    <div>
        <div className='card'>
        <img src={product.image} alt="" />
        <div className='bold'>{product.title}</div>
        <div>{text_truncate(product.description)}</div>
        
        <div className='handles'>

            <div className='price'>   
                <span className='price_span'>${product.price}</span>   
            </div>

            <div className='mg'>
                <button className='qty_btns' onClick={()=>decreaseQuantity(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button className='qty_btns' onClick={()=>increaseQuantity(product.id)}>+</button>
            </div>

        </div>

        <div>
            Total Price : {product.quantity*product.price}
        </div>

        </div>
    </div>
  )
}

export default CartProduct
