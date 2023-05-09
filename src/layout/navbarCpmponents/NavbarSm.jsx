import React from 'react'
import NavbarSmall from './NavbarSmall'
export default function NavbarSm({children}) {
  return (
    <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <NavbarSmall name="Home" link ="/"/>
      <NavbarSmall name="products" link="/products"/>
    </div>
  </div>
  )
}
