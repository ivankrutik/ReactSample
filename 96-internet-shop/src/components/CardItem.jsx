import React from 'react'

const CardItem = ({
  created,
  defaultDisplayedPrice,
  defaultDisplayedPriceFormatted,
  description,
  smallThumbnailUrl,
  name,
}) => {
  return (
    <div className="card divCard bg-dark ">
      <img src={smallThumbnailUrl} className="card-img-top" alt="small image" />
      <div className="card-body">
        <h5 className="card-title text-light bg-dark">{name}</h5>
        <div
          className="text-light bg-dark"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <a href="#" className="btn btn-primary">
          Перейти куда-нибудь
        </a>
      </div>
    </div>
  )
}

export default CardItem
