import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserContext from './context/OrdersContext'
import './index.css'
import Products from './components/BodyPart/Products/Products'
import MainLayout from './components/Layout/MainLayout'
import Basket from './components/BodyPart/Basket'
import About from './components/BodyPart/About'
import NotFound from './components/BodyPart/NotFound'
import DetailItem from './components/BodyPart/Products/DetailItem'
import Categories from './components/BodyPart/Products/Categories'

const API_PRODUCTS_URL =
  'https://app.ecwid.com/api/v3/58958138/products?limit=9&responseFields=items(created,id,defaultDisplayedPrice,defaultDisplayedPriceFormatted,description,smallThumbnailUrl,name)'
const TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'

function App() {
  let [orders, setOrders] = useState([])

  const [data, setData] = useState()
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function parsingData(json) {
    setData({
      total: json.total,
      count: json.count,
      offset: json.offset,
      limit: json.limit,
    })
    setProducts([...json.items])
  }

  function getDataFromServer(categorieId) {
    let apiUrl = API_PRODUCTS_URL
    console.log(categorieId)
    if (categorieId != '-1') {
      apiUrl = apiUrl + '&categories=' + categorieId
    }

    fetch(apiUrl, {
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
    getDataFromServer('-1')
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  if (products.length === 0) {
    return <h1>No data found</h1>
  }

  function addToOrder(order) {
    let isInArr = false
    orders.forEach((el) => {
      if (el.id === order.id) {
        isInArr = true
      }
    })
    if (!isInArr) {
      setOrders([...orders, order])
    }
    console.log(orders)
  }
  function delInOrder(orderId) {
    setOrders(orders.filter((el) => el.id !== orderId))
  }

  function chooseCategories(categorieId) {
    getDataFromServer(categorieId)
  }

  return (
    <UserContext.Provider value={{ orders, addToOrder, delInOrder }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <div>
                  <Categories chooseCategories={chooseCategories} />{' '}
                  <Products products={products} />
                </div>
              }
            ></Route>
            <Route path="/details/:id" element={<DetailItem />}></Route>
            <Route path="basket" element={<Basket />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
