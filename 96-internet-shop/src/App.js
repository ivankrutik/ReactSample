import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import UserContext from './context/OrdersContext'
import './index.css'
import Products from './components/BodyPart/Products/Products'
import MainLayout from './components/MainLayout'
import Basket from './components/BodyPart/Basket'
import About from './components/BodyPart/About'
import NotFound from './components/BodyPart/NotFound'
import DetailItem from './components/BodyPart/Products/DetailItem'

function App() {
  let [orders, setOrders] = useState([])

  function addToOrder(order) {
    setOrders([...orders, order])
    console.log(orders)
  }

  return (
    <UserContext.Provider value={{ orders, addToOrder }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Products />}></Route>
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
