import React from 'react'

const Order = (props) => {
  return (
    <div className="order-item">
      <img src={props.smallThumbnailUrl} alt="product small img"></img>
      <h2>{props.name}</h2>
      <p>{props.totalPrice}</p>
    </div>
  )
}

export default Order
