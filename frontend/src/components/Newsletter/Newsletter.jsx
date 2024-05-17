import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Obten ofertas exclusivas en tu email</h1>
        <p>Suscribete a nuestras novedades</p>
        <div>
            <input type="email" placeholder='Ingresa tu email' />
            <button>Suscribete</button>
        </div>
    </div>
  )
}
