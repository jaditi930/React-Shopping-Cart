import React from 'react'
import { CartContext } from '../Context';
import CartProduct from './CartProduct';
import { useContext } from 'react';


const Cart = () => {

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

    <>
    <div className='container'>                           
      {products_in_cart}
    </div>

    <div id="grand_total">{grand_total}</div>
    </>

  )
}

export default Cart
