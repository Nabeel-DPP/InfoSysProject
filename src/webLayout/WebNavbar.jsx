import React from 'react'
export const WebNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">InfoSys</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span> <i class="fa-solid fa-bars"></i> </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
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
          </ul>
        <form class="d-flex" role="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          
        </form>
      </div>
    </div>
  </nav>
  )
}
