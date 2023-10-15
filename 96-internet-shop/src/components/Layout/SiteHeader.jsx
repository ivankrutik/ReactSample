import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const SiteHeader = () => {
  let [cartOpen, setCartOpen] = useState(false)

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
                <div className="shopp-cart text-light bg-dark"></div>
              )}
            </div>

            <NavLink
              className="list-group-item  text-light bg-dark "
              to="basket"
              end
            >
              Корзина
            </NavLink>
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
