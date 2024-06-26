import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import { Popular } from '../components/Popular/Popular.jsx'
import { Offers } from '../components/Offers/Offers.jsx'
import { NewCollections } from '../components/NewCollections/NewCollections.jsx'
import { Newsletter } from '../components/Newsletter/Newsletter.jsx'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}
