import React from 'react'
import './NewCollections.css'
import new_collecion from '../assets/new_collections'
import { Item } from '../items/Item'

export const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>Nuevas colecciones</h1>
        <hr />
        <div className="collections">
            {new_collecion.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
