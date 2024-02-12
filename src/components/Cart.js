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
      <CartProduct product={product} key={product.id}/>
      </>
    )
  })

  return (

    <div id="cart" style={{display:props.displayCart}}>
    
    <div className='cross' onClick={()=>{
          props.setDisplayCart("none")
        }}>X</div>
    <h1>Cart</h1>

    { products_in_cart.length>0 ?   (
    <>
        <div className='cart_products'>                           
        {products_in_cart}
        </div>

        <div className='subtotal'>
          <span id="grand_total">Subtotal: {Math.ceil(grand_total)}</span>
          <button id="checkout">Checkout</button>
        </div>
    </>
    ): (
      <>
      <div>You have no items in the cart.</div>
      </>
    )
    }
    </div>
  )
}

export default Cart
