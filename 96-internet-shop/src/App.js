import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Products from './components/BodyPart/Products/Products'
import MainLayout from './components/MainLayout'
import Basket from './components/BodyPart/Basket'
import About from './components/BodyPart/About'
import NotFound from './components/BodyPart/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Products />}></Route>
          <Route path="basket" element={<Basket />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
