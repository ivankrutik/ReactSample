import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import Footer from '../BodyPart/Footer'

const MainLayout = () => {
  return (
    <>
      <SiteHeader></SiteHeader>
      <div className="container text-center my-2">
        <Outlet />
        <div className="d-flex justify-content-end">
          <Footer className="float-right"></Footer>
        </div>
      </div>
    </>
  )
}

export default MainLayout
