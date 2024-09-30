import React from 'react'
import { Link } from 'react-router-dom';
export const Login = () => {
  return (
    <div>
        <body className="bg-light-gray" id="body">
          <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}} >
          <div className="d-flex flex-column justify-content-between">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="card card-default mb-0 form-container">
                  <div className="card-header pb-0">
                    <div className="app-brand w-100 d-flex justify-content-center border-bottom-0">
                      <a className="w-auto pl-0" href="/index.html">
                        <img src="images/logo.png" style={{height:"50px"}} alt="RAAZEE"/>
                        <span className="brand-name form-head text-dark">InfoSys</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-body px-5 pb-5 pt-0">

                    <h4 className="text-dark mb-6 text-center">Login</h4>

                    <form action="/index.html">
                      <div className="row">
                        <div className="form-group col-md-12 mb-4">
                          <input type="email" className="form-control input-lg" id="email" aria-describedby="emailHelp"
                            placeholder="email"/>
                        </div>
                        <div className="form-group col-md-12 ">
                          <input type="password" className="form-control input-lg" id="password" placeholder="Password"/>
                        </div>
                        <div className="col-md-12">

                          <div className="d-flex justify-content-between mb-3">

                            <div className="custom-control custom-checkbox mr-3 mb-3">
                              <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                              <label className="custom-control-label" for="customCheck2">Remember me</label>
                            </div>

                            
                           <Link to="/reset" className="form-blue-text" >Forgot password? </Link>
                          </div>

                          <button type="submit" className="btn btn-blue btn-pill mb-4">Sign In</button>

                          <p>Don't have an account yet ?
                            
                           <Link to="/signup" className="form-blue-text" >Sign Up</Link>  
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

</body>
    </div>
  );
}
