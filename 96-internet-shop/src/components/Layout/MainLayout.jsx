import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader'

const MainLayout = () => {
  return (
    <>
      <SiteHeader></SiteHeader>
      <div className="container text-center my-2">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
