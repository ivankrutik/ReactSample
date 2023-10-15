import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import OrdersContext from '../../../context/OrdersContext'

const API_URL = 'https://app.ecwid.com/api/v3/58958138/products?productId='
const TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'

const DetailItem = () => {
  const [error, setError] = useState('')
  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const { orders, addToOrder } = useContext(OrdersContext)

  const params = useParams()

  function getDetailDataFromServer() {
    fetch(`${API_URL}${params.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setPost(json.items[0])
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    setIsLoading(true)
    getDetailDataFromServer()
  }, [])

  function buyClickHandler() {
    addToOrder({ id: post.id })
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  if (!post) {
    return <h1>No data found</h1>
  }

  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col p-3">
          <img src={post.imageUrl} className="w-100" alt="detail image" />
        </div>
        <div className="col text-light bg-dark">
          <h4 className="card-title ">{post.name}</h4>
          <br />
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
          <h5>{post.defaultDisplayedPriceFormatted} </h5>
          <div className="row align-items-start">
            <div className="col">
              <Link className="btn btn-secondary w-40" to="../..">
                Назад
              </Link>
            </div>
            <div className="col">
              <div className="form-outline w-20">
                <input
                  defaultValue="1"
                  min="1"
                  max="20"
                  type="number"
                  id="typeNumber"
                  className="form-control"
                />
                <label className="form-label" htmlFor="typeNumber">
                  Количество товара
                </label>
              </div>
            </div>

            <div className="col">
              <button
                className="btn btn-primary w-40"
                onClick={buyClickHandler}
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailItem
