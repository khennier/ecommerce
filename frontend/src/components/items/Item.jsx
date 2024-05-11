import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">

            </div>
            <div className="item-price-old">
                
            </div>
        </div>
    </div>
  )
}
