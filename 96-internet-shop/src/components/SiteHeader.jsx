import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const SiteHeader = () => {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div className="navbar bg-dark header">
        <p className="text-light bg-dark h3">
          <img
            src="../images/goods_added.png"
            alt="goods_added"
            role="presentation"
            className="logoImg"
          ></img>{' '}
          {'  '}
          My internet shop
        </p>

        <div className="list-group list-group-horizontal px-3">
          <NavLink
            className="list-group-item list-group-item-action text-light bg-dark link_header"
            to="."
            end
          >
            Товары
          </NavLink>

          <div className="list-group-item list-group-item-action text-light bg-dark link_header">
            <FaShoppingCart
              className={`shopp-cart-button ${cartOpen && 'active'}`}
              onClick={() => {
                setCartOpen((cartOpen = !cartOpen))
              }}
            ></FaShoppingCart>
            {cartOpen && <div className="shopp-cart"></div>}
          </div>

          <NavLink
            className="list-group-item list-group-item-action text-light bg-dark link_header"
            to="basket"
            end
          >
            Корзина
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action text-light bg-dark link_header"
            to="about"
          >
            О нас
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
