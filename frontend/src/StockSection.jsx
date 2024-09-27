import React from 'react';
import "./StockSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const StockSection = () => {
  return (
    <section className="stock-section mt-5 text-center d-flex flex-column align-items-center justify-content-center text-center ">
      <div className="container stock-content">
        <h2 className="md-heading mb-3">Stock and Salary Section </h2>
        <p className='stock-sub-heading mb-2 w-100'>Stock is valued at the Market Price which is Selling Price at which the finished Goods are Sold to the Customers</p>
        <p className='stock-sub-heading mb-2 w-100'>Inventory refers to the finished Products that are ready to Distribute</p>
        <div className="row">
          <div className="col-md-4 mb-3">
            <button className="btn btn-outline-primary w-100">Salary</button>
          </div>
          <div className="col-md-4 mb-3">
            <button className="btn btn-outline-secondary w-100">SSR Summary</button>
          </div>
          <div className="col-md-4 mb-3">
            <button className="btn btn-outline-danger w-100">Distributor's SSR Summary</button>
          </div>
          <div className="col-md-4 mb-3">
            <button className="btn btn-outline-warning w-100">Dispatch Transit Received</button>
          </div>
          <div className="col-md-4 mb-3">
            <button className="btn btn-outline-primary w-100">MIOS Sales vs Targets</button>
          </div>
          <div className="col-md-4 mb-3">
            <button className="btn btn-outline-secondary w-100">MIOS Sales vs SSR Sales</button>
          </div>
          <div className="col-md-4 mb-3">
            <button className="btn btn-outline-danger w-100">Purchase Pending Dispatch</button>
          </div>
          <div className="col-md-4 mb-3">
            <button className="btn btn-outline-secondary w-100">Ex-Distributor's Sale</button>
          </div>
          <div className="col-md-4 mb-3">
            <button className="btn btn-outline-warning w-100">Distributo's SSR Details</button>
          </div>
          {/* <div className="col-md-4 mb-3">
            <button className="btn btn-info w-100">Order 6</button>
          </div> */}
          <div className="col-md-12">
            <button className="btn btn-outline-success w-100">Cash Files</button>
          </div>
        </div>
      </div>
    </section>
  );
}
