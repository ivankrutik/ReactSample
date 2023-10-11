import { createContext } from 'react'

const OrdersContext = createContext({
  orders: [],
  addToOrder: () => {},
})

export default OrdersContext
