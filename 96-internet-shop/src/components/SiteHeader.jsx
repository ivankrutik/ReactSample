import React from 'react'

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
        <div class="list-group list-group-horizontal">
          <a
            href="/products"
            class="list-group-item list-group-item-action text-light bg-dark"
          >
            Товары
          </a>
          <a
            href="/basket"
            class="list-group-item list-group-item-action text-light bg-dark"
          >
            Корзина
          </a>
          <a
            href="/about"
            class="list-group-item list-group-item-action text-light bg-dark"
          >
            О нас
          </a>
        </div>
      </div>

      <div className="presentation"></div>
    </header>
  )
}

export default SiteHeader
