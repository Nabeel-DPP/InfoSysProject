import React from 'react'
import { Link } from 'react-router-dom'
export const UserActivity = () => {
  return (
    <div className="content-wrapper">
    <div className="content">
<div className="card card-default card-profile">

<div className="card-header-bg" style={{image:"url(assets/img/user/user-bg-01.jpg)"}}></div>

<div className="card-body card-profile-body">

<div className="profile-avata">
<img className="rounded-circle" src="images/user/user-md-01.jpg" alt="Avata Image"/>
<a className="h5 d-block mt-3 mb-2" href="#">Albrecht Straub</a>
<a className="d-block text-color" href="#">albercht@example.com</a>
</div>

<ul className="nav nav-profile-follow">
<li className="nav-item">
  <a className="nav-link" href="#">
    <span className="h5 d-block">1503</span>
    <span className="text-color d-block">Friends</span>
  </a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">
    <span className="h5 d-block">2905</span>
    <span className="text-color d-block">Followers</span>
  </a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">
    <span className="h5 d-block">1200</span>
    <span className="text-color d-block">Following</span>
  </a>
</li>

</ul>

<div className="profile-button">
<a className="btn btn-primary btn-pill" href="user-planing-settings.html">Upgrade Plan</a>
</div>

</div>

<div className="card-footer card-profile-footer">
{/* <ul className="nav nav-border-top justify-content-center">
<li className="nav-item">
  <a className="nav-link" href="user-profile.html">Profile</a>
</li>
<li className="nav-item">
  <a className="nav-link active" href="user-activities.html">Activities</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="user-profile-settings.html">Settings</a>
</li>

</ul> */}
 <ul className="nav nav-border-top justify-content-center">
      <li className="nav-item">
        {/* <a className="nav-link active" href="user-profile.html">Profile</a> */}
        <Link className="nav-link " to="/userProfile">Profile</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="user-activities.html">Activities</a> */}
        <Link className="nav-link active" to="/userActivity">Activities</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="user-profile-settings.html">Settings</a> */}
        <Link className="nav-link" to="/userAccount">Settings</Link>
      </li>

    </ul>
</div>

</div>

<div className="row">
<div className="col-xl-9">
<div className="card card-default">
<div className="card-header">
  <h2>Activities</h2>
