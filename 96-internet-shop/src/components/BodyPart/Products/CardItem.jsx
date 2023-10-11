import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({
  created,
  id,
  defaultDisplayedPrice,
  defaultDisplayedPriceFormatted,
  description,
  smallThumbnailUrl,
  name,
}) => {
  return (
    <div className="col my-auto p-3">
      <div className=" card divCard bg-dark">
        <img
          src={smallThumbnailUrl}
          className="card-img-top"
          alt="small image"
        />
        <div className="card-body">
          <h5 className="card-title text-light bg-dark">{name}</h5>
          <b className="text-light bg-dark">
            {defaultDisplayedPriceFormatted} {'   '}
          </b>
          <Link className="btn btn-primary" to={`details/${id}`}>
            Подробно
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardItem
