import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <ul className='flex'>
        <li id='name'><Link to='/'>E-Store</Link></li>
        <li className='ml-auto'><button id='cart_btn'><Link to='/cart'>My Cart</Link></button></li>
      </ul>
    </div>
  )
}

export default Navbar
