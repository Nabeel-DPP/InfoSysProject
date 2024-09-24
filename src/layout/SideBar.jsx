import React from 'react'
import { Link } from 'react-router-dom'
export const SideBar = () => {
  return (
    <div>
     <aside className="left-sidebar sidebar-dark" id="left-sidebar">
          <div id="sidebar" className="sidebar sidebar-with-footer">
            
            <div className="app-brand">
              <a href="/index.html">
                <img src="images/Logo.png" style={{height:"45px"}} alt="Mono"/>
                <span className="brand-name">InfoSys</span>
              </a>
            </div>
        
            <div className="sidebar-left" data-simplebar  style={{height: "100%"}}  >
            
              <ul className="nav sidebar-inner" id="sidebar-menu">
                

                
                  <li
                   className=""
                   >
                    {/* <a className="sidenav-item-link" >
                      <i className="mdi mdi-briefcase-account-outline"></i>
                     
                     <span className="nav-text">
                     <Link to={"/"}> 
                      Business Dashboard
                      </Link>
                      </span> 
                      </a>*/
                      }
                       <Link to={"/"} className="sidenav-item-link">
    <i className="mdi mdi-briefcase-account-outline"></i>
    <span className="nav-text">
      Business Dashboard
    </span>
  </Link>
                     
                      
                    
                  </li>
                

                

                
                  <li
                   >
                    


                    <Link to={"/analytics"} className="sidenav-item-link">
                    <i className="mdi mdi-chart-line"></i>
                          <span className="nav-text">
                           Analytics Dashboard
                           </span>
                    </Link>
                  </li>
                

                

                
                  <li className="section-title">
                    Apps
                  </li>
                

                

                
                  {/* <li
                   >
                    <a className="sidenav-item-link" href="chat.html">
                      <i className="mdi mdi-wechat"></i>
                      <span className="nav-text">Chat</span>
                    </a>
                  </li> */}
                

                

                
                  {/* <li
                   >
                    <a className="sidenav-item-link" href="contacts.html">
                      <i className="mdi mdi-phone"></i>
                      <span className="nav-text">Contacts</span>
                    </a>
                  </li>
                 */}

                

{/*                 
                  <li
                   >
                    <a className="sidenav-item-link" href="team.html">
                      <i className="mdi mdi-account-group"></i>
                      <span className="nav-text">Team</span>
                    </a>
                  </li> */}
                

                

                
                  <li
                   >
                    <a className="sidenav-item-link" href="calendar.html">
                      <i className="mdi mdi-calendar-check"></i>
                      <span className="nav-text">Calendar</span>
                    </a>
                  </li>
                

                

                
                  <li  className="has-sub" >
                    <a className="sidenav-item-link" data-toggle="collapse" data-target="#email"
                      aria-expanded="false" aria-controls="email">
                      <i className="mdi mdi-email"></i>
                      <span className="nav-text">email</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="email"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="email-inbox.html">
                                <span className="nav-text">Email Inbox</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="email-details.html">
                                <span className="nav-text">Email Details</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="email-compose.html">
                                <span className="nav-text">Email Compose</span>
                                
                              </a>
                            </li>
                          
                        

                        
                      </div>
                    </ul>
                  </li>
                

                

                
                  {/* <li className="section-title">
                    UI Elements
                  </li> */}
                

                

                
                  {/* <li  className="has-sub" >
                    <a className="sidenav-item-link" data-toggle="collapse" data-target="#ui-elements"
                      aria-expanded="false" aria-controls="ui-elements">
                      <i className="mdi mdi-folder-outline"></i>
                      <span className="nav-text">UI Components</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="ui-elements"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="alert.html">
                                <span className="nav-text">Alert</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="badge.html">
                                <span className="nav-text">Badge</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="breadcrumb.html">
                                <span className="nav-text">Breadcrumb</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                        <li  className="has-sub" >
                          <a className="sidenav-item-link"  data-toggle="collapse" data-target="#buttons"
                            aria-expanded="false" aria-controls="buttons">
                            <span className="nav-text">Buttons</span> <b className="caret"></b>
                          </a>
                          <ul  className="collapse"  id="buttons">
                            <div className="sub-menu">
                              
                              <li >
                                <a href="button-default.html">Button Default</a>
                              </li>
                              
                              <li >
                                <a href="button-dropdown.html">Button Dropdown</a>
                              </li>
                              
                              <li >
                                <a href="button-group.html">Button Group</a>
                              </li>
                              
                              <li >
                                <a href="button-social.html">Button Social</a>
                              </li>
                              
                              <li >
                                <a href="button-loading.html">Button Loading</a>
                              </li>
                              
                            </div>
                          </ul>
                        </li>
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="card.html">
                                <span className="nav-text">Card</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="carousel.html">
                                <span className="nav-text">Carousel</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="collapse.html">
                                <span className="nav-text">Collapse</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="editor.html">
                                <span className="nav-text">Editor</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="list-group.html">
                                <span className="nav-text">List Group</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="modal.html">
                                <span className="nav-text">Modal</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="pagination.html">
                                <span className="nav-text">Pagination</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="popover-tooltip.html">
                                <span className="nav-text">Popover & Tooltip</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="progress-bar.html">
                                <span className="nav-text">Progress Bar</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="spinner.html">
                                <span className="nav-text">Spinner</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="switches.html">
                                <span className="nav-text">Switches</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                        <li  className="has-sub" >
                          <a className="sidenav-item-link"  data-toggle="collapse" data-target="#tables"
                            aria-expanded="false" aria-controls="tables">
                            <span className="nav-text">Tables</span> <b className="caret"></b>
                          </a>
                          <ul  className="collapse"  id="tables">
                            <div className="sub-menu">
                              
                              <li >
                                <a href="bootstarp-tables.html">Bootstrap Tables</a>
                              </li>
                              
                              <li >
                                <a href="data-tables.html">Data Tables</a>
                              </li>
                              
                            </div>
                          </ul>
                        </li>
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="tab.html">
                                <span className="nav-text">Tab</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="toaster.html">
                                <span className="nav-text">Toaster</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                        <li  className="has-sub" >
                          <a className="sidenav-item-link" data-toggle="collapse" data-target="#icons"
                            aria-expanded="false" aria-controls="icons">
                            <span className="nav-text">Icons</span> <b className="caret"></b>
                          </a>
                          <ul  className="collapse"  id="icons">
                            <div className="sub-menu">
                              
                              <li >
                                <a href="material-icons.html">Material Icon</a>
                              </li>
                              
                              <li >
                                <a href="flag-icons.html">Flag Icon</a>
                              </li>
                              
                            </div>
                          </ul>
                        </li>
                        

                        
                        
                        <li  className="has-sub" >
                          <a className="sidenav-item-link" data-toggle="collapse" data-target="#forms"
                            aria-expanded="false" aria-controls="forms">
                            <span className="nav-text">Forms</span> <b className="caret"></b>
                          </a>
                          <ul  className="collapse"  id="forms">
                            <div className="sub-menu">
                              
                              <li >
                                <a href="basic-input.html">Basic Input</a>
                              </li>
                              
                              <li >
                                <a href="input-group.html">Input Group</a>
                              </li>
                              
                              <li >
                                <a href="checkbox-radio.html">Checkbox & Radio</a>
                              </li>
                              
                              <li >
                                <a href="form-validation.html">Form Validation</a>
                              </li>
                              
                              <li >
                                <a href="form-advance.html">Form Advance</a>
                              </li>
                              
                            </div>
                          </ul>
                        </li>
                        

                        
                        
                        <li  className="has-sub" >
                          <a className="sidenav-item-link"  data-toggle="collapse" data-target="#maps"
                            aria-expanded="false" aria-controls="maps">
                            <span className="nav-text">Maps</span> <b className="caret"></b>
                          </a>
                          <ul  className="collapse"  id="maps">
                            <div className="sub-menu">
                              
                              <li >
                                <a href="google-maps.html">Google Map</a>
                              </li>
                              
                              <li >
                                <a href="vector-maps.html">Vector Map</a>
                              </li>
                              
                            </div>
                          </ul>
                        </li>
                        

                        
                        
                        <li  className="has-sub" >
                          <a className="sidenav-item-link"  data-toggle="collapse" data-target="#widgets"
                            aria-expanded="false" aria-controls="widgets">
                            <span className="nav-text">Widgets</span> <b className="caret"></b>
                          </a>
                          <ul  className="collapse"  id="widgets">
                            <div className="sub-menu">
                              
                              <li >
                                <a href="widgets-general.html">General Widget</a>
                              </li>
                              
                              <li >
                                <a href="widgets-chart.html">Chart Widget</a>
                              </li>
                              
                            </div>
                          </ul>
                        </li>
                        

                        
                      </div>
                    </ul>
                  </li> */}
                

                

                
                  <li  className="has-sub" >
                    <a className="sidenav-item-link"  data-toggle="collapse" data-target="#charts"
                      aria-expanded="false" aria-controls="charts">
                      <i className="mdi mdi-chart-pie"></i>
                      <span className="nav-text">Charts</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="charts"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="apex-charts.html">
                                <span className="nav-text">Apex Charts</span>
                                
                              </a>
                            </li>
                          
                        

                        
                      </div>
                    </ul>
                  </li>
                

                

                
                  <li className="section-title">
                    Pages
                  </li>
                

                

                
                  <li  className="has-sub" >
                    <a className="sidenav-item-link"  data-toggle="collapse" data-target="#users"
                      aria-expanded="false" aria-controls="users">
                      {/* <i className="mdi mdi-image-filter-none"></i> */}
                      <i class="mdi mdi-account-circle"></i>
                      <span className="nav-text">User</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="users"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                              {/* <a className="sidenav-item-link" href="user-profile.html">
                                <span className="nav-text">User Profile</span>
                                
                              </a> */}
                              <Link className="sidenav-item-link" to="/userProfile">
                                <span className="nav-text">User Profile</span>
                                
                              </Link> 
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              {/* <a className="sidenav-item-link" href="user-activities.html">
                                <span className="nav-text">User Activities</span>
                                
                              </a> */}
                              <Link className="sidenav-item-link" to="/userActivity">
                                <span className="nav-text">User Activities</span>
                                
                              </Link> 
                            </li>
                          
                        

                        
                        
                          
                            {/* <li >
                              <a className="sidenav-item-link" href="user-profile-settings.html">
                                <span className="nav-text">User Profile Settings</span>
                                
                              </a>
                              <Link className="sidenav-item-link" to="/userSetting">
                                <span className="nav-text">User Profile Settings</span>
                                
                              </Link> 
                            </li> */}
                          
                        

                        
                        
                          
                            <li >
                              {/* <a className="sidenav-item-link" href="user-account-settings.html">
                                <span className="nav-text">User Account Settings</span>
                                
                              </a> */}

                              <Link className="sidenav-item-link" to="/userAccount">
                                
                                <span className="nav-text">User Account Settings</span>
                                
                              </Link> 
                              
                            </li>
                          
                        

                        
                        
                          
                            {/* <li >
                              <a className="sidenav-item-link" href="user-planing-settings.html">
                                <span className="nav-text">User Planing Settings</span>
                                
                              </a>
                            </li> */}
                          
                        

                        
                        
                          
                            {/* <li >
                              <a className="sidenav-item-link" href="user-billing.html">
                                <span className="nav-text">User billing</span>
                                
                              </a>
                            </li> */}
                          
                        

                        
                        
                          
                            {/* <li >
                              <a className="sidenav-item-link" href="user-notify-settings.html">
                                <span className="nav-text">User Notify Settings</span>
                                
                              </a>
                            </li> */}
                          
                        

                        
                      </div>
                    </ul>
                  </li>
                

                

                
                  <li  className="has-sub" >
                    <a className="sidenav-item-link"  data-toggle="collapse" data-target="#authentication"
                      aria-expanded="false" aria-controls="authentication">
                      <i className="mdi mdi-account"></i>
                      <span className="nav-text">Authentication</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="authentication"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                              {/* <a className="sidenav-item-link" >
                                
                                <span className="nav-text">
                               <Link to={"/signup"}> 
                              Sign Up
                               </Link>
                         </span>
                              </a> */}

                              <Link to={"/signup"} className="sidenav-item-link">
                              
                               <span className="nav-text">
                                Sign Up
                               </span>
                             </Link>


                            </li>
                          
                        

                        
                        
                          
                            <li >
                              {/* <a className="sidenav-item-link" href="sign-up.html">
                              
                                
                              <span className="nav-text">
                     <Link to={"/login"}> 
                     Log In
                      </Link>
                      </span>

                              </a> */}

                              <Link to={"/login"} className="sidenav-item-link">
                               
                               <span className="nav-text">
                                Log In
                               </span>
                             </Link>

                            </li>
                          
                        

                        
                        
                          
                            <li >
                              {/* <a className="sidenav-item-link" href="reset-password.html">
                                  
                              <span className="nav-text">
                     <Link to={"/reset"}> 
                     Reset Password
                      </Link>
                      </span>
                                
                              </a> */}

                              <Link to={"/reset"} className="sidenav-item-link">
                              
                               <span className="nav-text">
                                Reset Password
                               </span>
                             </Link>

                            </li>
                          
                        

                        
                      </div>
                    </ul>
                  </li>
                

                

                
                  {/* <li  className="has-sub" >
                    <a className="sidenav-item-link"  data-toggle="collapse" data-target="#other-page"
                      aria-expanded="false" aria-controls="other-page">
                      <i className="mdi mdi-file-multiple"></i>
                      <span className="nav-text">Other pages</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="other-page"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="invoice.html">
                                <span className="nav-text">Invoice</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="404.html">
                                <span className="nav-text">404 page</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="page-comingsoon.html">
                                <span className="nav-text">Coming Soon</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="page-maintenance.html">
                                <span className="nav-text">Maintenance</span>
                                
                              </a>
                            </li>
                          
                        

                        
                      </div>
                    </ul>
                  </li> */}
                

               {/* This is the last documentation section of Sidebar  */}

                
                  {/* <li className="section-title">
                    Documentation
                  </li>
                

                

                
                  <li
                   >
                    <a className="sidenav-item-link" href="getting-started.html">
                      <i className="mdi mdi-airplane"></i>
                      <span className="nav-text">Getting Started</span>
                    </a>
                  </li>
                

                

                
                  <li  className="has-sub" >
                    <a className="sidenav-item-link"  data-toggle="collapse" data-target="#customization"
                      aria-expanded="false" aria-controls="customization">
                      <i className="mdi mdi-square-edit-outline"></i>
                      <span className="nav-text">Customization</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="customization"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="navbar-customization.html">
                                <span className="nav-text">Navbar</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="sidebar-customization.html">
                                <span className="nav-text">Sidebar</span>
                                
                              </a>
                            </li>
                          
                        

                        
                        
                          
                            <li >
                              <a className="sidenav-item-link" href="styling.html">
                                <span className="nav-text">Styling</span>
                                
                              </a>
                            </li>
                          
                        

                        
                      </div>
                    </ul>
                  </li>
                 */}

                
              </ul>

            </div>

            <div className="sidebar-footer">
              <div className="sidebar-footer-content">
                <ul className="d-flex">
                  <li>
                    <a href="user-account-settings.html" data-toggle="tooltip" title="Profile settings"><i className="mdi mdi-settings"></i></a></li>
                  <li>
                    <a href="#" data-toggle="tooltip" title="No chat messages"><i className="mdi mdi-chat-processing"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>


    </div>

  )
}