</div>
<div className="card-body">

  <div className="media media-sm border-bottom pb-6">
    <div className="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-01.jpg" alt="User Image"/>
      </a>
    </div>
    <div className="media-body">
      <div className="d-flex justify-content-between flex-wrap align-items-center mb-5">
        <div className="left-side">
          <a className="title mb-0 d-block" href="user-profile.html">Selena Wagner</a>
          <a className="d-block" href="user-profile.html">Designer</a>
        </div>
        <div className="right-side">
          <time className="small">5 mins ago</time>
        </div>
      </div>
      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. ut enim ad minim veniam quis nos trud exercitation ullamco laboris nisi ut aliquip.</p>
      <div className="row user-gallery">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-01.jpg" alt="Gallery Image"/>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-02.jpg" alt="Gallery Image"/>
        </div>
      </div>
    </div>
  </div>

  <div className="media media-sm border-bottom">
    <div className="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-02.jpg" alt="User Image"/>
      </a>
    </div>
    <div className="media-body">
      <div className="d-flex justify-content-between flex-wrap align-items-center mb-5">
        <div className="left-side">
          <a className="title mb-0 d-block" href="user-profile.html">Walter Reuter</a>
          <a className="d-block" href="user-profile.html">Designer</a>
        </div>
        <div className="right-side">
          <time className="small">2 hrs ago</time>
        </div>
      </div>
      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. ut enim ad minim veniam quis nos trud exercitation ullamco laboris nisi ut aliquip.</p>
    </div>
  </div>

  <div className="media media-sm border-bottom pb-6">
    <div className="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-03.jpg" alt="User Image"/>
      </a>
    </div>
    <div className="media-body">
      <div className="d-flex justify-content-between flex-wrap align-items-center mb-5">
        <div className="left-side">
          <a className="title mb-0 d-block" href="user-profile.html">Larissa Gebhard</a>
          <a className="d-block" href="user-profile.html">Cyber Punk</a>
        </div>
        <div className="right-side">
          <time className="small">5 hrs ago</time>
        </div>
      </div>
      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna  aliqua. ut enim ad minim veniam quis nos trud exercitation ullamco laboris nisi ut aliquip.</p>
      <div className="row user-gallery">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-03.jpg" alt="Gallery Image"/>
        </div>
      </div>
    </div>
  </div>

  <div className="media media-sm border-bottom pb-6">
    <div className="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-04.jpg" alt="User Image"/>
      </a>
    </div>
    <div className="media-body">
      <div className="d-flex justify-content-between flex-wrap align-items-center mb-5">
        <div className="left-side">
          <a className="title mb-0 d-block" href="user-profile.html">Albrecht Straub</a>
          <a className="d-block" href="user-profile.html">Photographer</a>
        </div>
        <div className="right-side">
          <time className="small">7 hrs ago</time>
        </div>
      </div>
      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. ut enim ad minim veniam quis nos trud exercitation ullamco laboris nisi ut aliquip.</p>
      <div className="row user-gallery">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-04.jpg" alt="Gallery Image"/>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-05.jpg" alt="Gallery Image"/>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-06.jpg" alt="Gallery Image"/>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-07.jpg" alt="Gallery Image"/>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-08.jpg" alt="Gallery Image"/>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-09.jpg" alt="Gallery Image"/>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-10.jpg" alt="Gallery Image"/>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <img className="img-fluid mb-6" src="images/gallery/gallery-img-11.jpg" alt="Gallery Image"/>
        </div>
      </div>
    </div>
  </div>

</div>

</div>
</div>
<div className="col-xl-3">
<div className="card card-default">
<div className="card-header">
  <h2>Contacts</h2>
</div>
<div className="card-body">

  <div className="media media-sm">
    <div className="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-01.jpg" alt="User Image"/>
        <span className="active bg-primary"></span>
      </a>
    </div>
    <div className="media-body">
      <a href="user-profile.html">
        <span className="title">Selena Wagner</span>
        <span className="discribe">Designer</span>
      </a>
    </div>
  </div>

  <div className="media media-sm">
    <div className="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-02.jpg" alt="User Image"/>
        <span className="active bg-primary"></span>
      </a>
    </div>
    <div className="media-body">
      <a href="user-profile.html">
        <span className="title">Walter Reuter</span>
        <span>Developer</span>
      </a>
    </div>
  </div>

  <div className="media media-sm">
    <div className="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-03.jpg" alt="User Image"/>
      </a>
    </div>
    <div className="media-body">
      <a href="user-profile.html">
        <span className="title">Larissa Gebhardt</span>
        <span>Cyber Punk</span>
      </a>
    </div>
  </div>

  <div className="media media-sm">
    <div className="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-04.jpg" alt="User Image"/>
      </a>

    </div>
    <div className="media-body">
      <a href="user-profile.html">
        <span className="title">Albrecht Straub</span>
        <span>Photographer</span>
      </a>
    </div>
  </div>

  <div className="media media-sm">
    <div className="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-05.jpg" alt="User Image"/>
        <span className="active bg-danger"></span>
      </a>
    </div>
    <div className="media-body">
      <a href="user-profile.html">
        <span className="title">Leopold Ebert</span>
        <span>Fashion Designer</span>
      </a>
    </div>
  </div>

  <div className="media media-sm">
    <div className="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-06.jpg" alt="User Image"/>
        <span className="active bg-primary"></span>
      </a>
    </div>
    <div className="media-body">
      <a href="user-profile.html">
        <span className="title">Selena Wagner</span>
        <span>Photographer</span>
      </a>
    </div>
  </div>

</div>
</div>
</div>
</div>


</div>
    
  </div>
  )
}
