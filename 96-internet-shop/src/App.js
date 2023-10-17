import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserContext from './context/OrdersContext'
import './index.css'
import Products from './components/BodyPart/Products/Products'
import MainLayout from './components/Layout/MainLayout'
import Pagination from './components/Layout/Pagination'
import Basket from './components/BodyPart/Basket'
import About from './components/BodyPart/About'
import NotFound from './components/BodyPart/NotFound'
import DetailItem from './components/BodyPart/Products/DetailItem'
import Categories from './components/BodyPart/Products/Categories'

const API_PRODUCTS_URL = 'https://app.ecwid.com/api/v3/58958138/products?'
// &responseFields=items(created,id,defaultDisplayedPrice,defaultDisplayedPriceFormatted,description,smallThumbnailUrl,name)
const TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'

function App() {
  let [orders, setOrders] = useState([])

  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [categoryId, setCategoryId] = useState('-1')

  const [perPage, setPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalProducts, setTotalProducts] = useState()

  function parsingProducts(json) {
    setTotalProducts(json.total)
    setProducts([...json.items])
  }

  function getDataFromServer() {
    let apiUrl = API_PRODUCTS_URL
    if (categoryId != '-1') {
      apiUrl = apiUrl + '&categories=' + categoryId
    }

    console.log(currentPage * perPage)
    apiUrl = apiUrl + '&offset=' + (currentPage - 1) * perPage

    apiUrl = apiUrl + '&limit=' + perPage

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        parsingProducts(json)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    setIsLoading(true)
    getDataFromServer()
  }, [currentPage, perPage, categoryId])

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
  }
  function delInOrder(orderId) {
    setOrders(orders.filter((el) => el.id !== orderId))
  }

  function chooseCategories(categoryId) {
    setCategoryId(categoryId)
  }

  function pageCounteChangeHandler(value) {
    setPerPage(value)
  }

  function paginate(num) {
    setCurrentPage(num)
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
                  <div className="row ">
                    <div className="col">
                      <label
                        className="form-label text-light"
                        htmlFor="typeNumber"
                      >
                        Количество товара на странице: &nbsp;
                      </label>
                      <input
                        defaultValue="3"
                        min="1"
                        max="20"
                        type="number"
                        id="typeNumber"
                        className="form-control page-num"
                        onChange={(e) =>
                          pageCounteChangeHandler(e.target.value)
                        }
                      />
                    </div>
                    <div className="col">
                      <Categories chooseCategories={chooseCategories} />{' '}
                    </div>
                  </div>
                  <Pagination
                    cntPerPage={perPage}
                    totalProducts={totalProducts}
                    paginate={paginate}
                  ></Pagination>
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
