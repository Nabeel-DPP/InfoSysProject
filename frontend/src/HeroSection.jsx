import React from 'react'
import './HeroSection.css';
import { Link } from 'react-router-dom';
export const HeroSection = () => {
  return (
    <div className="hero-container d-flex flex-column align-items-center justify-content-center text-center ">
      <div className="hero-content">
        <p className="sm-heading">Welcome</p>
        <p className="md-heading">Mr. Admin</p>
        <h1 className="lg-heading">Order, Stock & Salary Management System</h1>
      </div>

      <div className="hero-btns mt-5">
    
    <div class="cards">

    <div class="card red ">
        <Link to="/"><p class="tip hero-card-btn"> <i class="fa-solid fa-file-signature"></i> Order</p></Link>   
    </div>
    <div class="card green ">
        <Link to="/"><p class="tip hero-card-btn"><i class="fa-solid fa-clipboard-user"></i> SSR</p> </Link>
    </div>
    <div class=" card blue  ">
        <Link to="/dashboard"><p class="tip hero-card-btn"> <i class="fa-solid fa-book-open-reader"></i> Dashboard</p></Link>
        
    </div>  
      </div>




    </div>
    
    </div>
  )
}
