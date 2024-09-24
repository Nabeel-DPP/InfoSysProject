import React from 'react'
import "./webLayout.css";
import { Outlet } from 'react-router-dom'
import { WebNavbar } from './WebNavbar'
import { WebFooter } from './WebFooter'
export const WebLayout = () => {
  return (
    <div className='WebLayout'>
    <WebNavbar/>
    <Outlet/>
    <WebFooter/>
    </div>
  )
}
