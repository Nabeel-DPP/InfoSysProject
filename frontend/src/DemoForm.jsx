import React, { useState } from 'react';
import './DemoForm.css'; // Separate CSS file for custom styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const DemoForm = () => {
  const [formData, setFormData] = useState({
    distributorName: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
    distributorType: '',
    receiveUpdates: false,
    distributorCategory: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Distributor Information:', formData);
  };

  return (
    <div className="distributor-form__container mt-5">
     
      <form onSubmit={handleSubmit}>
      <h1 className="distributor-form__title p-1 w-50">Distributor Information</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="distributor-input-group">
               <i className="input-icon fa fa-user"></i>
              <input
                required
                type="text"
                name="distributorName"
                value={formData.distributorName}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Distributor Name</label>
              <i className="input-icon fa fa-user"></i>
            </div>
          </div>
          <div className="distributor-input-group col-md-6">
              <select
                required
                name="Sale Area"
                value={formData.distributorCategory}
                onChange={handleChange}
                className="distributor-input"
              >
                <option value="" disabled hidden>
                  
                </option>
                <option value="Wholesale">Wholesale</option>
                <option value="Retail">Retail</option>
                <option value="Dropshipping">Dropshipping</option>
              </select>
              <label className="distributor-label">Sale Area</label>
            </div>
   </div>



        

        <div className="row">
         
        <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Email</label>
            </div>
          </div>
         
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Phone</label>
            </div>
          </div>
          
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Address</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Distributor Since</label>
            </div>
          </div>





        </div>
        <h1 className="distributor-form__title p-1 w-50">Area Information</h1>
        {/* Radio Button Group */}

        <div className="row">
<div className="col-md-6">
<span className='label-head'> Distributor Type :</span>
<div class="custom-radio-group">

  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option1" />
    <span class="custom-radio-checkmark"></span>
    Option 1
  </label>
  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option2" />
    <span class="custom-radio-checkmark"></span>
    Option 2
  </label>
  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option3" />
    <span class="custom-radio-checkmark"></span>
    Option 3
  </label>
</div>
  
</div>        

<div className="col-md-6">
<span className='label-head'> Zone :</span>
<div class="custom-radio-group">

  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option1" />
    <span class="custom-radio-checkmark"></span>
    Option 1
  </label>
  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option2" />
    <span class="custom-radio-checkmark"></span>
    Option 2
  </label>
  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option3" />
    <span class="custom-radio-checkmark"></span>
    Option 3
  </label>
</div>
  
</div> 

        </div>
        <div className="row">
<div className="col-md-6">
<span className='label-head'> Province :</span>
<div class="custom-radio-group">

  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option1" />
    <span class="custom-radio-checkmark"></span>
    Option 1
  </label>
  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option2" />
    <span class="custom-radio-checkmark"></span>
    Option 2
  </label>
  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option3" />
    <span class="custom-radio-checkmark"></span>
    Option 3
  </label>
</div>
  
</div>        

<div className="col-md-6">
<span className='label-head'> Status :</span>
<div class="custom-radio-group">

  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option1" />
    <span class="custom-radio-checkmark"></span>
    Option 1
  </label>
  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option2" />
    <span class="custom-radio-checkmark"></span>
    Option 2
  </label>
  <label class="custom-radio-container">
    <input type="radio" name="custom-radio" value="option3" />
    <span class="custom-radio-checkmark"></span>
    Option 3
  </label>
</div>
  
</div> 

        </div>

        {/* Checkbox for Updates */}
        <div className="row">
          <div className="col-md-12">
            <div className="distributor-checkbox-group">
              <label className="distributor-checkbox-label">
                <input
                  type="checkbox"
                  name="receiveUpdates"
                  checked={formData.receiveUpdates}
                  onChange={handleChange}
                />
                Receive Email Updates
              </label>
            </div>
          </div>
        </div>



        <div className="row">
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="distributorName"
                value={formData.distributorName}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">NTC</label>
            </div>
          </div>


          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="distributorName"
                value={formData.distributorName}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">CNIC</label>
            </div>
          </div>
         
   </div>
   <div className="row">
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="distributorName"
                value={formData.distributorName}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">GL Customer ID</label>
            </div>
          </div>


          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="distributorName"
                value={formData.distributorName}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">SSR Status</label>
            </div>
          </div>
         
   </div>


        {/* Select Dropdown for Distributor Category */}
        <div className="row">
          <div className="col-md-6">
            <div className="distributor-input-group">
              <select
                required
                name="distributorCategory"
                value={formData.distributorCategory}
                onChange={handleChange}
                className="distributor-input"
              >
                <option value="" disabled hidden>
                  
                </option>
                <option value="Wholesale">Wholesale</option>
                <option value="Retail">Retail</option>
                <option value="Dropshipping">Dropshipping</option>
              </select>
              <label className="distributor-label">STRN</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="distributorName"
                value={formData.distributorName}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Lock Days</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="row">
          <div className="col-md-3">
            <button type="submit" className="distributor-submit-btn">
              Submit
            </button>
          </div>
          <div className="col-md-3">
            <button type="submit" className="distributor-reset-btn">
              Reset
            </button>
          </div>
        </div>

        
        
      </form>
    </div>
  );
};

export default DemoForm;
