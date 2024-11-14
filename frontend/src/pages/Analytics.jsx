import React from 'react'

export const Analytics = () => {

  return (
    <div>
       
        <div className="content-wrapper">
          <div className="content">          
                {/* <div className="row justify-content-between">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                      <MonthlySaleGraph/>
                        
                      </div>
                      <div className="col-lg-6">
                      <MonthlyJoin/>
                        
                      </div>
                     
                    </div>
                  </div>
                
                </div> */}
               


                
                <div className="row pt-5">
                  <div className="col-xl-4">
                    
                
                        <div className="card card-default">
                          <div className="card-header">
                            <h2>Users</h2>
                          </div>
                          <div className="card-body">
                            <div className="bg-primary d-flex justify-content-between flex-wrap p-5 text-white align-items-lg-end">
                              <div className="d-flex flex-column">
                                <span className="h3 text-white">325,980</span>
                                <span>vs 275,900 (prev)</span>
                              </div>
                              <div>
                                <span>45%</span>
                                <i className="mdi mdi-arrow-up-bold"></i>
                              </div>
                            </div>
                            <div id="line-chart-1"></div>
                          </div>
                        </div>

                  </div>
                  <div className="col-xl-4">
                    

                        <div className="card card-default">
                          <div className="card-header">
                            <h2>Sessions</h2>
                          </div>
                          <div className="card-body">
                            <div className="bg-success d-flex justify-content-between flex-wrap p-5 text-white align-items-lg-end">
                              <div className="d-flex flex-column">
                                <span className="h3 text-white">7,833</span>
                                <span>vs 7,012 (prev)</span>
                              </div>
                              <div>
                                <span>55%</span>
                                <i className="mdi mdi-arrow-up-bold"></i>
                              </div>
                            </div>
                            <div id="line-chart-2"></div>
                          </div>
                        </div>

                  </div>
                  <div className="col-xl-4">
                    
            
                  <div className="card card-default">
                    <div className="card-header">
                      <h2>Bounce Rate</h2>
                    </div>
                    <div className="card-body">
                      <div className="bg-danger d-flex justify-content-between flex-wrap p-5 text-white align-items-lg-end">
                        <div className="d-flex flex-column">
                          <span className="h3 text-white">67.0%</span>
                          <span>vs 65.21% (prev)</span>
                        </div>
                        <div>
                          <span>7%</span>
                          <i className="mdi mdi-arrow-down-bold"></i>
                        </div>
                      </div>
                      <div id="line-chart-3"></div>
                    </div>
                  </div>

                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6">
                    
                
                    <div className="card card-default" id="user-acquisition">
                      <div className="card-header border-bottom pb-0">
                        <h2>User Acquisition</h2>
                        <ul className="nav nav-underline-active-primary" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#traffic-channel" role="tab" aria-selected="true">Traffic
                              Channel</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#source-medium" role="tab" aria-selected="false">Source / Medium </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#referrals" role="tab" aria-selected="false">Referrals</a>
                          </li>
                        </ul>
                      </div>

                      <div className="tab-content" id="myTabContent">
                        <div id="barchartlg1"></div>
                      </div>
                      <div className="card-footer d-flex flex-wrap bg-white">
                        <a href="#" className="text-uppercase py-3">Acquisition Report</a>
                      </div>
                    </div>

                  </div>

                  
                  <div className="col-xl-6">
                    
                      
                      <div className="card card-default">
                        <div className="card-header border-bottom">
                          <h2 className="mdi mdi-desktop-mac">Sessions by Device</h2>
                        </div>
                        <div className="card-body pt-6">
                          <div className="row">
                            <div className="col-lg-6">
                              <div id="donut-chart-1"></div>
                            </div>
                            <div className="col-lg-6">
                              <div className="media mb-4">
                                <i className="display-4 mdi mdi-remote-desktop text-primary mr-3"></i>
                                <div className="media-body">
                                  <p>Desktop</p>
                                  <p className="h4 my-1 text-dark">45% <span className="text-success">23.5% <i
                                        className="mdi mdi-arrow-up-bold small"></i></span>
                                  </p>
                                  <p>vs 155,900 (prev)</p>
                                </div>
                              </div>

                              <div className="media mb-4">
                                <i className="display-4 mdi mdi-tablet-android text-primary mr-3"></i>
                                <div className="media-body">
                                  <p>Tablet</p>
                                  <p className="h4 my-1 text-dark">30% <span className="text-success">13.5% <i
                                        className="mdi mdi-arrow-up-bold small"></i></span>
                                  </p>
                                  <p>vs 187,900 (prev)</p>
                                </div>
                              </div>

                              <div className="media mb-4">
                                <i className="display-4 mdi mdi-cellphone-iphone text-primary mr-3"></i>
                                <div className="media-body">
                                  <p>Mobile</p>
                                  <p className="h4 my-1 text-dark">25% <span className="text-success">35.5% <i
                                        className="mdi mdi-arrow-up-bold small"></i></span>
                                  </p>
                                  <p>vs 309,900 (prev)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-4">
                    
                
                    <div className="card card-default">
                      <div className="card-header">
                        <h2>User Map</h2>
                      </div>
                      <div className="card-body">
                        <div id="us-vector-map-marker"></div>
                        <ul className="list-unstyled mt-4">
                          <li className="d-flex flex-wrap justify-content-between border-top py-2 text-dark">
                            Oregon
                            <span className="text-primary">35</span>
                          </li>
                          <li className="d-flex flex-wrap justify-content-between border-top py-2 text-dark">
                            Indiana
                            <span className="text-success">10</span>
                          </li>
                          <li className="d-flex flex-wrap justify-content-between border-top py-2 text-dark">
                            Colorado
                            <span className="text-danger">25</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div className="col-xl-4">
                    
                    
                    <div className="card card-default" id="page-views">
                      <div className="card-header">
                        <h2>Page Views</h2>
                      </div>
                      <div className="card-body py-0" data-simplebar style={{height: "392px"}}>
                        <table className="table table-borderless table-thead-border">
                          <thead>
                            <tr>
                              <th>Page</th>
                              <th className="text-right px-3">Page Views</th>
                              <th className="text-right">Avg Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-primary"><a className="link" href="analytics.html">/analytics.html</a></td>
                              <td className="text-right px-3">521</td>
                              <td className="text-right">2m:14s</td>
                            </tr>
                            <tr>
                              <td className="text-primary"><a className="link" href="email-inbox.html">/email-inbox.html</a></td>
                              <td className="text-right px-3">356</td>
                              <td className="text-right">2m:23s</td>
                            </tr>
                            <tr>
                              <td className="text-primary"><a className="link" href="email-compose.html">/email-compose.html</a></td>
                              <td className="text-right px-3">254</td>
                              <td className="text-right">2m:2s</td>
                            </tr>
                            <tr>
                              <td className="text-primary"><a className="link" href="charts-chartjs.html">/charts-chartjs.html</a></td>
                              <td className="text-right px-3">126</td>
                              <td className="text-right">1m:15s</td>
                            </tr>
                            <tr>
                              <td className="text-primary"><a className="link" href="profile.html">/profile.html</a></td>
                              <td className="text-right px-3">50</td>
                              <td className="text-right">1m:7s</td>
                            </tr>
                            <tr>
                              <td className="text-primary"><a className="link" href="general-widgets.html">/general-widgets.html</a></td>
                              <td className="text-right px-3">50</td>
                              <td className="text-right">2m:35s</td>
                            </tr>
                            <tr>
                              <td className="text-primary"><a className="link" href="card.html">/card.html</a></td>
                              <td className="text-right px-3">590</td>
                              <td className="text-right">5m:55s</td>
                            </tr>
                            <tr>
                              <td className="text-primary"><a className="link" href="email-inbox.html">/email-inbox.html</a></td>
                              <td className="text-right px-3">29</td>
                              <td className="text-right">8m:5s</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="card-footer bg-white py-4">
                        <a href="#" className="text-uppercase">Audience Overview</a>
                      </div>
                    </div>

                  </div>
                  <div className="col-xl-4">
                    
                    <div className="card card-default">
                      <div className="card-header">
                        <h2>Current Users</h2>
                        <span>Realtime</span>
                      </div>
                      <div className="card-body">
                        <div id="barchartlg2"></div>
                      </div>
                      <div className="card-footer bg-white py-4">
                        <a href="#" className="text-uppercase">Current Users Overview</a>
                      </div>
                    </div>
                  </div>
                </div>
</div>
          
        </div>
    </div>
  )
}
