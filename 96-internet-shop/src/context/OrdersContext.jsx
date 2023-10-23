import { createContext } from 'react'

const OrdersContext = createContext({
  orders: [
    {
      id: '',
      smallThumbnailUrl: '',
      name: '',
      defaultDisplayedPriceFormatted: '',
      defaultDisplayedPrice: '',
      imageUrl: '',
    },
  ],
  addToOrder: () => {},
  delInOrder: () => {},
})

export default OrdersContext
