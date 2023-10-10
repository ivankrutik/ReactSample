import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const API_URL = 'https://app.ecwid.com/api/v3/58958138/products?productId='
const TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'

const DetailItem = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [post, setPost] = useState({})

  const params = useParams()
  const navigate = useNavigate()

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

  if (error) {
    return <h1>Error: {error}</h1>
  }

  if (!post) {
    return <h1>No data found</h1>
  }

  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <div className="p-3">
            <img src={post.imageUrl} className="w-100" alt="detail image" />
          </div>
        </div>
        <div className="col">
          <div className="p-3">
            <h4 className="card-title text-light bg-dark">{post.name}</h4>
            <br />
            <div
              className="text-light bg-dark"
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
            <h5 className="text-light bg-dark">
              {post.defaultDisplayedPriceFormatted}{' '}
            </h5>
            <div className="row align-items-start">
              <div className="col">
                <Link className="btn btn-primary w-50" to="../..">
                  Назад
                </Link>
              </div>
              <div className="col">
                <button className="btn btn-primary w-50">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailItem
