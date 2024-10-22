import React, { useState, useEffect } from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
const AreaEditForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { rowData } = location.state || {}; // Get the passed row data

  // State to manage form data
  const [formData, setFormData] = useState({
    AreaId: '',
    AreaName: '',
    Manager: '',
    E_Mail: '',
    ZoneId: '',
    status: '',
    lead_days: '',
    Manager_nick: '',
    area_manager: '',
    area_manager_email: '',
    area_manager_phone: '',
    manager_phone: '',
    FixPay: ''
  });

  // Populate form data from row data
  useEffect(() => {
    console.log("This is the Data coming from Area Table : ", rowData);
    if (rowData) {
      setFormData({
        AreaId: rowData.AreaId,
        AreaName: rowData.AreaName,
        Manager: rowData.Manager,
        E_Mail: rowData.E_Mail,
        ZoneId: rowData.ZoneId,
        status: rowData.status,
        lead_days: rowData.lead_days,
        Manager_nick: rowData.Manager_nick,
        area_manager: rowData.area_manager,
        area_manager_email: rowData.area_manager_email,
        area_manager_phone: rowData.area_manager_phone,
        manager_phone: rowData.manager_phone,
        FixPay: rowData.FixPay
      });

      
    }
  }, [rowData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const [theme, setTheme] = useState('white'); // Initial form theme

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update the form theme
  };





  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the form field based on the name attribute
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5555/area/${rowData._id}`, formData);
      navigate("/areaTable"); // Navigate back to AreaTable after successful update
    } catch (error) {
      console.error("Error updating area data: ", error);
    }
  };

  return (
    <div className="areaEdit">

     <ThemeToggle onThemeChange={handleThemeChange} />
    <div className={` distributor-form__container ${theme} mt-5`}>
     
    <form onSubmit={handleSubmit} >
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Area Information</h1>
      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
             <i className="input-icon fa fa-user"></i>
            <input
              required
              type="number"
              name="AreaId"
              value={formData.AreaId}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
          <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback">  <i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid distributor name </div>
            <label className="distributor-label">Area ID</label>
            <i className="input-icon fa fa-user"></i>
          </div>
        </div>
        <div className="distributor-input-group col-md-12 col-lg-6 col-sm-12">
        <i class="input-icon fa-solid fa-street-view mr-5"></i>
            <select
              required
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="distributor-input"
            >
              <option value="" disabled hidden> 
                
                
               </option>
              <option value="0">0</option>
              <option value="1">1</option>
              {/* <option value="Dropshipping">Dropshipping</option> */}

            </select>
            
            
           <label className="distributor-label ml-2" >Status</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please select a sale area.</div>
            
          </div>
 </div>



      

      <div className="row">
       
      <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="AreaName"
              value={formData.AreaName}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            
            <label className="distributor-label">Area Name</label>
            <i class="input-icon fa-solid fa-envelope"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid email address</div>
          </div>
        </div>
       
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="Manager"
              value={formData.Manager}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Manger</label>
            <i class="input-icon fa-solid fa-phone-flip"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
        
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="email"
              name="E_Mail"
              value={formData.E_Mail}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">E-mail</label>
            <i class="input-icon  fa-solid fa-location-crosshairs"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="distSince"
              value={formData.date}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Date</label>
            <i class="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>





      </div>
      {/* <h1 className="distributor-form__title p-1 w-50">Area Information</h1> */}
      {/* Radio Button Group */}
{/* 
      <div className="row">
<div className="col-md-12 col-lg-6 col-sm-12">
<span className='label-head' name="distType"> Distributor Type :</span>
<div class="custom-radio-group row ">

<label class="custom-radio-container   col-md-12 col-lg-5 col-sm-12">
  <input type="radio" name="distType" value="Institutional Area" id='instArea' 
  onChange={handleRadioChange}
  checked={formData.distType === 'Institutional Area'}
  
  />
  <span class="custom-radio-checkmark"></span>
 Institutional Area
</label>
<label class="custom-radio-container  col-md-12 col-lg-5 col-sm-12">
  <input type="radio" name="distType" value="Regional Area" id='regArea' 
   onChange={handleRadioChange}
   checked={formData.distType === 'Regional Area'}
  
  />
  <span class="custom-radio-checkmark"></span>
  Regional Area
</label>
<div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Must Select any Type </div>

</div>

</div>        





<div className="col-md-12 col-lg-6 col-sm-12">
<span className='label-head' name="zone"> Zone :</span>
<div class="custom-radio-group row">

<label class="custom-radio-container  col-md-12 col-lg-3 col-sm-12">
  <input type="radio" name="zone" value="Zone 1" id='zone1' 
  
  onChange={handleRadioChange}
  checked={formData.zone === 'Zone 1'}
  
  />
  <span class="custom-radio-checkmark"></span>
  Zone 1
</label>
<label class="custom-radio-container col-md-12 col-lg-3 col-sm-12">
  <input type="radio" name="zone" value="Zone 2" id='zone2' 
  onChange={handleRadioChange}
  checked={formData.zone === 'Zone 2'}/>
  <span class="custom-radio-checkmark"></span>
  Zone 2
</label>
<label class="custom-radio-container col-md-12 col-lg-3 col-sm-12">
  <input type="radio" name="zone" value="Zone 3" id='zone3' 
  onChange={handleRadioChange}
  checked={formData.zone === 'Zone 3'}
  
  
  />
  <span class="custom-radio-checkmark"></span>
  Zone 3
</label>
</div>

</div> 

      </div>
      <div className="row">
<div className="col-md-12 col-lg-6 col-sm-12">
<span className='label-head' name="province"> Province :</span>
<div class="custom-radio-group row">

<label class="custom-radio-container col-md-12 col-lg-3 col-sm-12">
  <input type="radio" name="province" value="Punjab" id='pn' 
  onChange={handleRadioChange}
  checked={formData.province === 'Punjab'}


  />
  <span class="custom-radio-checkmark"></span>
  Punjab
</label>
<label class="custom-radio-container col-md-12 col-lg-3 col-sm-12">
  <input type="radio" name="province" value="Sindh" id='sn' 
   onChange={handleRadioChange}
   checked={formData.province === 'Sindh'}
   />
  <span class="custom-radio-checkmark"></span>
 Sindh
</label>
<label class="custom-radio-container col-md-12 col-lg-3 col-sm-12">
  <input type="radio" name="province" value="KPK" id='kpk' 
  
  onChange={handleRadioChange}
  checked={formData.province === 'KPK'}

  
  />
  <span class="custom-radio-checkmark"></span>
  KPK
</label>


</div>

</div>        

<div className="col-md-12 col-lg-6 col-sm-12">
<span className='label-head' name="status"> Status :</span>
<div class="custom-radio-group row">

<label class="custom-radio-container col-md-12 col-lg-3 col-sm-12">
  <input type="radio" name="status" value="Open" id='op'  
    onChange={handleRadioChange}
    checked={formData.status === 'Open'}

  
  />
  <span class="custom-radio-checkmark"></span>
  Open
</label>
<label class="custom-radio-container col-md-12 col-lg-3 col-sm-12">
  <input type="radio" name="status" value="Close" id='cl' 
 
 onChange={handleRadioChange}
  checked={formData.status === 'Close'}
  />

  <span class="custom-radio-checkmark"></span>
  Close
</label>
<label class="custom-radio-container col-md-12 col-lg-3 col-sm-12">
  <input type="radio" name="status" value="Pending" id='pend' 
  
  onChange={handleRadioChange}
  checked={formData.status === 'Pending'}
  
/>

  <span class="custom-radio-checkmark"></span>
  Pending
</label>
</div>

</div> 

      </div> */}

    
  


      <div className="row mt-5">
        <div className=" col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="zoneId"
              value={formData.ZoneId}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Zone ID</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid NTC Value</div>
            <i class="input-icon fa-brands fa-cc-diners-club"></i>
          </div>
        </div>


        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="lead"
              value={formData.lead_days}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid CNIC Number</div>
            <label className="distributor-label">Lead Days</label>
            <i class="input-icon fa-solid fa-address-card"></i>
          </div>
        </div>
       
 </div>
 <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="Manager_nick"
              value={formData.Manager_nick}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Manager Nick Name</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid GL Customer ID</div>
            <i class="input-icon fa-regular fa-address-card"></i>
          </div>
        </div>


        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="area_manager"
              value={formData.area_manager}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Area Manager</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid Status of SSR
          </div>
            <i class="input-icon fa-solid fa-file-shield"></i>
          </div>
        </div>
       
 </div>


      {/* Select Dropdown for Distributor Category */}
      <div className="row">
        {/* <div className="col-md-12 col-lg-6 col-sm-12">
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
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid STRN Status</div>
            <i class="input-icon mr-2 fa-regular fa-file-lines"></i>
          </div>
        </div> */}
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="email"
              name="area_manager_email"
              value={formData.area_manager_email}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Area Manager' Email</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid number of Days</div>
            <i class="input-icon fa-solid fa-lock"></i>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="area_manager_phone"
              value={formData.area_manager_phone}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Area Manager's Phone</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid number of Days</div>
            <i class="input-icon fa-solid fa-lock"></i>
          </div>
        </div>
  </div>



  <div className="row">
        
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="manager_phone"
              value={formData.manager_phone}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Manager's Phone</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid number of Days</div>
            <i class="input-icon fa-solid fa-lock"></i>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="FixPay"
              value={formData.FixPay}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Fixed Pay</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid number of Days</div>
            <i class="input-icon fa-solid fa-lock"></i>
          </div>
        </div>
  </div>











      {/* Submit Button */}
      <div className="row">
        <div className=" col-md-12 col-lg-3 col-sm-12">
          <button type="submit" className="distributor-submit-btn"  >
            Submit
          </button>
        </div>
        <div className=" col-md-12 col-lg-3 col-sm-12">
          <button type="reset" className="distributor-reset-btn">
            Reset
          </button>
        </div>
      </div>

      
      
    </form>
  </div>
  </div>
  );
};

export default AreaEditForm;














