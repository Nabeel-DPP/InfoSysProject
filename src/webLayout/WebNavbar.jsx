import React from 'react'
import {useEffect} from 'react';
// import "./webLayout.css";
import initSearch from './Animation';

import { Link } from 'react-router-dom'
export const WebNavbar = () => {
  useEffect(() => {
    initSearch(); // Initialize the search functionality
}, []);

  return (
    <div class="navbar custom-navbar sticky-top navbar-expand-lg bg-body-tertiary border-bottom-0  ">
    <div class="container-fluid">
      
      {/* <a class="navbar-brand logo-effect brand-name" href="#">InfoSys</a> */}
      <a class="navbar-brand logo-effect" href="#">
  <div class="logo-inner">
    <div class="logo-front">
      InfoSys
    </div>
    <div class="logo-back">
      <img src="/src/webLayout/Logo.png" alt="Logo Image" class="logo-image"/>
    </div>
  </div>
</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span> <i class="fa-solid fa-bars"></i> </span>
      </button>
      <div class="collapse navbar-collapse ml-5" id="navbarSupportedContent">
        <ul class="Navbar-nav navbar-nav  me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Operations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Stock & Salary</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Management</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">User & Rights</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Reports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Download</a>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/dashboard"> Dashboard</Link>
          </li>
          
          </ul>
       
        {/* <form class="d-flex" role="search" id="searchForm">
    <span class="nav-search-icon" id="searchIcon">
        <i class="fa-solid fa-magnifying-glass"></i>
    </span>
    <input class="form-control me-2 nav-search-input" type="search" placeholder="Search" aria-label="Search" id="searchInput"/>
</form> */}

<div class="container" id="searchContainer">
  <input id="checkbox" class="checkbox" type="checkbox" />
  <div class="mainbox">
    <div class="iconContainer">
      <i class="fa-solid fa-magnifying-glass search_icon"></i>
    </div>
    <input class="search_input" placeholder="search" type="text" />
  </div>
</div>



        
      </div>
      <div className="account-btn">
      <div class="button">
  <div class="button-wrapper">
    <div class="text">Sign Up</div>
    <span class="icon">
      <i class="fa-solid fa-user-plus"></i>
    </span>
  </div>
</div>
<div class="button">
  <div class="button-wrapper">
    <div class="text">Login</div>
    <span class="icon">
    <i class="fa-solid fa-user-shield"></i>
    </span>
  </div>
</div>
</div>
    </div>
  </div>
  )
}
