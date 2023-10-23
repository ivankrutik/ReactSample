import React from 'react'
import { useContext } from 'react'
import OrdersContext from '../../context/OrdersContext'

const Basket = () => {
  const { orders } = useContext(OrdersContext)

  function sendMessageHandler() {
    let temp = {}

    orders.map((order, idx) => {
      temp[idx] = order
    })

    temp = JSON.stringify(temp)
    alert(temp)
  }

  return (
    <div className="container">
      <div className="row justify-content-centr row-cols-2 row-cols-md-3 row-cols-lg-4 ">
        <div className="col">
          {orders.map((order) => {
            return (
              <div className="row">
                <div class="col">
                  <img
                    src={order.imageUrl}
                    className="w-100"
                    alt="detail image"
                  />
                </div>
                <div className="col text-light bg-dark">
                  <h4 className="card-title ">{order.name}</h4>
                  <br />
                  <h4>{order.defaultDisplayedPriceFormatted} </h4>
                </div>
                <div className="col">
                  <label className="form-label text-light" htmlFor="typeNumber">
                    Количество товара: &nbsp;
                  </label>
                  <input
                    defaultValue="1"
                    min="1"
                    max="20"
                    type="number"
                    id="typeNumber"
                    className="form-control page-num"
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className="col p-1 form-label text-light">
          <div className="div-border-bott">
            <button className="btn btn-primary" onClick={sendMessageHandler}>
              Оплатить
            </button>
          </div>
          <div className="p-1">
            <div className="xb0">
              <span className="x0b">Ваша корзина</span>{' '}
              <span className="bx1">{orders.length} товар </span>
            </div>
          </div>
          <div class="b7w">
            <div class="wb7">
              <span class="w7b">
                <span>Товары (1)</span>
              </span>
            </div>{' '}
            <div>
              <span class="b8w">845&nbsp;₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket
