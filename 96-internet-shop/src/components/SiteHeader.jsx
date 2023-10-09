import React from 'react'
import { NavLink } from 'react-router-dom'

const SiteHeader = () => {
  return (
    <header>
      <div className="navbar bg-dark ">
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
            className="list-group-item list-group-item-action text-light bg-dark"
            to="."
            end
          >
            Товары
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action text-light bg-dark"
            to="basket"
            end
          >
            Корзина
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action text-light bg-dark"
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
