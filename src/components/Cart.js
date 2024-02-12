import React from 'react'
import { CartContext } from '../Context';
import CartProduct from './CartProduct';
import { useContext } from 'react';
import './cart.css'


const Cart = (props) => {

  console.log(props.displayCart)

  const {cart,setCart} = useContext(CartContext);
  let grand_total=0;

  let products_in_cart=cart.map((product)=>{

    grand_total+=product.quantity*product.price

    return (
      <>
      <CartProduct product={product}/>
      </>
    )
  })

  return (

    <div id="cart" style={{display:props.displayCart}}>
    
    <div className='cross' onClick={()=>{
          props.setDisplayCart("none")
        }}>X</div>
    <h1>Cart</h1>

    <div>                           
      {products_in_cart}
    </div>

    <div id="grand_total">{grand_total}</div>
    </div>

  )
}

export default Cart
