import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';

export const NavBar = () => {
  const [menu, setMenu] = useState('tienda');

  const menuItems = [
    { label: 'Tienda', id: 'tienda' },
    { label: 'Niños', id: 'niños' },
    { label: 'Niñas', id: 'niñas' },
    { label: 'Accesorios', id: 'accesorios' }
  ];

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>ECOMMERCE</p>
      </div>
      <ul className='nav-menu'>
        {menuItems.map(item => (
          <li key={item.id} onClick={() => setMenu(item.id)}>
            {item.label}
            {menu === item.id && <hr />}
          </li>
        ))}
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt='' />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};
