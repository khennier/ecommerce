import React, { useState } from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
export const NavBar = () => {
    const [menu, setMenu] = useState ("tienda");
      return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>ECOMMERCE</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("tienda")}}>Tienda{menu==="tienda"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("niños")}}>Niños{menu==="niños"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("niñas")}}>Niñas{menu==="niñas"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("accesorios")}}>Accesorios{menu==="accesorios"?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
