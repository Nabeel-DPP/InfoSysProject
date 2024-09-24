
import React from 'react'
import { useEffect , useState } from 'react';
import { RenderCharts } from '../js/chart';

// import "../js/chart.js";
import ApexCharts from 'apexcharts'
export const Home = () => {
  useEffect(() => {
//     // Chart 1
//     const splinaArea1 = document.querySelector("#spline-area-1");
//     if (splinaArea1) {
//       const splinaAreaOptions1 = {
//         chart: {
//           id: "spline-area-1",
//           group: "social",
//           height: 135,
//           width: "100%",
//           background: "#fd5190",
//           type: "area",
//           sparkline: { enabled: true },
//         },
//         yaxis: { labels: { minWidth: 40 } },
//         stroke: { width: 2 },
//         colors: ["rgba(255, 255, 255, .6)"],
//         fill: {
//           type: "gradient",
//           gradient: {
//             shade: "light",
//             shadeIntensity: 1,
//             opacityFrom: 0.3,
//             opacityTo: 0.3,
//             stops: [0, 50, 100],
//           },
//         },
//         tooltip: {
//           theme: "dark",
//           marker: { show: false },
//           x: { show: false },
//           y: { title: { formatter: () => "" } },
//         },
//         series: [{ data: [0, 15, 18, 20, 16, 17, 23, 17, 25] }],
//       };
//       const renderSplinaArea1 = new ApexCharts(splinaArea1, splinaAreaOptions1);
//       renderSplinaArea1.render();
//     }

//     // Chart 2
//     const splinaArea2 = document.querySelector("#spline-area-2");
//     if (splinaArea2) {
//       const splinaAreaOptions2 = {
//         chart: {
//           id: "spline-area-2",
//           group: "social",
//           height: 135,
//           width: "100%",
//           background: "#46c79e",
//           type: "area",
//           sparkline: { enabled: true },
//         },
//         yaxis: { labels: { minWidth: 40 } },
//         stroke: { width: 2 },
//         colors: ["#ffffff"],
//         fill: {
//           type: "gradient",
//           gradient: {
//             shadeIntensity: 1,
//             opacityFrom: 0.7,
//             opacityTo: 0.3,
//             stops: [0, 90, 100],
//           },
//         },
//         tooltip: {
//           followCursor: false,
//           theme: "dark",
//           x: { show: false },
//           marker: { show: false },
//           y: { title: { formatter: () => "" } },
//         },
//         series: [{ data: [0, 4, 6, 14, 8, 10, 17, 20, 16] }],
//       };
//       const renderSplinaArea2 = new ApexCharts(splinaArea2, splinaAreaOptions2);
//       renderSplinaArea2.render();
//     }

//  // Chart 3
//  const splinaArea3 = document.querySelector("#spline-area-3");
//  if (splinaArea3 !== null) {
//    const splinaAreaOptions3 = {
//      chart: {
//        id: "spline-area-3",
//        group: "social",
//        height: 135,
//        width: "100%",
//        background: "#9e6de0",
//        type: "area",
//        sparkline: {
//          enabled: true,
//        },
//      },
//      yaxis: {
//        labels: {
//          minWidth: 40,
//        },
//      },
//      stroke: {
//        width: 2,
//      },
//      colors: ["#ffffff"],
//      fill: {
//        type: "gradient",
//        gradient: {
//          shadeIntensity: 1,
//          opacityFrom: 0.7,
//          opacityTo: 0.3,
//          stops: [0, 90, 100],
//        },
//      },
//      tooltip: {
//        followCursor: false,
//        theme: "dark",
//        x: {
//          show: false,
//        },
//        marker: {
//          show: false,
//        },
//        y: {
//          title: {
//            formatter: function () {
//              return "";
//            },
//          },
//        },
//      },
//      series: [
//        {
//          data: [0, 8, 20, 14, 17, 12, 14, 8, 5],
//        },
//      ],
//    };
//    const randerSplinaArea3 = new ApexCharts(splinaArea3, splinaAreaOptions3);
//    randerSplinaArea3.render();
//  }

//  // Chart 4
//  const splinaArea4 = document.querySelector("#spline-area-4");
//  if (splinaArea4 !== null) {
//    const splinaAreaOptions4 = {
//      chart: {
//        id: "spline-area-4",  // Fixed the id here
//        group: "social",
//        height: 135,
//        width: "100%",
//        background: "#6696fe",
//        type: "area",
//        sparkline: {
//          enabled: true,
//        },
//      },
//      yaxis: {
//        labels: {
//          minWidth: 40,
//        },
//      },
//      stroke: {
//        width: 2,
//      },
//      colors: ["#ffffff"],
//      fill: {
//        type: "gradient",
//        gradient: {
//          shadeIntensity: 1,
//          opacityFrom: 0.7,
//          opacityTo: 0.3,
//          stops: [0, 90, 100],
//        },
//      },
//      tooltip: {
//        followCursor: false,
//        theme: "dark",
//        x: {
//          show: false,
//        },
//        marker: {
//          show: false,
//        },
//        y: {
//          title: {
//            formatter: function () {
//              return "";
//            },
//          },
//        },
//      },
//      series: [
//        {
//          data: [0, 3, 8, 15, 20, 10, 12, 10, 5],
//        },
//      ],
//    };
//    const randerSplinaArea4 = new ApexCharts(splinaArea4, splinaAreaOptions4);
//    randerSplinaArea4.render();
//  }


   RenderCharts();
// Call the RenderCharts function to initialize charts
// const renderCharts = RenderCharts();

// // Cleanup function to avoid memory leaks
// return () => {
//   renderCharts.forEach(renderChart => {
//     if (renderChart) renderChart.destroy(); // Clean up each chart
//   });
// };



    // Clean up to avoid memory leaks
    // return () => {
    //   if (renderSplinaArea1) renderSplinaArea1.destroy();
    //   if (renderSplinaArea2) renderSplinaArea2.destroy();
    //   // Add destroy calls for other charts if needed
    // };
  }, []); // Empty dependency array ensures this runs once on mount



























  return (
    <div  className='content-wrapper' >
      <div className="content">                
                
                  <div className="row">
                    <div className="col-xl-3 col-sm-6">
                      <div className="card card-default card-mini">
                        <div className="card-header">
                          <h2>$18,699</h2>
                          <div className="dropdown">
                            <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </a>

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                          </div>
                          <div className="sub-title">
                            <span className="mr-1">Sales of this year</span> |
                            <span className="mx-1">45%</span>
                            <i className="mdi mdi-arrow-up-bold text-success"></i>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart-wrapper">
                            <div>
                              <div id="spline-area-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                      <div className="card card-default card-mini">
                        <div className="card-header">
                          <h2>$14,500</h2>
                          <div className="dropdown">
                            <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </a>

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                          </div>
                          <div className="sub-title">
                            <span className="mr-1">Expense of this year</span> |
                            <span className="mx-1">50%</span>
                            <i className="mdi mdi-arrow-down-bold text-danger"></i>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart-wrapper">
                            <div>
                              <div id="spline-area-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                      <div className="card card-default card-mini">
                        <div className="card-header">
                          <h2>$4199</h2>
                          <div className="dropdown">
                            <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </a>

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                          </div>
                          <div className="sub-title">
                            <span className="mr-1">Profit of this year</span> |
                            <span className="mx-1">20%</span>
                            <i className="mdi mdi-arrow-down-bold text-danger"></i>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart-wrapper">
                            <div>
                              <div id="spline-area-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                      <div className="card card-default card-mini">
                        <div className="card-header">
                          <h2>$20,199</h2>
                          <div className="dropdown">
                            <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </a>

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                          </div>
                          <div className="sub-title">
                            <span className="mr-1">Revenue of this year</span> |
                            <span className="mx-1">35%</span>
                            <i className="mdi mdi-arrow-up-bold text-success"></i>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart-wrapper">
                            <div>
                              <div id="spline-area-4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                <div className="row">
                  <div className="col-xl-8">
                    
                    
                    <div className="card card-default">
                      <div className="card-header">
                        <h2>Income And Expenses</h2>
                        <div className="dropdown">
                          <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false" data-display="static">
                          </a>

                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>

                      </div>
                      <div className="card-body">
                        <div className="chart-wrapper">
                          <div id="mixed-chart-1"></div>
                        </div>
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


                <div className="row">
                  <div className="col-xl-4">
                    
                    <div className="card card-default">
                      <div className="card-header">
                        <h2>Top Customers</h2>
                      </div>
                      <div className="card-body">
                        <table className="table table-borderless table-thead-border">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th className="text-right">Income</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-dark font-weight-bold">Gunter Reich</td>
                              <td className="text-right">$2,560</td>
                            </tr>
                            <tr>
                              <td className="text-dark font-weight-bold">Anke Kirsch</td>
                              <td className="text-right">$1,720</td>
                            </tr>
                            <tr>
                              <td className="text-dark font-weight-bold">Karolina Beer</td>
                              <td className="text-right">$1,230</td>
                            </tr>
                            <tr>
                              <td className="text-dark font-weight-bold">Lucia Christ</td>
                              <td className="text-right">$875</td>
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
                      <div className="card-body py-0" >
                        <div className="row pb-4">
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
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              <div className="row">
                <div className="col-xl-8">
                  
                    
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

                </div>
                <div className="col-xl-4">
                  
                    
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

                </div>
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
