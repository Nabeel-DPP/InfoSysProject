import React, { useState,} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
const DispatchInsert = () => {

  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    dispatch_id: '',
  pending_units: '',
  batchNo: '',
  invoice_date: Date,
  invoice_no: '',
  pending_date: Date,
  biltyNo: '',
  gtId: '',
  cartons: '',
  dispatch_entry_date: Date,
  dist_receiving: '',
  dist_flag_date: '',
  dist_flag_month: '',
  dist_flag_entry: '',
  bilty_charges: '',
  });

  const [theme, setTheme] = useState('white'); // Initial form theme

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update the form theme
  };





 
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
        
        const response = await axios.post("http://localhost:5555/dispatch", formData); // Post request to the server's '/area' endpoint
          console.log(response);
        if (response.status === 201) {  // Check if the response is OK
          alert('Area added successfully!');
          
          setFormData({
            dispatch_id: '',
  pending_units: '',
  batchNo: '',
  invoice_date: Date,
  invoice_no: '',
  pending_date: Date,
  biltyNo: '',
  gtId: '',
  cartons: '',
  dispatch_entry_date: Date,
  dist_receiving: '',
  dist_flag_date: '',
  dist_flag_month: '',
  dist_flag_entry: '',
  bilty_charges: '',
          });
          navigate("/dispatchTable");
        } else {
          alert('Failed to add area.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error occurred while submitting the form.');
      }
    
  };











  return (
    <div className="dispatchInsert">
   <ThemeToggle onThemeChange={handleThemeChange} />
   <div className={` distributor-form__container ${theme} mt-5`}>
     
    <form onSubmit={handleSubmit} >
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Dispatch Information Information</h1>
    <div className="row">
  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="dispatch_id"
        value={formData.dispatch_id}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order ID.
      </div>
      <label className="distributor-label">Dispatch ID</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="pending_units"
        value={formData.pending_units}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Distributor ID.
      </div>
      <label className="distributor-label">Pending Units</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="batchNo"
        value={formData.batchNo}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Area ID.
      </div>
      <label className="distributor-label">Batch No</label>
    </div>
  </div>



  <div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="invoice_date"
      value={formData.invoice_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Invoice Date</label>
  </div>
</div>





  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="text"
        name="invoice_no"
        value={formData.invoice_no}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Institute ID.
      </div>
      <label className="distributor-label">Invoice No:</label>
    </div>
  </div>



  <div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="pending_date"
      value={formData.pending_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Pending Date</label>
  </div>
</div>




  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-dollar-sign"></i>
      <input
        required
        type="text"
        name="biltyNo"
        value={formData.biltyNo}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid DD Amount.
      </div>
      <label className="distributor-label">Bilty No</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-dollar-sign"></i>
      <input
        required
        type="number"
        name="gtId"
        value={formData.gtId}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order Value.
      </div>
      <label className="distributor-label">Goods Transporter ID</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-calendar"></i>
      <input
        required
        type="text"
        name="cartons"
        value={formData.cartons}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Period.
      </div>
      <label className="distributor-label">Cartons</label>
    </div>
  </div>

  
<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="dispatch_entry_date"
      value={formData.dispatch_entry_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Dispatch Entry Date</label>
  </div>
</div>

  {/* Repeat similar divs for all other fields in formData */}

</div>



<div className="row">
  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="text"
        name="dist_receiving"
        value={formData.dist_receiving}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order ID.
      </div>
      <label className="distributor-label">Distributor Receiving</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="dist_flag_date"
      value={formData.dist_flag_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Distributor Flag Date</label>
  </div>
</div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="text"
        name="dist_flag_month"
        value={formData.dist_flag_month}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Area ID.
      </div>
      <label className="distributor-label">Distributor Flag Month</label>
    </div>
  </div>




  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="dist_flag_entry"
        value={formData.dist_flag_entry}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Area ID.
      </div>
      <label className="distributor-label">Distributor Flag Entry</label>
    </div>
  </div>


  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="bilty_charges"
        value={formData.bilty_charges}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Area ID.
      </div>
      <label className="distributor-label">Bilty Charges</label>
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

export default DispatchInsert;














