import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

const MainLayout = () => {
  return (
    <>
      <Menu></Menu>
      <Outlet />
    </>
  )
}

export default MainLayout
