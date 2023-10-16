import React from 'react'
import CardItem from './CardItem'

const Products = ({ products }) => {
  return (
    <div className="row justify-content-centr row-cols-2 row-cols-md-3 row-cols-lg-4 ">
      {products.map((product) => {
        return <CardItem key={product.id} {...product}></CardItem>
      })}
    </div>
  )
}

export default Products
