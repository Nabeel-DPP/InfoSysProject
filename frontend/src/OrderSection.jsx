import React from 'react';
import "./OrderSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const OrderSection = () => {
  return (
    <section className="order-section mt-5 text-center d-flex flex-column align-items-center justify-content-center text-center ">
      <div className="container order-content">
        <h2 className="md-heading mb-3">Order Section</h2>
        <p className='sm-heading mb-2'>Place New Order and Receive Stocks</p>
        <div className="row">
          <div className="col-md-6 mb-3">
            <button className="btn btn-outline-primary w-100">Write Query</button>
          </div>
          <div className="col-md-6 mb-3">
            <button className="btn btn-outline-secondary w-100">Execute Query</button>
          </div>
          <div className="col-md-6 mb-3">
            <button className="btn btn-outline-danger w-100">Operations</button>
          </div>
          <div className="col-md-6 mb-3">
            <button className="btn btn-outline-warning w-100">Stock Receiving</button>
          </div>
          
          <div className="col-md-12">
            <button className="btn btn-outline-success w-100">Order Page</button>
          </div>
        </div>
        
         
       





      </div>
    </section>
  );
}
