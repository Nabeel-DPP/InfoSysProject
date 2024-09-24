import React from 'react'

import { Outlet } from 'react-router-dom'
import { WebNavbar } from './WebNavbar'
import { WebFooter } from './WebFooter'
export const WebLayout = () => {
  return (
    <div className='index-page'>
    <WebNavbar/>
    <Outlet/>
    <WebFooter/>
    </div>
  )
}
