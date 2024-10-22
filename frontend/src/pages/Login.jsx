


import React from 'react';
import { Link } from 'react-router-dom';


export const Login = () => {
  return (
    <div>
      <body className="row vh-100 justify-content-center align-items-center LoginContainerForm" id="body">
        <div className="distributor-form__container col-lg-4 position-relative">
        <div className="app-brand w-100 d-flex justify-content-center border-bottom-0">
                      <a className="w-auto pl-0" href="/index.html">
                        <img src="images/logo.png" style={{height:"50px"}}  alt="RAAZEE"/>
                        <span className="brand-name form-head ">InfoSys</span>
                      </a>
                    </div>
                    <p className='lg-head-text text-center'>Login to your account</p>
          {/* <span className="distributor-form__title col-lg-6">Login</span> */}

          <div className="distributor-input-group   mt-5 " >
            <input
              type="text"
              id="username"
              className="distributor-input"
              required
            />
            <label htmlFor="username" className="distributor-label">
              Username
            </label>
            <i className="input-icon fa fa-user"></i>
          </div>

          <div className="distributor-input-group">
            <input
              type="password"
              id="password"
              className="distributor-input"
              required
            />
            <label htmlFor="password" className="distributor-label">
              Password
            </label>
            <i className="input-icon fa-solid fa-lock"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
              <label className="form-check-label" style={{color:"white"}}  htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <Link to="/reset" className="forgot-link">Forgot Password?</Link>
          </div>
          <button className="distributor-submit-btn mb-3">Login</button>

          <p className="text-center mt-4" style={{color:"GrayText"}} >
            Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
          </p>
         
          
        </div>
      </body>
    </div>
  );
}
