import { Link } from 'react-router-dom'
import React from 'react'
import { HeroSection } from './HeroSection'
import { OrderSection } from './OrderSection'
import { StockSection } from './StockSection'
import { ManageSection } from './ManageSection'
export const Home = () => {
  return  (
    <div>
      <HeroSection/>
      <OrderSection/>
      <StockSection/>
      <ManageSection/>
    </div>
  )   

  
}
