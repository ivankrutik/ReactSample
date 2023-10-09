import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import Footer from './Footer'

//<Menu></Menu>

const MainLayout = () => {
  return (
    <>
      <SiteHeader></SiteHeader>
      <div className="container-fluid bodyContainer">
        <Outlet />
        <div className="d-flex justify-content-end">
          <Footer className="float-right"></Footer>
        </div>
      </div>
    </>
  )
}

export default MainLayout
