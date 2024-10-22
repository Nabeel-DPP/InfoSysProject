import React, { useState , useEffect} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useNavigate , useLocation } from 'react-router-dom';
import axios from 'axios';
// import { keyframes } from '@emotion/react';
import ThemeToggle from '../components/ThemeToggle';
const PdLogEdit = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { rowData } = location.state || {};
  
 
  const [formData, setFormData] = useState({
    prd_id: '',             // Product ID (Number)
    scheme_id: '',          // Scheme ID (Number)
    bonus_scheme: '',       // Bonus Scheme (Number)
    bonus_units: '',        // Bonus Units (Number)
    fp: '',                 // Financial Parameter (Number)
    entry_date: new Date(), // Entry Date (Date)
    remarks: '',            // Remarks (String)
    type: '',               // Type (Number)
    bonus_status: '',       // Bonus Status (String)
    tp: '',                 // Lead Days (Number)
    mrp: '',                // Maximum Retail Price (Number)
});





useEffect(() => {
    if (rowData) {
      setFormData({
        prd_id: rowData.prd_id || '',                       // Product ID
        scheme_id: rowData.scheme_id || '',                 // Scheme ID
        bonus_scheme: rowData.bonus_scheme || '',           // Bonus Scheme
        bonus_units: rowData.bonus_units || '',             // Bonus Units
        fp: rowData.fp || '',                               // Financial Parameter
        // entry_date: rowData.entry_date ? new Date(rowData.entry_date) : new Date(), // Entry Date
        entry_date: rowData.entry_date ? new Date(rowData.entry_date).toISOString().split('T')[0] : '',
        remarks: rowData.remarks || '',                     // Remarks
        type: rowData.type || '',                           // Type
        bonus_status: rowData.bonus_status || '',           // Bonus Status
        tp: rowData.tp || '',                               // Lead Days
        mrp: rowData.mrp || '',                             // Maximum Retail Price
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



  



  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log("Submitted Data of Form : ", formData);
   try {
    await axios.put(`http://localhost:5555/prodLog/${rowData._id}`, formData);
    navigate("/productLog"); // Navigate back to AreaTable after successful update
  } catch (error) {
    console.error("Error updating Order data: ", error);
  }
  };




  const [theme, setTheme] = useState('white'); // Initial form theme

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update the form theme
  };





 

  return (
    <div>

    <ThemeToggle onThemeChange={handleThemeChange} />
   <div className={` distributor-form__container ${theme} mt-5`}>
      <form onSubmit={handleSubmit} >
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Product Log Information</h1>
    <div className="row">
  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="prd_id"
        value={formData.prd_id}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order ID.
      </div>
      <label className="distributor-label">Product ID</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="scheme_id"
        value={formData.scheme_id}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Distributor ID.
      </div>
      <label className="distributor-label">Scheme ID</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="bonus_scheme"
        value={formData.bonus_scheme}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Area ID.
      </div>
      <label className="distributor-label">Bonus Scheme</label>
    </div>
  </div>



  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="bonus_units"
        value={formData.bonus_units}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Area ID.
      </div>
      <label className="distributor-label">Bonus Units</label>
    </div>
  </div>




  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="fp"
        value={formData.fp}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Institute ID.
      </div>
      <label className="distributor-label">Final Price</label>
    </div>
  </div>



  <div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="entry_date"
      value={formData.entry_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Entry Date</label>
  </div>
</div>




  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-dollar-sign"></i>
      <input
        required
        type="text"
        name="remarks"
        value={formData.remarks}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid DD Amount.
      </div>
      <label className="distributor-label">Remarks</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-dollar-sign"></i>
      <input
        required
        type="number"
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order Value.
      </div>
      <label className="distributor-label">Product Type</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-calendar"></i>
      <input
        required
        type="text"
        name="bonus_status"
        value={formData.bonus_status}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Period.
      </div>
      <label className="distributor-label">Bonus Status</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="tp"
        value={formData.tp}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order ID.
      </div>
      <label className="distributor-label">Trade Price</label>
    </div>
  </div>



  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="mrp"
        value={formData.mrp}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order ID.
      </div>
      <label className="distributor-label">MRP</label>
    </div>
  </div>




  {/* Repeat similar divs for all other fields in formData */}

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

export default PdLogEdit;














