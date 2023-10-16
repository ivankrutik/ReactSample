import { createContext } from 'react'

const OrdersContext = createContext({
  orders: [
    {
      id: '',
      smallThumbnailUrl: '',
      name: '',
      defaultDisplayedPriceFormatted: '',
      defaultDisplayedPrice: '',
    },
  ],
  addToOrder: () => {},
  delInOrder: () => {},
})

export default OrdersContext
