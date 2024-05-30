import React, { useState } from 'react'
import './NewCollections.css'
import { Item } from '../items/Item'

export const NewCollections = () => {
  const [new_collection,setNew_collection] = useState([])
  return (
    <div className='newcollections'>
        <h1>Nuevas colecciones</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
