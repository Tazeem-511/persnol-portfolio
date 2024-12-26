import React, { Children } from 'react'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Navbar></Navbar>
      <main>{Children}</main>
    </div>
  )
}

export default Layout
