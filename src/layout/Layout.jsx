import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <Fragment>
    <Navbar/>
        {children}
    <Footer/>
    </Fragment>

  )
}
