import React, { useState, useContext } from 'react'
import OrdersContext from '../../context/OrdersContext'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import Order from '../BodyPart/Products/Order'

const SiteHeader = () => {
  let [cartOpen, setCartOpen] = useState(false)
  const { orders } = useContext(OrdersContext)
  let summa = 0
  orders.forEach((el) => (summa += Number.parseFloat(el.defaultDisplayedPrice)))

  return (
    <header>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark header">
        <div className="container">
          <p className="text-light bg-dark h3">
            <NavLink className="navbar-brand p-0" to=".">
              <img
                src="../images/goods_added.png"
                alt="goods_added"
                role="presentation"
                className="logoImg"
              ></img>
            </NavLink>{' '}
            {'  '}
            My internet shop
          </p>

          <div className="list-group list-group-horizontal">
            <NavLink className="list-group-item text-light bg-dark " to="." end>
              Товары
            </NavLink>

            <div className="list-group-item text-light bg-dark ">
              <FaShoppingCart
                className={`shopp-cart-button ${cartOpen && 'active'}`}
                onClick={() => {
                  setCartOpen((cartOpen = !cartOpen))
                }}
              ></FaShoppingCart>
              {cartOpen && (
                <div className="shopp-cart text-light bg-dark p-1 border">
                  {orders.length === 0 && (
                    <h5 className="empty">
                      Товаров нет, порадуйте себя покупкой ;)
                    </h5>
                  )}
                  {orders.map((order) => {
                    return <Order key={order.id} {...order}></Order>
                  })}
                  {orders.length !== 0 && (
                    <div className="container">
                      <div className="row">
                        <div className="col p-2">
                          <b className="summa">Сумма: {summa}</b>
                        </div>
                        <div className="col p-2">
                          <NavLink
                            onClick={() => {
                              setCartOpen((cartOpen = !cartOpen))
                            }}
                            className="btn btn-primary w-100"
                            to="basket"
                            end
                          >
                            Оформить заказ
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <NavLink
              className="list-group-item  text-light bg-dark "
              to="about"
            >
              О нас
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
