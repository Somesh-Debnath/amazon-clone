import React from 'react'
import "./products.css"
export default function Product({price,title,image,rating,id}) {
  return (
    <div className='product'>
       <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, id) => (
              <p key={id}>⭐</p>
            ))}
        </div>
       </div>
       <img src={image} alt="" />

      <button>Add to Basket</button>
    </div>
  )
}
