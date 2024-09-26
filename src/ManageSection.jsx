import React from 'react';
import "./ManageSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ManageSection = () => {
  return (
    <section className="manage-section mt-5 text-center d-flex flex-column align-items-center justify-content-center text-center ">
      <div className="container manage-content">
        <h2 className="md-heading mb-3">Management Section </h2>
        <p className='stock-sub-heading mb-2 w-100'>The Process of Dealing with and Controlling all the Functions, Process and Users</p>
        <div className="row">
          <div className="col-md-3 mb-3">

            <button className="btn btn-outline-primary w-100">Analyzer</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-secondary w-100">Area of Sale</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-danger w-100">Area of Dispatch</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-warning w-100">Distributors</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-primary w-100">Disable Login</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-secondary w-100">Goods Transporter</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-danger w-100">Institutions</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-secondary w-100">MIO & Targets</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-warning w-100">News</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-danger w-100">Payment Slips</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-secondary w-100">Products (All)</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-outline-warning w-100">Products (Bonus) </button>
          </div>
          {/* <div className="col-md-4 mb-3">
            <button className="btn btn-info w-100">Order 6</button>
          </div> */}
          <div className="col-md-4">
            <button className="btn btn-outline-success w-100">Orders Period</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-success w-100">SSR Month</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-success w-100">Banks</button>
          </div>
          </div>
        </div>
    </section>
  );
}
