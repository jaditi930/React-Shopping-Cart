import React from 'react'
import './navbar.css'

const Navbar = (props) => {
  return (
    <div className='nav'>
      <ul className='flex'>
        <li id='name'>E-Store</li>
        <li className='ml-auto'><button id='cart_btn' onClick={()=>{
          props.setDisplayCart("block")
        }}>
          My Cart</button></li>
      </ul>
    </div>
  )
}

export default Navbar
