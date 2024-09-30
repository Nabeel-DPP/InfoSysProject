import React from 'react'
import { Link } from 'react-router-dom'
export const Reset = () => {
  return (
    <div>
         <body className="bg-light-gray" id="body">
          <div className="container form d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
          <div className="d-flex flex-column justify-content-between">
            <div className="row justify-content-center mt-5">
              <div className="col-md-10">
                <div className="card card-default form-container">
                  <div className="card-header">
                    <div className="app-brand w-100 d-flex justify-content-center border-bottom-0">
                      <a className="w-auto pl-0" href="/index.html">
                        <img src="images/logo.png" style={{height:"50px"}} alt="RAAZEE"/>
                        <span className="brand-name form-head text-dark">InfoSys</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-body p-5">
                    <h4 className="text-dark mb-5">Reset Your Password</h4>
                    <form action="/index.html">
                      <div className="row">
                        <div className="form-group col-md-12 mb-4">
                          <input type="email" className="form-control input-lg" id="name" aria-describedby="nameHelp" placeholder="Email"/>
                        </div>

                        <div className="col-md-12">
                          <button type="submit" className="btn btn-blue btn-pill mb-4">Submit</button>

                          <p>Already have an account?



                          <Link to="/login" className="form-blue-text"> Login </Link>
                            
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
  )
}
