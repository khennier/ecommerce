import React from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
export const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}
