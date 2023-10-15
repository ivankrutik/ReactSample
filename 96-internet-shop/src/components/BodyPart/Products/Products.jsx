import React from 'react'
import { useEffect, useState } from 'react'
import CardItem from './CardItem'
const API_URL =
  'https://app.ecwid.com/api/v3/58958138/products?limit=9&responseFields=items(created,id,defaultDisplayedPrice,defaultDisplayedPriceFormatted,description,smallThumbnailUrl,name)'
const TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'

const Products = () => {
  const [data, setData] = useState()
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function parsingData(json) {
    setData({
      total: json.total,
      count: json.count,
      offset: json.offset,
      limit: json.limit,
    })
    setPosts([...json.items])
  }

  function getDataFromServer() {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        parsingData(json)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    setIsLoading(true)
    getDataFromServer()
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  if (posts.length === 0) {
    return <h1>No data found</h1>
  }

  return (
    <div className="row justify-content-centr row-cols-2 row-cols-md-3 row-cols-lg-4  ">
      {posts.map((post) => {
        return <CardItem key={post.id} {...post}></CardItem>
      })}
    </div>
  )
}

export default Products
