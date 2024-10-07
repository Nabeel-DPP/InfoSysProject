import React, { useState } from 'react';
import './DemoForm.css'; // Separate CSS file for custom styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const DemoForm = () => {
  const [formData, setFormData] = useState({
    distName: '',
    saleArea: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
     distSince: '' ,
     ssr:'',
     glId:'',
     cnic:'',
     ntc:'',
     strn:'',
     lockDays:'',
    distType: ''
  });










  const [validated, setValidated] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Distributor Information:', formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Check if form is valid
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      console.log('Distributor Information:', formData);
    }
  };











  return (
    <div className="distributor-form__container mt-5">
     
      <form onSubmit={handleSubmit} noValidate className={`needs-validation ${validated ? 'was-validated' : ''}`} >
      <h1 className="distributor-form__title p-1 w-50 mb-5 ">Distributor Information</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="distributor-input-group">
               <i className="input-icon fa fa-user"></i>
              <input
                required
                type="text"
                name="distName"
                value={formData.distName}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter a valid distributor name.</div>
              <label className="distributor-label">Distributor Name</label>
              <i className="input-icon fa fa-user"></i>
            </div>
          </div>
          <div className="distributor-input-group col-md-6">
          <i class="input-icon fa-solid fa-street-view mr-5"></i>
              <select
                required
                name="saleArea"
                value={formData.saleArea}
                onChange={handleChange}
                className="distributor-input"
              >
                <option value="" disabled hidden> 
                  
                  
                 </option>
                <option value="Wholesale">Wholesale</option>
                <option value="Retail">Retail</option>
                <option value="Dropshipping">Dropshipping</option>

              </select>
              
              
             <label className="distributor-label ml-2" >Sale Area</label>
              <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please select a sale area.</div>
              
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
              <i class="input-icon fa-solid fa-envelope"></i>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter a valid email address.</div>
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
              <i class="input-icon fa-solid fa-phone-flip"></i>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter a valid 11-digit phone number.</div>
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
              <i class="input-icon  fa-solid fa-location-crosshairs"></i>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter a valid address.</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="distSince"
                value={formData.distSince}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Distributor Since</label>
              <i class="input-icon fa-solid fa-calendar-days"></i>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter the year since the distributor started.</div>
            </div>
          </div>





        </div>
        <h1 className="distributor-form__title p-1 w-50">Area Information</h1>
        {/* Radio Button Group */}

        <div className="row">
<div className="col-md-6">
<span className='label-head' name="distType"> Distributor Type :</span>
<div class="custom-radio-group row ">

  <label class="custom-radio-container col-md-5">
    <input type="radio" name="dist-type-radio" value="option1" id='instArea' />
    <span class="custom-radio-checkmark"></span>
   Institutional Area
  </label>
  <label class="custom-radio-container col-md-5">
    <input type="radio" name="dist-type-radio" value="option2" id='regArea' />
    <span class="custom-radio-checkmark"></span>
    Regional Area
  </label>
  <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Must Select any Type </div>
 
</div>
  
</div>        





<div className="col-md-6">
<span className='label-head'> Zone :</span>
<div class="custom-radio-group row">

  <label class="custom-radio-container col-md-3">
    <input type="radio" name="zone-radio" value="option1" id='zone1' />
    <span class="custom-radio-checkmark"></span>
    Zone 1
  </label>
  <label class="custom-radio-container col-md-3">
    <input type="radio" name="zone-radio" value="option2" id='zone2' />
    <span class="custom-radio-checkmark"></span>
    Zone 2
  </label>
  <label class="custom-radio-container col-md-3">
    <input type="radio" name="zone-radio" value="option3" id='zone3' />
    <span class="custom-radio-checkmark"></span>
    Zone 3
  </label>
</div>
  
</div> 

        </div>
        <div className="row">
<div className="col-md-6">
<span className='label-head'> Province :</span>
<div class="custom-radio-group row">

  <label class="custom-radio-container col-md-3">
    <input type="radio" name="province-radio" value="pn" />
    <span class="custom-radio-checkmark"></span>
    Punjab
  </label>
  <label class="custom-radio-container col-md-3">
    <input type="radio" name="province-radio" value="sn" />
    <span class="custom-radio-checkmark"></span>
   Sindh
  </label>
  <label class="custom-radio-container col-md-3">
    <input type="radio" name="province-radio" value="kpk" />
    <span class="custom-radio-checkmark"></span>
    KPK
  </label>
  
 
</div>
  
</div>        

<div className="col-md-6">
<span className='label-head'> Status :</span>
<div class="custom-radio-group row">

  <label class="custom-radio-container col-md-3">
    <input type="radio" name="status-radio" value="open" />
    <span class="custom-radio-checkmark"></span>
    Open
  </label>
  <label class="custom-radio-container col-md-3">
    <input type="radio" name="status-radio" value="close" />
    <span class="custom-radio-checkmark"></span>
    Close
  </label>
  <label class="custom-radio-container col-md-3">
    <input type="radio" name="status-radio" value="pending" />
    <span class="custom-radio-checkmark"></span>
    Pending
  </label>
</div>
  
</div> 

        </div>

      
    


        <div className="row mt-5">
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="ntc"
                value={formData.ntc}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">NTC</label>
              <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter a valid NTC Value.</div>
              <i class="input-icon fa-brands fa-cc-diners-club"></i>
            </div>
          </div>


          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="cnic"
                value={formData.cnic}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter a valid CNIC Number.</div>
              <label className="distributor-label">CNIC</label>
              <i class="input-icon fa-solid fa-address-card"></i>
            </div>
          </div>
         
   </div>
   <div className="row">
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="glId"
                value={formData.glId}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">GL Customer ID</label>
              <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter a valid GL Customer ID</div>
              <i class="input-icon fa-regular fa-address-card"></i>
            </div>
          </div>


          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="ssr"
                value={formData.ssr}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">SSR Status</label>
              <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter a valid Status of SSR</div>
              <i class="input-icon fa-solid fa-file-shield"></i>
            </div>
          </div>
         
   </div>


        {/* Select Dropdown for Distributor Category */}
        <div className="row">
          <div className="col-md-6">
            <div className="distributor-input-group">
              <select
                required
                name="strn"
                value={formData.strn}
                onChange={handleChange}
                className="distributor-input"
              >
                <option value="" disabled hidden>
                  
                </option>
                
                <option value="Wholesale">Registered</option>
                <option value="Retail">Unregistered</option>
                
              </select>
              <label className="distributor-label">STRN</label>
              <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter a valid STRN Status</div>
              <i class="input-icon mr-2 fa-regular fa-file-lines"></i>
            </div>
          </div>
          <div className="col-md-6">
            <div className="distributor-input-group">
              <input
                required
                type="text"
                name="lockDays"
                value={formData.lockDays}
                onChange={handleChange}
                className="distributor-input"
                autoComplete="off"
              />
              <label className="distributor-label">Lock Days</label>
              <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter a valid number of Days</div>
              <i class="input-icon fa-solid fa-lock"></i>
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
            <button type="reset" className="distributor-reset-btn">
              Reset
            </button>
          </div>
        </div>

        
        
      </form>
    </div>
  );
};

export default DemoForm;
