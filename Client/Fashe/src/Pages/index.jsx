import React from 'react'
import Header from '../Layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Layouts/Footer'

const ClientLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default ClientLayout
