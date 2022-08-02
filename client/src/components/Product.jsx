import React from 'react'
import pimage from '../assets/images/si0.jpg'
function Product() {
  return (
    <div className="product">
      <span className="product-image"><img src={pimage} alt="image"/></span>
      <span className="product-category">Mens</span>
      <div className="product-details">
        <span className="product-name">Brand new briaci  Suit designed by marco sinoteri</span>
        <span className="product-brand">Gucci</span>
        <span className="product-price">400$</span>
      </div>
    </div>
  )
}

export default Product