import React from 'react'
import "./products.css"
import {useStateValue} from "../../contextAPI/StateProvider"
export default function Product({price,title,image,rating,id}) {
  const [{basket},dispatch]=useStateValue()

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

