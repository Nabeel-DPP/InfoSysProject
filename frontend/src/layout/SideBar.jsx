import React from 'react'
import { Link } from 'react-router-dom'
export const SideBar = () => {
  return (
    <div>
     <aside className="left-sidebar sidebar-dark" id="left-sidebar">
          <div id="sidebar" className="sidebar sidebar-with-footer">
            
            <div className="app-brand">
              <Link to="/">
                <img src="images/Logo.png" style={{height:"45px"}} alt="Mono"/>
                <span className="brand-name">InfoSys</span>
              </Link>
            </div>
        
            <div className="sidebar-left" data-simplebar  style={{height: "100%"}}  >
            
              <ul className="nav sidebar-inner" id="sidebar-menu">
                

                
<li>
                   
                       <Link to={"/"} className="sidenav-item-link">
    <i className="mdi mdi-briefcase-account-outline"></i>
    <span className="nav-text">
      Business Dashboard
    </span>
  </Link>
                     
</li>               
<li>
                      <Link to={"/analytics"} className="sidenav-item-link">
                    <i className="mdi mdi-chart-line"></i>
                          <span className="nav-text">
                           Analytics Dashboard
                           </span>
                    </Link>
</li>                                    
<li  className="has-sub" >
                    <a className="sidenav-item-link" data-toggle="collapse" data-target="#order"
                      aria-expanded="false" aria-controls="order">
                     <i class="fa-regular fa-pen-to-square"></i>
                      <span className="nav-text">Order</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="order"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                            <Link to={"/orderTable"} className="sidenav-item-link">
    
    <span className="nav-text">
      Order 
    </span>
  </Link>
                            </li>
                      
                            <li >
                            <Link to={"/orderDetail"} className="sidenav-item-link">
    
    <span className="nav-text">
      Order Detail
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/orderInsert"} className="sidenav-item-link">
    
    <span className="nav-text">
     Add Order
    </span>
  </Link>
                            </li>
                            {/* <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Stock Receiving
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Write Query
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Execute Query
    </span>
  </Link>
                            </li> */}
                          
                        
                      </div>
                    </ul>
</li>
<li  className="has-sub" >
                    <a className="sidenav-item-link" data-toggle="collapse" data-target="#stock"
                      aria-expanded="false" aria-controls="stock">
                    <i class="fa-solid fa-boxes-stacked"></i>
                      <span className="nav-text">Stock & Salary</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="stock"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Salary
    </span>
  </Link>
                            </li>
                      
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
     SSR Summary
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Distributor's SSR Summary
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Dispatch Transit Received
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      MIO Sales vs Targets
    </span>
  </Link>
                            </li>

                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Ex-Distributor Sales
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Distributer's SSR Details
     </span>
  </Link>
                            </li>



                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Purchase Pending Dispatch
     </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      MIO Sales vs SSR Sales
     </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Cash Files
     </span>
  </Link>
                            </li>
                            
                          
                        
                      </div>
                    </ul>
</li>
<li  className="has-sub" >
                    <a className="sidenav-item-link" data-toggle="collapse" data-target="#manage"
                      aria-expanded="false" aria-controls="manage">
                    <i class="fa-solid fa-user-shield"></i>
                      <span className="nav-text">Management</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="manage"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Analyzer
    </span>
  </Link>
                            </li>
                      
                            <li >
                            <Link to={"/areaTable"} className="sidenav-item-link">
    
    <span className="nav-text">
    Area of Sale
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/dispatchTable"} className="sidenav-item-link">
    
    <span className="nav-text">
    Product Dispatch
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/bankTable"} className="sidenav-item-link">
    
    <span className="nav-text">
      Banks
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/distTable"} className="sidenav-item-link">
    
    <span className="nav-text">
      Distributors
    </span>
  </Link>
                            </li>

                            {/* <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Disable Login
    </span>
  </Link>
                            </li> */}
                            <li >
                            <Link to={"/goodsTable"} className="sidenav-item-link">
    
    <span className="nav-text">
      Goods Transporter
     </span>
  </Link>
                            </li>

                            <li >
                            <Link to={"/productTable"} className="sidenav-item-link">
    
    <span className="nav-text">
     Products (All)
     </span>
  </Link>
                            </li>

                            <li >
                            <Link to={"/productLog"} className="sidenav-item-link">
    
    <span className="nav-text">
     Product Log
     </span>
  </Link>
                            </li>



                            <li >
                            <Link to={"/productQuota"} className="sidenav-item-link">
    
    <span className="nav-text">
     Product Quota
     </span>
  </Link>
                            </li>



                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Institutions
     </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
     MIO & Targets
     </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      NEWS
     </span>
  </Link>
                            </li>


                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
     Payment Slips
     </span>
  </Link>
                            </li>

                            

                            
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
     Orders Period
     </span>
  </Link>
                            </li>

                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
     SSR Month
     </span>
  </Link>
                            </li>
                            
                          
                        
                      </div>
                    </ul>
</li>

<li  className="has-sub" >
                    <a className="sidenav-item-link" data-toggle="collapse" data-target="#rights"
                      aria-expanded="false" aria-controls="rights">
                      <i class="fa-solid fa-people-roof"></i>
                      <span className="nav-text">Users & Rights</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="rights"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                            <Link to={"/loginTable"} className="sidenav-item-link">
    
    <span className="nav-text">
      Logins
    </span>
  </Link>
                            </li>
                      
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Change Password
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/rights"} className="sidenav-item-link">
    
    <span className="nav-text">
     User & Rights
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/rightSection"} className="sidenav-item-link">
    
    <span className="nav-text">
      Rights Section
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Active Users
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/roleTable"} className="sidenav-item-link">
    
    <span className="nav-text">
      Assign Roles
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Change Bio Data Requests
    </span>
  </Link>
                            </li>
                          
                        
                      </div>
                    </ul>
</li>
<li  className="has-sub" >
                    <a className="sidenav-item-link" data-toggle="collapse" data-target="#reports"
                      aria-expanded="false" aria-controls="reports">
                      <i class="fa-solid fa-file-invoice-dollar"></i>
                      <span className="nav-text">Reports</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="reports"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Ex-Factory Sales
    </span>
  </Link>
                            </li>
                      
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Reports
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
    Dashboard
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
      Acknowledgement
    </span>
  </Link>
                            </li>
                                     
                      </div>
                    </ul>
</li>

<li  className="has-sub" >
                    <a className="sidenav-item-link" data-toggle="collapse" data-target="#download"
                      aria-expanded="false" aria-controls="download">
                      <i class="fa-solid fa-download"></i>
                      <span className="nav-text">Download</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="download"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                        
                        
                          
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
  Order Form
    </span>
  </Link>
                            </li>
                      
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
  SSR Form
    </span>
  </Link>
                            </li>
                            <li >
                            <Link to={"/"} className="sidenav-item-link">
    
    <span className="nav-text">
    Backup Database
    </span>
  </Link>
                            </li>
                            </div>
                    </ul>
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
                              
                              <Link className="sidenav-item-link" to="/userProfile">
                                <span className="nav-text">User Profile</span>
                                
                              </Link> 
                            </li>
                          
                        

                        
                        
                          
                            <li >
                             
                              <Link className="sidenav-item-link" to="/userActivity">
                                <span className="nav-text">User Activities</span>
                                
                              </Link> 
                            </li>
                          
                        

                        
                        
                          
                           
                          
                        

                        
                        
                          
                            <li >
                             

                              <Link className="sidenav-item-link" to="/userAccount">
                                
                                <span className="nav-text">User Account Settings</span>
                                
                              </Link> 
                              
                            </li>
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