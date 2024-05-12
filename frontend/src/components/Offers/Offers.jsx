import React from 'react'
import './Offers.css'
import exclucive_image from '../assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusivas</h1>
            <h1>Ofertas para ti</h1>
            <p>Productos mas vendidos</p>
            <button>Chequea ahora</button>
        </div>
        <div className="offers-right">
            <img src={exclucive_image} alt="" />
        </div>
    </div>
  )
}
