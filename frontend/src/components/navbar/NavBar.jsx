import React, { useState } from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    const [menu, setMenu] = useState ("tienda");
      return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>ECOMMERCE</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("tienda")}}><Link style={{textDecoration: 'none'}} to="/">Tienda</Link>{menu==="tienda"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("niños")}}><Link to="/niños">Niños</Link>{menu==="niños"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("niñas")}}><Link to="/niñas">Niñas</Link>{menu==="niñas"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("accesorios")}}><Link to="/accesorios">Accesorios</Link>{menu==="accesorios"?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
