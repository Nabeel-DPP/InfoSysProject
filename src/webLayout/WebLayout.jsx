// import React from 'react'
// import "./webLayout.css";
// import { Outlet } from 'react-router-dom'
// import { WebNavbar } from './WebNavbar'
// import { WebFooter } from './WebFooter'
// export const WebLayout = () => {
//   return (
//     <div className='overall-layout d-flex flex-column min-vh-100'>
//     <WebNavbar/>
//     <div className='webOutlet flex-grow-1'>
//     <Outlet/>
//     </div>
//     <WebFooter/>
//     </div>
//   )
// }

//This is the Layout for the Loader 

import React, { useState, useEffect } from 'react';
import './webLayout.css';
import { Outlet } from 'react-router-dom';
import { WebNavbar } from './WebNavbar';
import { WebFooter } from './WebFooter';
import { Loader } from '../components/Loader';

export const WebLayout = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading (you can replace this with actual loading logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this delay as per your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='overall-layout d-flex flex-column min-vh-100'>
      {loading ? (
        <div className='fullscreen-loader'>
          <Loader /> {/* Loader is called here */}
        </div>
      ) : (
        <>
          <WebNavbar />
          <div className='webOutlet flex-grow-1'>
            <Outlet />
          </div>
          <WebFooter />
        </>
      )}
    </div>
  );
};
