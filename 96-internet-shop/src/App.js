import './index.css'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import SiteHeader from './components/SiteHeader'
import Items from './components/Items'
const API_URL = 'https://app.ecwid.com/api/v3/58958138/products?limit=3'
const TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'

function App() {
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

  return (
    <div className="bodyContainer">
      <SiteHeader></SiteHeader>
      <Items posts={posts} />
      <div className="d-flex justify-content-end">
        <Footer className="float-right"></Footer>
      </div>
    </div>
  )
}

export default App
