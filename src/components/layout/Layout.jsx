import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../../Pages/Navber'
import Footer from '../../Pages/Footer'


const Layout = () => {
  return (
    <div>
      <Navber></Navber>
        <Outlet></Outlet>
     <Footer></Footer>
    </div>
  )
}

export default Layout