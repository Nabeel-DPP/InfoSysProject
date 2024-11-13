import React from 'react'
import { useEffect , useState } from 'react';
import { Box, Card, CardHeader, CardContent, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IncomeGraph from '../graph/IncomeGraph';
import SalesGraph from '../graph/SaleGraph';
import RevenueGraph from '../graph/RevenueGraph';
import ExpenseGraph from '../graph/ExpenseGraph';
import ProfitGraph from '../graph/ProfitGraph';
import Map from '../components/Map';
import SalesTable from './SalesTable';
export const Dashboard = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  className='content-wrapper' >
      
      <div className="content">                
                
                  <div className="row">
                   
 <Box className="col-lg-6">
      <Card variant="outlined" sx={{ borderRadius: 1, boxShadow: 3 , marginTop:1}}>
        <CardHeader
          title="Sales"
          action={
            <IconButton aria-label="settings" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleMenuClose}>Action</MenuItem>
          <MenuItem onClick={handleMenuClose}>Another action</MenuItem>
          <MenuItem onClick={handleMenuClose}>Something else here</MenuItem>
        </Menu>
        <CardContent>
          <div className="sub-title">
            <span className="mr-1">Sales of this year</span> |
            <span className="mx-1">45%</span>
            <i className="mdi mdi-arrow-up-bold text-success"></i>
          </div>
          {/* Render the SalesGraph component here */}
          <SalesGraph />
        </CardContent>
      </Card>
    </Box>


    <Box className="col-lg-6">
      <Card variant="outlined" sx={{ borderRadius: 1, boxShadow: 3, marginTop: 1 }}>
        <CardHeader
          title="Revenue"
          action={
            <IconButton aria-label="settings" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleMenuClose}>Action</MenuItem>
          <MenuItem onClick={handleMenuClose}>Another action</MenuItem>
          <MenuItem onClick={handleMenuClose}>Something else here</MenuItem>
        </Menu>
        <CardContent>
          <div className="sub-title">
            <span className="mr-1">Revenue of this year</span> |
            <span className="mx-1">+20%</span>
            <i className="mdi mdi-arrow-up-bold text-success"></i>
          </div>
         
          <RevenueGraph />
        </CardContent>
      </Card>
    </Box>

<Box className="col-lg-6">
      <Card variant="outlined" sx={{ borderRadius: 1, boxShadow: 3, marginTop: 3 , height:400}}>
        <CardHeader
          title="Expenses"
          action={
            <IconButton aria-label="settings" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleMenuClose}>Action</MenuItem>
          <MenuItem onClick={handleMenuClose}>Another action</MenuItem>
          <MenuItem onClick={handleMenuClose}>Something else here</MenuItem>
        </Menu>
        <CardContent>
          <div className="sub-title">
            <span className="mr-1">Expenses of this year</span> |
            <span className="mx-1">+15%</span>
            <i className="mdi mdi-arrow-up-bold text-warning"></i>
          </div>
          
          <ExpenseGraph />
        </CardContent>
      </Card>
    </Box>
                  

                    <Box className="col-lg-6" >
      <Card variant="outlined" sx={{ borderRadius: 1, boxShadow: 3, marginTop: 3 , height:400}}>
        <CardHeader
          title="Profit"
          action={
            <IconButton aria-label="settings" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleMenuClose}>Action</MenuItem>
          <MenuItem onClick={handleMenuClose}>Another action</MenuItem>
          <MenuItem onClick={handleMenuClose}>Something else here</MenuItem>
        </Menu>
        <CardContent   sx={ {padding:0, height:350, justifyContent:'center' , display:'flex'}}>
         
          <ProfitGraph />
        </CardContent>
      </Card>
    </Box>

                   


                    
                  </div>



                <div className="row">
                 
                  
         <div className="col-lg-12">
         <IncomeGraph />  
          </div>          
        
       
      

                
                </div>


       <div className="row">
                  <div className="col-xl-4">
                    
                    <div className="card card-default">
                      <div className="card-header">
                        <h2>Top Distributors</h2>
                      </div>
                      <div className="card-body">
                        <table className="table table-borderless table-thead-border">
                          <thead>
                            <tr>
                              <th>Name</th>
                            
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-dark font-weight-bold">Premier Sales Limited</td>
                             
                            </tr>
                            <tr>
                              <td className="text-dark font-weight-bold">Shifa Medical Company</td>
                              
                            </tr>
                            <tr>
                              <td className="text-dark font-weight-bold">AL-Noor Traders</td>
                             
                            </tr>
                            <tr>
                              <td className="text-dark font-weight-bold">Nisar Enterprises</td>
                            
                            </tr>
                          </tbody>
                          <tfoot className="border-top">
                            <tr>
                              <td><a href="#" className="text-uppercase">See All</a></td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>

                  </div>
               
                  <div className="col-xl-8">
                    <div className="card card-default">
                      <div className="card-header">
                        <h2>Sales by Country</h2>
                        <div id="country-sales-range" className="date-range">
                          <i className="mdi mdi-calendar"></i>&nbsp;
                          <span className="date-holder"></span>
                          <i className="mdi mdi-menu-down"></i>
                        </div>
                      </div>
                      <div className="card-body pb-3" >
                        {/* <div className="row pb-4">
                          <div className="col-lg-12 border-right-lg">
                            <div className="vec-map-wrapper" >
                              <div id="home-world" style={{height: "100%" , width: "100%"}} ></div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="chart-wrapper">
                              <div id="horizontal-bar-chart"></div>
                            </div>
                          </div>
                        </div> */}
                       <Map/> 
                       
  
                      </div>
                    </div>
                  </div>
                </div>

              <div className="row">
                {/* <div className="col-lg-12">
                  
                    
                    <div className="card card-default">
                      <div className="card-header align-items-center">
                        <h2 className="">Sales by Product</h2>
                        <a href="#" className="btn btn-primary btn-pill" data-toggle="modal" data-target="#modal-stock">Add Stock</a>
                      </div>
                      <div className="card-body">
                        <div className="tab-content">
                          <table id="product-sale" className="table table-product " style={{width:"100%"}} >
                            <thead>
                              <tr>
                                <th>Product Name</th>
                                <th>Unit</th>
                                <th>Amount</th>
                                <th>%sold</th>
                                <th className="th-width-250"></th>
                              </tr>
                            </thead>
                            <tbody>

                              <tr>
                                <td>Coach Swagger</td>
                                <td>134</td>
                                <td>$24541</td>
                                <td>35.28%</td>
                                <td>
                                  <div className="progress progress-md rounded-0">
                                    <div className="progress-bar" role="progressbar" style={{width: "70%"}}  aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>Toddler Shoes</td>
                                <td>119</td>
                                <td>$20225</td>
                                <td>27.05%</td>
                                <td>
                                  <div className="progress progress-md rounded-0">
                                    <div className="progress-bar" role="progressbar" style={{width: "55%"}}aria-valuenow="55%" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>Hat Black Suits</td>
                                <td>101</td>
                                <td>$17,290</td>
                                <td>20.25%</td>
                                <td>
                                  <div className="progress progress-md rounded-0">
                                    <div className="progress-bar" role="progressbar" style={{width: "45%"}} aria-valuenow="45%" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>Backpack Gents</td>
                                <td>59</td>
                                <td>$1150</td>
                                <td>12.50%</td>
                                <td>
                                  <div className="progress progress-md rounded-0">
                                    <div className="progress-bar" role="progressbar" style={{width: "25%"}}aria-valuenow="25%" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>Speed 500 Ignite</td>
                                <td>25</td>
                                <td>$590</td>
                                <td>02.10%</td>
                                <td>
                                  <div className="progress progress-md rounded-0">
                                    <div className="progress-bar" role="progressbar" style={{width: "10%"}}aria-valuenow="10%" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>Earphone & Headphone</td>
                                <td>23</td>
                                <td>$450</td>
                                <td>02%</td>
                                <td>
                                  <div className="progress progress-md rounded-0">
                                    <div className="progress-bar" role="progressbar" style={{width: "8%"}} aria-valuenow="8%" aria-valuemin="0"
                                      aria-valuemax="100"></div>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>Gucci Watch</td>
                                <td>32</td>
                                <td>$554</td>
                                <td>8%</td>
                                <td>
                                  <div className="progress progress-md rounded-0">
                                    <div className="progress-bar" role="progressbar" style={{width: "8%"}} aria-valuenow="8%" aria-valuemin="0"
                                      aria-valuemax="100"></div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                </div> */}
                <SalesTable/>
                {/* <div className="col-xl-4">
                  
                    
                      <div className="card card-default chat">
                        <div className="card-header">
                          <h2>Selena Wagner</h2>
                          <div className="dropdown dropdown-chat-state">
                            <button className="dropdown-toggle btn btn-primary btn-rounded-circle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                              <i className="mdi mdi-account-alert"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                              <li>
                                <a href="#" className="user-link">
                                  <img src="images/user/user-sm-01.jpg" alt="User Image"/>
                                  <span className="username">anna patuary
                                    <span className="badge badge-secondary">18</span>
                                  </span>
                                  <span className="state active">
                                    <i className="mdi mdi-circle-medium"></i>
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="user-link">
                                  <img src="images/user/user-sm-02.jpg" alt="User Image"/>
                                  <span className="username">riman Ghose
                                    <span className="badge badge-secondary">18</span>
                                  </span>
                                  <span className="state">
                                    1hrs
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="user-link">
                                  <img src="images/user/user-sm-03.jpg" alt="User Image"/>
                                  <span className="username">riman Ghose
                                    <span className="badge badge-secondary">18</span>
                                  </span>
                                  <span className="state">
                                    1hrs
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="user-link">
                                  <img src="images/user/user-sm-04.jpg" alt="User Image"/>
                                  <span className="username">riman Ghose
                                    <span className="badge badge-secondary">18</span>
                                  </span>
                                  <span className="state">
                                    1hrs
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="user-link">
                                  <img src="images/user/user-sm-05.jpg" alt="User Image"/>
                                  <span className="username">riman Ghose</span>
                                  <span className="state">15min</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body pb-0" data-simplebar style={{width: "363px"}}>
                          
                          <div className="media media-chat">
                            <img src="images/user/user-sm-01.jpg" className="rounded-circle" alt="Avata Image"/>
                            <div className="media-body">
                              <div className="text-content">
                                <span className="message">Hello my name is anna.</span>
                                <time className="time">5 mins ago</time>
                              </div>
                            </div>
                          </div>

                          
                          <div className="media media-chat media-chat-right">
                            <div className="media-body">
                              <div className="text-content">
                                <span className="message">Hello i am Riman.</span>
                                <time className="time">4 mins ago</time>
                              </div>
                              <div className="text-content">
                                <span className="message">I want to know about yourself</span>
                                <time className="time">3 mins ago</time>
                              </div>
                            </div>
                            <img src="images/user/user-sm-02.jpg" className="rounded-circle" alt="Avata Image"/>
                          </div>

                          
                          <div className="media media-chat">
                            <img src="images/user/user-sm-01.jpg" className="rounded-circle" alt="Avata Image"/>
                            <div className="media-body">
                              <div className="text-content">
                                <span className="message">Its had resolving otherwise she contented therefore.</span>
                                <time className="time">1 mins ago</time>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat-footer">
                          <form>
                            <div className="input-group input-group-chat">
                              <div className="input-group-prepend">
                                <span className="emoticon-icon mdi mdi-emoticon-happy-outline"></span>
                              </div>
                              <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                            </div>
                          </form>
                        </div>
                      </div>

                </div> */}
              </div>

              
              <div className="modal fade modal-stock" id="modal-stock" aria-labelledby="modal-stock" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                  <form action="#">
                    <div className="modal-content">
                      <div className="modal-header align-items-center p3 p-md-5">
                        <h2 className="modal-title" id="exampleModalGridTitle">Add Stock</h2>
                        <div>
                          <button type="button" className="btn btn-light btn-pill mr-1 mr-md-2" data-dismiss="modal"> cancel </button>
                          <button type="submit" className="btn btn-primary  btn-pill" data-dismiss="modal"> save </button>
                        </div>

                      </div>
                      <div className="modal-body p3 p-md-5">
                        <div className="row">
                          <div className="col-lg-8">
                            <h3 className="h5 mb-5">Product Information</h3>
                            <div className="form-group mb-5">
                              <label for="new-product">Product Title</label>
                              <input type="text" className="form-control" id="new-product" placeholder="Add Product"/>
                            </div>
                            <div className="form-row mb-4">
                              <div className="col">
                                <label for="price">Price</label>
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">$</span>
                                  </div>
                                  <input type="text" className="form-control" id="price" placeholder="Price" aria-label="Price"
                                    aria-describedby="basic-addon1"/>
                                </div>
                              </div>
                              <div className="col">
                                <label for="sale-price">Sale Price</label>
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">$</span>
                                  </div>
                                  <input type="text" className="form-control" id="sale-price" placeholder="Sale Price" aria-label="SalePrice"
                                    aria-describedby="basic-addon1"/>
                                </div>
                              </div>
                            </div>

                            <div className="product-type mb-3 ">
                              <label className="d-block" for="sale-price">Product Type <i className="mdi mdi-help-circle-outline"></i> </label>
                              <div>

                                <div className="custom-control custom-radio d-inline-block mr-3 mb-3">
                                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" checked="checked"/>
                                  <label className="custom-control-label" for="customRadio1">Physical Good</label>
                                </div>

                                <div className="custom-control custom-radio d-inline-block mr-3 mb-3">
                                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                                  <label className="custom-control-label" for="customRadio2">Digital Good</label>
                                </div>

                                <div className="custom-control custom-radio d-inline-block mr-3 mb-3">
                                  <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                                  <label className="custom-control-label" for="customRadio3">Service</label>
                                </div>

                              </div>
                            </div>

                            <div className="editor">
                              <label className="d-block" for="sale-price">Description <i className="mdi mdi-help-circle-outline"></i></label>
                              <div id="standalone">
                                <div id="toolbar">
                                  <span className="ql-formats">
                                    <select className="ql-font"></select>
                                    <select className="ql-size"></select>
                                  </span>
                                  <span className="ql-formats">
                                    <button className="ql-bold"></button>
                                    <button className="ql-italic"></button>
                                    <button className="ql-underline"></button>
                                  </span>
                                  <span className="ql-formats">
                                    <select className="ql-color"></select>
                                  </span>
                                  <span className="ql-formats">
                                    <button className="ql-blockquote"></button>
                                  </span>
                                  <span className="ql-formats">
                                    <button className="ql-list" value="ordered"></button>
                                    <button className="ql-list" value="bullet"></button>
                                    <button className="ql-indent" value="-1"></button>
                                    <button className="ql-indent" value="+1"></button>
                                  </span>
                                  <span className="ql-formats">
                                    <button className="ql-direction" value="rtl"></button>
                                    <select className="ql-align"></select>
                                  </span>
                                </div>
                              </div>
                              <div id="editor"></div>

                              <div className="custom-control custom-checkbox d-inline-block mt-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                <label className="custom-control-label" for="customCheck2">Hide product from published site</label>
                              </div>

                            </div>

                          </div>
                          <div className="col-lg-4">
                            <div className="custom-file">
                              <input type="file" className="custom-file-input" id="customFile" placeholder="please imgae here"/>
                              <span className="upload-image">Click here to <span className="text-primary">add product image.</span> </span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
</div>
    </div>
  )
}
