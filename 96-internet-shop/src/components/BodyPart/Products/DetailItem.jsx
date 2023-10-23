import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import OrdersContext from '../../../context/OrdersContext'
import IsBusy from '../../Layout/IsBusy'

const API_URL = 'https://app.ecwid.com/api/v3/58958138/products?productId='
const TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'

const DetailItem = () => {
  const [error, setError] = useState('')
  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const { addToOrder } = useContext(OrdersContext)

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
    addToOrder({
      id: post.id,
      smallThumbnailUrl: post.smallThumbnailUrl,
      name: post.name,
      defaultDisplayedPriceFormatted: post.defaultDisplayedPriceFormatted,
      defaultDisplayedPrice: post.defaultDisplayedPrice,
      imageUrl: post.imageUrl,
    })
  }

  if (isLoading) {
    return <IsBusy></IsBusy>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  if (!post) {
    return <h1>No data found</h1>
  }

  return (
    <div className="container text-center">
      <div className="row align-items-start p-3">
        <div className="col">
          <img src={post.imageUrl} className="w-100" alt="detail image" />
        </div>
        <div className="col text-light bg-dark">
          <h4 className="card-title ">{post.name}</h4>
          <br />
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
          <h4>{post.defaultDisplayedPriceFormatted} </h4>
          <div className="row align-items-center">
            <div className="col p-1">
              <Link className="btn btn-secondary" to="../..">
                Вернуться к товарам
              </Link>
            </div>
            <div className="col p-1">
              <button className="btn btn-primary" onClick={buyClickHandler}>
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailItem
