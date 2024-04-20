
import './App.css'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {


  return (
    <>

      <Header />
      <Outlet />

      <Footer />
    </>
  )
}

export default Layout
