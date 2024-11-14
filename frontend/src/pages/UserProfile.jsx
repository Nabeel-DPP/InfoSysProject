import React from 'react'
import { Link } from 'react-router-dom'
export const UserProfile = () => {

    
  return (
    <div className="content-wrapper">
          <div className="content">
<div className="card card-default card-profile">

  <div className="card-header-bg" style={{image:"url(assets/img/user/user-bg-01.jpg)"}}></div>

  <div className="card-body card-profile-body">

    <div className="profile-avata">
      <img className="rounded-circle" src="images/user/user-md-01.jpg" alt="Avata Image"/>
      <span className="h5 d-block mt-3 mb-2">Albrecht Straub</span>
      <span className="d-block">Albrecht.straub@gmail.com</span>
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
    <ul className="nav nav-border-top justify-content-center">
      <li className="nav-item">
        {/* <a className="nav-link active" href="user-profile.html">Profile</a> */}
        <Link className="nav-link active" to="/userProfile">Profile</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="user-activities.html">Activities</a> */}
        <Link className="nav-link" to="/userActivity">Activities</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="user-profile-settings.html">Settings</a> */}
        <Link className="nav-link" to="/userAccount">Settings</Link>
      </li>

    </ul>
  </div>

</div>

<div className="row">
  <div className="col-xl-3 col-md-6">
    <div className="card card-default">
      <div className="d-flex p-5">
        <div className="icon-md bg-secondary rounded-circle mr-3">
          <i className="mdi mdi-account-plus-outline"></i>
        </div>
        <div className="text-left">
          <span className="h2 d-block">890</span>
          <p>New Users</p>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-md-6">
    <div className="card card-default">
      <div className="d-flex p-5">
        <div className="icon-md bg-success rounded-circle mr-3">
          <i className="mdi mdi-table-edit"></i>
        </div>
        <div className="text-left">
          <span className="h2 d-block">350</span>
          <p>Order Placed</p>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-md-6">
    <div className="card card-default">
      <div className="d-flex p-5">
        <div className="icon-md bg-primary rounded-circle mr-3">
          <i className="mdi mdi-content-save-edit-outline"></i>
        </div>
        <div className="text-left">
          <span className="h2 d-block">1360</span>
          <p>Total Sales</p>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-md-6">
    <div className="card card-default">
      <div className="d-flex p-5">
        <div className="icon-md bg-info rounded-circle mr-3">
          <i className="mdi mdi-bell"></i>
        </div>
        <div className="text-left">
          <span className="h2 d-block">$8930</span>
          <p>Monthly Revenue</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-lg-12">
    
    <div className="card card-default" data-scroll-height="530">
      <div className="card-header">
        <h2 className="mb-5">Notification</h2>
      </div>

      <div className="card-body slim-scroll">
        <ul className="list-group">
          <li className="list-group-item list-group-item-action">
            <div className="media media-sm mb-0">
              <div className="media-sm-wrapper">
                <img src="images/user/user-sm-01.jpg" alt="User Image"/>
              </div>
              <div className="media-body">
                <span className="title">The stars are twinkling.</span>
                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at.</p>
              </div>
            </div>
          </li>
          <li className="list-group-item list-group-item-action">
            <div className="media media-sm mb-0">
              <div className="media-sm-wrapper">
                <img src="images/user/user-sm-02.jpg" alt="User Image"/>
              </div>
              <div className="media-body">
                <span className="title">This is a Japanese doll.</span>
                <p>Marianne or husbands if at stronger ye. Considered is as middletons uncommonly. Promotion perfectly ye
                  consisted so.</p>
              </div>
            </div>
          </li>
          <li className="list-group-item list-group-item-action">
            <div className="media media-sm mb-0">
              <div className="media-sm-wrapper">
                <img src="images/user/user-sm-03.jpg" alt="User Image"/>
              </div>
              <div className="media-body">
                <span className="title">Support Ticket</span>
                <p>Unpleasant nor diminution excellence apartments imprudence the met new. Draw part them he an to he roof
                  only.
                  Music
                  leave say doors him.</p>
              </div>
            </div>
          </li>
          <li className="list-group-item list-group-item-action">
            <div className="media media-sm mb-0">
              <div className="media-sm-wrapper">
                <img src="images/user/user-sm-04.jpg" alt="User Image"/>
              </div>
              <div className="media-body">
                <span className="title">New Order</span>
                <p>Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As
                  hastened
                  oh
                  produced prospect formerly up am.</p>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
  {/* <div className="col-lg-6">
    
    <div className="card card-default pb-4" id="todo">
      <div className="card-header mb-3">
        <h2>To Do list</h2>

        <a className="btn btn-primary btn-pill" id="add-task" href="#" role="button"> Add task </a>
      </div>

      <div className="card-body" data-simplebar style={{height: "385px"}}>
        <div className="todo-single-item d-none" id="todo-input">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter Todo" autofocus/>
            </div>
          </form>
        </div>
        <div className="todo-list" id="todo-list">
          <div className="todo-single-item d-flex flex-row justify-content-between finished">
            <i className="mdi"></i>
            <span>Finish Dashboard UI Kit update</span>
            <span className="badge badge-primary">Finished</span>
          </div>
          <div className="todo-single-item d-flex flex-row justify-content-between current">
            <i className="mdi"></i>
            <span>Create new prototype for the landing page</span>
            <span className="badge badge-primary">Today</span>
          </div>
          <div className="todo-single-item d-flex flex-row justify-content-between ">
            <i className="mdi"></i>
            <span> Add new Google Analytics code to all main files </span>
            <span className="badge badge-danger">Yesterday</span>
          </div>

          <div className="todo-single-item d-flex flex-row justify-content-between ">
            <i className="mdi"></i>
            <span>Update parallax scroll on team page</span>
            <span className="badge badge-success">Dec 15, 2018</span>
          </div>

          <div className="todo-single-item d-flex flex-row justify-content-between ">
            <i className="mdi"></i>
            <span>Update parallax scroll on team page</span>
            <span className="badge badge-success">Dec 15, 2018</span>
          </div>
          <div className="todo-single-item d-flex flex-row justify-content-between ">
            <i className="mdi"></i>
            <span>Create online customer list book</span>
            <span className="badge badge-success">Dec 15, 2018</span>
          </div>
          <div className="todo-single-item d-flex flex-row justify-content-between ">
            <i className="mdi"></i>
            <span>Lorem ipsum dolor sit amet, consectetur.</span>
            <span className="badge badge-success">Dec 15, 2018</span>
          </div>

          <div className="todo-single-item d-flex flex-row justify-content-between mb-1">
            <i className="mdi"></i>
            <span>Update parallax scroll on team page</span>
            <span className="badge badge-success">Dec 15, 2018</span>
          </div>
        </div>
      </div>
    </div> 
    



  </div> */}
