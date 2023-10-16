import React from 'react'
import { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import OrdersContext from '../../../context/OrdersContext'

const Order = (props) => {
  const { delInOrder } = useContext(OrdersContext)

  return (
    <div className="order-item container">
      <div className="row justify-content-centr">
        <div className="col-10">
          <img src={props.smallThumbnailUrl} alt="product small img"></img>
          <h2>{props.name}</h2>
          <p>{props.defaultDisplayedPriceFormatted}</p>
        </div>
        <div className="col">
          <FaTrashAlt
            className="del-cart-button"
            onClick={() => delInOrder(props.id)}
          ></FaTrashAlt>
        </div>
      </div>
    </div>
  )
}

export default Order
