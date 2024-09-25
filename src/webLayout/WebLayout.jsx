import React from 'react'
import "./webLayout.css";
import { Outlet } from 'react-router-dom'
import { WebNavbar } from './WebNavbar'
import { WebFooter } from './WebFooter'
export const WebLayout = () => {
  return (
    <div className='overall-layout d-flex flex-column min-vh-100'>
    <WebNavbar/>
    <div className='webOutlet flex-grow-1'>
    <Outlet/>
    </div>
    <WebFooter/>
    </div>
  )
}
