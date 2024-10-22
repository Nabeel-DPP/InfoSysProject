import React, { useState, useEffect } from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';

const BankEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { rowData } = location.state || {}; // Get the passed row data

  // State to manage form data
  const [formData, setFormData] = useState({
    bank_id: '',
    bank_name: '',
    status: '',
    branch_code: '',
    add_date: Date,
    bank_abr: ''
    
  });
  const [theme, setTheme] = useState('white'); // Initial form theme

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update the form theme
  };


  // Populate form data from row data
  useEffect(() => {
    console.log("This is the Data coming from Area Table : ", rowData);
    if (rowData) {
      setFormData({
        bank_id:rowData.bank_id,
        bank_name:rowData.bank_name,
        status:rowData.status,
        branch_code: rowData.branch_code,
        // add_date:rowData.add_date,
        add_date: rowData.add_date ? new Date(rowData.add_date).toISOString().split('T')[0] : '',
        bank_abr: rowData.bank_abr
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
      await axios.put(`http://localhost:5555/bank/${rowData._id}`, formData);
      navigate("/bankTable"); // Navigate back to AreaTable after successful update
    } catch (error) {
      console.error("Error updating area data: ", error);
    }
  };





  return (
     <div className="bankEdit">
      <ThemeToggle onThemeChange={handleThemeChange} />
      <div className={` distributor-form__container ${theme} mt-5`}>
     
    <form onSubmit={handleSubmit} >
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Bank Information</h1>
      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
             <i className="input-icon fa fa-user"></i>
            <input
              required
              type="number"
              name="bank_id"
              value={formData.bank_id}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
          <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback">  <i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid distributor name </div>
            <label className="distributor-label">Bank ID</label>
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
              name="bank_name"
              value={formData.bank_name}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            
            <label className="distributor-label">Bank Name</label>
            <i class="input-icon fa-solid fa-envelope"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid email address</div>
          </div>
        </div>
       
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="branch_code"
              value={formData.branch_code}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Branch Code</label>
            <i class="input-icon fa-solid fa-phone-flip"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
        
      </div>

      <div className="row">
       

        <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-calendar"></i>
      <input
        required
        type="date"
        name="add_date"
        value={formData.add_date}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Feed Date.
      </div>
      <label className="distributor-label">Add Date</label>
    </div>
  </div>

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="bank_abr"
              value={formData.bank_abr}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Bank Abbrevation</label>
            <i class="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
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

export default BankEdit;














