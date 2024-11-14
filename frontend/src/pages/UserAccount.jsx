import React from 'react'
import { Link } from 'react-router-dom';
export const UserAccount = () => {
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
        <a className="nav-link" href="user-activities.html">Activities</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="user-profile-settings.html">Settings</a>
      </li>

    </ul> */}
     <ul className="nav nav-border-top justify-content-center">
      <li className="nav-item">
        {/* <a className="nav-link active" href="user-profile.html">Profile</a> */}
        <Link className="nav-link " to="/userProfile">Profile</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="user-activities.html">Activities</a> */}
        <Link className="nav-link" to="/userActivity">Activities</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="user-profile-settings.html">Settings</a> */}
        <Link className="nav-link active" to="/userAccount">Settings</Link>
      </li>

    </ul>
  </div>

</div>

<div className="row">
  {/* <div className="col-xl-3">
    
    <div className="card card-default">
      <div className="card-header">
        <h2>Settings</h2>
      </div>

      <div className="card-body pt-0">

        <ul className="nav nav-settings">
          <li className="nav-item">
            <a className="nav-link" href="user-profile-settings.html">
              <i className="mdi mdi-account-outline mr-1"></i> Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="user-account-settings.html">
              <i className="mdi mdi-settings-outline mr-1"></i> Account
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="user-planing-settings.html">
              <i className="mdi mdi-currency-usd mr-1"></i> Planing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="user-billing.html">
              <i className="mdi mdi-set-top-box mr-1"></i> Billing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="user-notify-settings.html">
              <i className="mdi mdi-bell-outline mr-1"></i> Notifications
            </a>
          </li>
        </ul>

      </div>

    </div>
  </div> */}
  <div className="col-lg-12">
    
    <div className="card card-default">
      <div className="card-header">
        <h2 className="mb-5">Account Settings</h2>

      </div>

      <div className="card-body">

        <form>
          <div className="row mb-2">
            <div className="col-lg-6">
              <div className="form-group">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName"/ >
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName"/>
              </div>
            </div>
          </div>

          <div className="form-group mb-4">
            <label for="userName">User name</label>
            <input type="text" className="form-control" id="userName"/>
            <span className="d-block mt-1">Accusamus nobis at omnis consequuntur culpa tempore saepe animi.</span>
          </div>

          <div className="form-group mb-4">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email"/>
          </div>

          <div className="form-group mb-4">
            <label for="newPassword">New password</label>
            <input type="password" className="form-control" id="newPassword"/>
          </div>

          <div className="form-group mb-4">
            <label for="conPassword">Confirm password</label>
            <input type="password" className="form-control" id="conPassword"/>
          </div>

          <div className="d-flex justify-content-end mt-6">
            <button type="submit" className="btn btn-primary mb-2 btn-pill">Update Profile</button>
          </div>

        </form>
      </div>
    </div>




  </div>

</div>
</div>
          
        </div>
  );
}