</div>
            
                <div className="row">
                  <div className="col-12">
                    <div className="card card-default">
                      <div className="card-header">
                        <h2>Products Inventory</h2>
                        <div className="dropdown">
                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"> Yearly Chart
                          </a>

                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <table id="productsTable" className="table table-hover table-product" style={{width:"100%"}}>
                          <thead>
                            <tr>
                              <th></th>
                              <th>Product Name</th>
                              <th>ID</th>
                              <th>Qty</th>
                              <th>Variants</th>
                              <th>Committed</th>
                              <th>Daily Sale</th>
                              <th>Sold</th>
                              <th>In Stock</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-01.jpg" alt="Product Image"/>
                              </td>
                              <td>Coach Swagger</td>
                              <td>24541</td>
                              <td>27</td>
                              <td>1</td>
                              <td>2</td>
                              <td>
                                <div id="tbl-chart-01"></div>
                              </td>
                              <td>4</td>
                              <td>18</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-02.jpg" alt="Product Image"/>
                              </td>
                              <td>Toddler Shoes, Gucci Watch</td>
                              <td>24542</td>
                              <td>18</td>
                              <td>7</td>
                              <td>5</td>
                              <td>
                                <div id="tbl-chart-02"></div>
                              </td>
                              <td>1</td>
                              <td>14</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-03.jpg" alt="Product Image"/>
                              </td>
                              <td>Hat Black Suits</td>
                              <td>24543</td>
                              <td>20</td>
                              <td>3</td>
                              <td>7</td>
                              <td>
                                <div id="tbl-chart-03"></div>
                              </td>
                              <td>6</td>
                              <td>26</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-04.jpg" alt="Product Image"/>
                              </td>
                              <td>Backpack Gents</td>
                              <td>24544</td>
                              <td>37</td>
                              <td>8</td>
                              <td>3</td>
                              <td>
                                <div id="tbl-chart-04"></div>
                              </td>
                              <td>6</td>
                              <td>7</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-05.jpg" alt="Product Image"/>
                              </td>
                              <td>Speed 500 Ignite</td>
                              <td>24545</td>
                              <td>8</td>
                              <td>3</td>
                              <td>4</td>
                              <td>
                                <div id="tbl-chart-05"></div>
                              </td>
                              <td>8</td>
                              <td>42</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-06.jpg" alt="Product Image"/>
                              </td>
                              <td>Olay</td>
                              <td>24546</td>
                              <td>19</td>
                              <td>6</td>
                              <td>6</td>
                              <td>
                                <div id="tbl-chart-06"></div>
                              </td>
                              <td>79</td>
                              <td>12</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-07.jpg" alt="Product Image"/>
                              </td>
                              <td>Ledger Nano X</td>
                              <td>24547</td>
                              <td>61</td>
                              <td>46</td>
                              <td>18</td>
                              <td>
                                <div id="tbl-chart-07"></div>
                              </td>
                              <td>76</td>
                              <td>36</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-08.jpg" alt="Product Image"/>
                              </td>
                              <td>Surface Laptop 2</td>
                              <td>24548</td>
                              <td>33</td>
                              <td>56</td>
                              <td>89</td>
                              <td>
                                <div id="tbl-chart-08"></div>
                              </td>
                              <td>38</td>
                              <td>5</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-09.jpg" alt="Product Image"/>
                              </td>
                              <td>TIGI Bed Head Superstar Queen</td>
                              <td>24549</td>
                              <td>3</td>
                              <td>9</td>
                              <td>15</td>
                              <td>
                                <div id="tbl-chart-09"></div>
                              </td>
                              <td>6</td>
                              <td>46</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-10.jpg" alt="Product Image"/>
                              </td>
                              <td>Wattbike Atom</td>
                              <td>24550</td>
                              <td>61</td>
                              <td>56</td>
                              <td>68</td>
                              <td>
                                <div id="tbl-chart-10"></div>
                              </td>
                              <td>3</td>
                              <td>19</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-11.jpg" alt="Product Image"/>
                              </td>
                              <td>Smart Watch</td>
                              <td>24551</td>
                              <td>19</td>
                              <td>76</td>
                              <td>38</td>
                              <td>
                                <div id="tbl-chart-11"></div>
                              </td>
                              <td>3</td>
                              <td>17</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-12.jpg" alt="Product Image"/>
                              </td>
                              <td>Magic Bullet Blender</td>
                              <td>24552</td>
                              <td>12</td>
                              <td>30</td>
                              <td>14</td>
                              <td>
                                <div id="tbl-chart-12"></div>
                              </td>
                              <td>26</td>
                              <td>9</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-13.jpg" alt="Product Image"/>
                              </td>
                              <td>Kanana rucksack</td>
                              <td>24553</td>
                              <td>14</td>
                              <td>65</td>
                              <td>39</td>
                              <td>
                                <div id="tbl-chart-13"></div>
                              </td>
                              <td>9</td>
                              <td>55</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-14.jpg" alt="Product Image"/>
                              </td>
                              <td>Copic Opaque White</td>
                              <td>24554</td>
                              <td>43</td>
                              <td>29</td>
                              <td>75</td>
                              <td>
                                <div id="tbl-chart-14"></div>
                              </td>
                              <td>7</td>
                              <td>15</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="py-0">
                                <img src="images/products/products-xs-15.jpg" alt="Product Image"/>
                              </td>
                              <td>Headphones</td>
                              <td>24555</td>
                              <td>17</td>
                              <td>6</td>
                              <td>7</td>
                              <td>
                                <div id="tbl-chart-15"></div>
                              </td>
                              <td>6</td>
                              <td>98</td>
                              <td>
                                <div className="dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                  </a>

                                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </div>
                              </td>
                            </tr>



                          </tbody>
                        </table>

                      </div>
                    </div>
                  </div>
                </div>
</div>
          
        </div>
  )
}
