import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

export const NavBar = () => {
    const [menu, setMenu] = useState("tienda");
    const [showMenu, setShowMenu] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>ECOMMERCE</p>
            </div>
            <div className="nav-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
                <li onClick={() => { setMenu("tienda") }}><Link to="/">Tienda</Link>{menu === "tienda" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("niños") }}><Link to="/niños">Niños</Link>{menu === "niños" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("niñas") }}><Link to="/niñas">Niñas</Link>{menu === "niñas" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("accesorios") }}><Link to="/accesorios">Accesorios</Link>{menu === "accesorios" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

