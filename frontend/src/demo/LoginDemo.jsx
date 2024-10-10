import React from 'react';
import { Link } from 'react-router-dom';
import './LoginDemo.css'; // Import the custom CSS

export const LoginDemo = () => {
  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="glass-card">
        {/* Logo or Heading */}
        <div className="app-brand w-100 d-flex justify-content-center border-bottom-0">
                      <a className="w-auto pl-0" href="/index.html">
                        <img src="images/logo.png" style={{height:"50px"}}  alt="RAAZEE"/>
                        <span className="brand-name form-head ">InfoSys</span>
                      </a>
                    </div>
        <div className="form-header text-center mb-4">
         
          <p className='lg-head-text'>Login to your account</p>
        </div>

        {/* Login Form */}
        <form className="login-form">
          <div className="mb-4">
            <input type="email" className="form-control glass-input" placeholder="Email Address" required />
          </div>
          <div className="mb-4">
            <input type="password" className="form-control glass-input" placeholder="Password" required />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <Link to="/reset" className="forgot-link">Forgot Password?</Link>
          </div>
          <button type="submit" className="btn glass-button w-100">Sign In</button>

          <p className="text-center mt-4" style={{color:"black"}} >
            Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
