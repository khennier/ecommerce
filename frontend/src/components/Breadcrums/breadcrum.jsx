import React from 'react';
import './breadcrum.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

export const Breadcrum = (props) => {
    const { product } = props;
  
    console.log(product); // Agregar esto para ver si `product` se está pasando correctamente
  
    return (
      <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
      </div>
    );
  };
  
