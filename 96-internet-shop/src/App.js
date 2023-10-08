import './index.css'
import Footer from './components/Footer'
import SiteHeader from './components/SiteHeader'

function App() {
  const API_URL = 'https://app.ecwid.com/api/v3/58958138/products?limit=3'
  const TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'

  /*data = []

  getDataFromServer() {
    
      fetch(API_URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          data = json
        })
    }
  }*/

  return (
    <div className="bodyContainer">
      <SiteHeader></SiteHeader>
      <div className="d-flex justify-content-end">
        <Footer className="float-right"></Footer>
      </div>
    </div>
  )
}

export default App
