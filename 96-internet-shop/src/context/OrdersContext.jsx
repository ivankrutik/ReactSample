import { createContext } from 'react'

const OrdersContext = createContext({
  orders: [
    { id: '', count: '', smallThumbnailUrl: '', name: '', totalPrice: '' },
  ],
  addToOrder: () => {},
  delInOrder: () => {},
})

export default OrdersContext
