import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableForm.css";
export function CreateForm() {
  const navigate = useNavigate();
 

  const [formData, setFormData] = useState({
    id: "",
    distName: "",
    saleArea: "",
    email: "",
    distSince: "",
    status: "",
    ssr: "",
    adTax: "",
    phone1:"",
    phone2:"",
    lock:"",
    address:"",
    distType:"",
    zone: "",
    province:"",
    strn:"",
    ntc:"",
    cnic:"",
    glCustomer:""
  });

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    navigate("/dist", { state: { formData } });
    
    // navigate("/dist"); // Navigate back to the table after submission
  };

  return (
    <div className="border mt-5 p-3 form-container">
      <h3 className="text-center col-md-12 border form-head-text p-2">Add Distributor's Details</h3>
      <form className="form mt-5"  onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-2 mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              
            />
          </div>
          <div className="col-md-5 mb-3">
            <label htmlFor="distName" className="form-label">Distributor Name</label>
            <input
              type="text"
              className="form-control"
              id="distName"
              name="distName"
              value={formData.distName}
              onChange={handleInputChange}
            />
          </div>
           {/* <div className="col-md-5 mb-3">
            <label htmlFor="saleArea" className="form-label">Sale Area</label>
            <input
              type="text"
              className="form-control"
              id="saleArea"
              name="saleArea"
              value={formData.saleArea}
              onChange={handleInputChange}
            />
          </div> */}



{/* <div class="col-md-5">
<label htmlFor="saleArea" className="form-label">Sale Area</label>
  <div class="select-container">
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div>
         */}





<div className="col-md-5 mb-3">
            <label htmlFor="saleArea" className="form-label">Sale Area</label>
            <select
              className="form-control"
              id="saleArea"
              name="saleArea"
              value={formData.saleArea}
              onChange={handleInputChange}
            >
              <option value={formData.saleArea}>{formData.saleArea}</option>
              <option value="Area1">Area 1</option>
              <option value="Area2">Area 2</option>
              <option value="Area3">Area 3</option>
              <option value="Area4">Area 4</option>
              <option value="Area5">Area 5</option>
              <option value="Area6">Area 6</option>
            </select>
          </div>




        </div>

        <div className="row">
        <div className="col-md-2 mb-3">
            <label htmlFor="lock" className="form-label">Lock Days</label>
            <input
              type="number"
              className="form-control"
              id="lock"
              name="lock"
              value={formData.lock}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5 mb-3">
            <label htmlFor="email" className="form-label">Email ID</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5 mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          {/* <div className="col-md-6 mb-3">
            <label htmlFor="distSince" className="form-label">Distributor Since</label>
            <input
              type="text"
              className="form-control"
              id="distSince"
              name="distSince"
              value={formData.distSince}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="col-md-2 mb-3">
            <label htmlFor="adTax" className="form-label">Ad Tax</label>
            <input
              type="text"
              className="form-control"
              id="adTax"
              name="adTax"
              value={formData.adTax}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5 mb-3">
            <label htmlFor="phone1" className="form-label">Phone No 1</label>
            <input
              type="number"
              className="form-control"
              id="phone1"
              name="phone1"
              value={formData.phone1}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5 mb-3">
            <label htmlFor="phone2" className="form-label">Phone No 2</label>
            <input
              type="number"
              className="form-control"
              id="phone2"
              name="phone2"
              value={formData.phone2}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          {/* <div className="col-md-3 mb-3">
            <label htmlFor="ssr" className="form-label">Distributor Type</label>
            <input
              type="text"
              className="form-control"
              id="ssr"
              name="ssr"
              value={formData.ssr}
              onChange={handleInputChange}
            />
          </div> */}

{/* <div class="col-md-3">
<label htmlFor="distName" className="form-label">Distributor Type</label>
  <div class="select-container">
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div> */}
<div className="col-md-3 mb-3">
            <label htmlFor="distType" className="form-label">Distributor Type</label>
            <select
              className="form-control"
              id="distType"
              name="distType"
              value={formData.distType}
              onChange={handleInputChange}
            >
              <option value="">Select Type</option>
              <option value="Type1">Type 1</option>
              <option value="Type2">Type 2</option>
            </select>
          </div>

          {/* <div className="col-md-3 mb-3">
            <label htmlFor="ssr" className="form-label">Zone</label>
            <input
              type="text"
              className="form-control"
              id="ssr"
              name="ssr"
              value={formData.ssr}
              onChange={handleInputChange}
            />
          </div> */}

{/* <div class="col-md-3">
<label htmlFor="zone" className="form-label">Zone</label>
  <div class="select-container">
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div> */}


<div className="col-md-3 mb-3">
            <label htmlFor="zone" className="form-label">Zone</label>
            <select
              className="form-control"
              id="zone"
              name="zone"
              value={formData.zone}
              onChange={handleInputChange}
            >
              <option value="">Select Zone</option>
              <option value="Zone1">Zone 1</option>
              <option value="Zone2">Zone 2</option>
            </select>
          </div>


          {/* <div className="col-md-2 mb-3">
            <label htmlFor="ssr" className="form-label">Province</label>
            <input
              type="text"
              className="form-control"
              id="ssr"
              name="ssr"
              value={formData.ssr}
              onChange={handleInputChange}
            />
          </div> */}

{/* <div class="col-md-2">
<label htmlFor="province" className="form-label">Province</label>
  <div class="select-container">
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div> */}
<div className="col-md-2 mb-3">
            <label htmlFor="province" className="form-label">Province</label>
            <select
              className="form-control"
              id="province"
              name="province"
              value={formData.province}
              onChange={handleInputChange}
            >
              <option value="">Select Province</option>
              <option value="Province1">Province 1</option>
              <option value="Province2">Province 2</option>
            </select>
          </div>




          {/* <div className="col-md-2 mb-3">
            <label htmlFor="ssr" className="form-label">Status</label>
            <input
              type="text"
              className="form-control"
              id="ssr"
              name="ssr"
              value={formData.ssr}
              onChange={handleInputChange}
            />
          </div> */}


{/* <div class="col-md-2">
<label htmlFor="status" className="form-label">Status</label>
  <div class="select-container">
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div> */}



<div className="col-md-2 mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              className="form-control"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>


          {/* <div className="col-md-2 mb-3">
            <label htmlFor="ssr" className="form-label">SSR Status</label>
            <input
              type="text"
              className="form-control"
              id="ssr"
              name="ssr"
              value={formData.ssr}
              onChange={handleInputChange}
            />
          </div> */}

{/* <div class="col-md-2">
<label  htmlFor="ssr" className="form-label">SSR Status</label>
  <div class="select-container">
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div> */}


<div className="col-md-2 mb-3">
            <label htmlFor="ssrStatus" className="form-label">SSR Status</label>
            <select
              className="form-control"
              id="ssrStatus"
              name="ssrStatus"
              value={formData.ssr}
              onChange={handleInputChange}
            >
              <option value={formData.ssr}>{formData.ssr}</option>
              <option value="SSR1">SSR 1</option>
              <option value="SSR2">SSR 2</option>
            </select>
          </div>









          
        </div>


        <div className="row">
          {/* <div className="col-md-3 mb-3">
            <label htmlFor="ssr" className="form-label">Distributor Type</label>
            <input
              type="text"
              className="form-control"
              id="ssr"
              name="ssr"
              value={formData.ssr}
              onChange={handleInputChange}
            />
          </div> */}


{/* <div class="col-md-3">
<label htmlFor="strn" className="form-label">STRN</label>
  <div class="select-container">
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div> */}

<div className="col-md-2 mb-3">
            <label htmlFor="strn" className="form-label">STRN</label>
            <select
              className="form-control"
              id="strn"
              name="strn"
              value={formData.strn}
              onChange={handleInputChange}
            >
              <option value="">SSR Status</option>
              <option value="SSR1">SSR 1</option>
              <option value="SSR2">SSR 2</option>
            </select>
          </div>

          <div className="col-md-2 mb-3">
            <label htmlFor="distSince" className="form-label">Distributor Since</label>
            <input
              type="date"
              className="form-control"
              id="distSince"
              name="distSince"
              value={formData.distSince}
              onChange={handleInputChange}
            />
          </div>


         
   <div className="col-md-2 mb-3">
            <label htmlFor="ntc" className="form-label">NTC</label>
            <input
              type="text"
              className="form-control"
              id="ntc"
              name="ntc"
              value={formData.ntc}
              onChange={handleInputChange}
            />
          </div>


          <div className="col-md-3 mb-3">
            <label htmlFor="cnic" className="form-label">CNIC</label>
            <input
              type="number"
              className="form-control"
              id="cnic"
              name="cnic"
              value={formData.cnic}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="glCustomer" className="form-label">GL Customer ID</label>
            <input
              type="number"
              className="form-control"
              id="glCustomer"
              name="glCustomer"
              value={formData.glCustomer}
              onChange={handleInputChange}
            />
          </div>
          
        </div>



        <div className="row  mt-5 justify-content-center mb-5">
          <div className="col-md-12">
            <button type="submit" className="col-md-2 mr-4 btn btn-outline-success">Submit</button>
            <button 
              type="button" 
              className="btn col-md-2 reset-btn" 
              onClick={() => navigate("/dist")}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
     
     
    </div>
  );
}

