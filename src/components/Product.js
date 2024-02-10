import React from 'react'
import './product.css'

const Product = ({product}) => {

     function text_truncate(str, length, ending) {
        if (length == null) {
          length = 150;
        }
        if (ending == null) {
          ending = '...';
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
      };


    console.log(product)
  return (
    <div className='card'>
      <img src={product.image} alt="" />
      <div className='bold'>{product.title}</div>
      <div>{text_truncate(product.description)}</div>
      <div className='price'>   <span>${product.price}</span>   </div>
      <button className='bold'>Add To Cart</button>
    </div>
  )
}

export default Product
