import React, { useState,useEffect} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
const ProductEdit = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { rowData } = location.state || {};
  
 
  const [formData, setFormData] = useState({
    prod_id: '',           
  prod_name: '',               
  prod_form_name: '',               
  generic: '',                      
  pack: '',                                       
  ssr_enabled: '',         
             
  });

 

  useEffect(() => {
    if (rowData) {
      setFormData({
        prod_id: rowData.prod_id || '',                 
      prod_name: rowData.prod_name || '',                 
      prod_form_name: rowData.prod_form_name || '',              
      generic: rowData.generic || '',                                
      pack: rowData.pack || '',                       
      ssr_enabled: rowData.ssr_enabled || '',         
                 
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
    await axios.put(`http://localhost:5555/product/${rowData._id}`, formData);
    navigate("/productTable"); // Navigate back to AreaTable after successful update
  } catch (error) {
    console.error("Error updating Product data: ", error);
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
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Product General Information</h1>
    <div className="row">
  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
    <i class="fa-regular fa-id-badge input-icon"></i>
      <input
        required
        type="number"
        name="prod_id"
        value={formData.prod_id}
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
    <i class="fa-solid fa-capsules input-icon"></i>
      <input
        required
        type="text"
        name="prod_name"
        value={formData.prod_name}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a Valid Product Name.
      </div>
      <label className="distributor-label">Product Name</label>
    </div>
  </div>

  {/* <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="prod_form_id"
        value={formData.prod_form_id}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Product Form ID.
      </div>
      <label className="distributor-label">Product Form ID</label>
    </div>
  </div> */}


{/* 
  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="text"
        name="prod_form_name"
        value={formData.prod_form_name}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Product Name.
      </div>
      <label className="distributor-label">Product Form</label>
    </div>
  </div> */}

<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
  <i class="fa-solid fa-layer-group input-icon"></i>
    <select
      required
      name="prod_form_name"
      value={formData.prod_form_name}
      onChange={handleChange}
      className="distributor-input"
    >
      <option value="" disabled>
        Select Product Form
      </option>
      <option value="Inj">Inj</option>
      <option value="Cap">Cap</option>
      <option value="Tab">Tab</option>
      <option value="Susp">Susp</option>
    </select>
    <div className="valid-feedback">
      <i className="fa-regular fa-circle-check"></i>
    </div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please select a valid Product Form.
    </div>
    <label className="distributor-label">Product Form</label>
  </div>
</div>




  {/* <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="prd_type"
        value={formData.prd_type}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Institute ID.
      </div>
      <label className="distributor-label">Product Type</label>
    </div>
  </div> */}


  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
    <i class="fa-brands fa-react input-icon"></i>
      <input
        required
        type="text"
        name="generic"
        value={formData.generic}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Institute ID.
      </div>
      <label className="distributor-label">Generic</label>
    </div>
  </div>



  {/* <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="text"
        name="compose"
        value={formData.compose}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Institute ID.
      </div>
      <label className="distributor-label">Compose</label>
    </div>
  </div> */}





  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
    <i class="fa-solid fa-box-archive input-icon"></i>
      <input
        required
        type="text"
        name="pack"
        value={formData.pack}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Institute ID.
      </div>
      <label className="distributor-label">Pack</label>
    </div>
  </div>



{/* 
  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="text"
        name="thera"
        value={formData.thera}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Institute ID.
      </div>
      <label className="distributor-label">Thera</label>
    </div>
  </div> */}




  
  {/* <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="text"
        name="strength"
        value={formData.strength}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Institute ID.
      </div>
      <label className="distributor-label">Strength</label>
    </div>
  </div> */}





  
  {/* <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="text"
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Institute ID.
      </div>
      <label className="distributor-label">Status</label>
    </div>
  </div> */}





  {/* <div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="arr_date"
      value={formData.arr_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Arrival Date</label>
  </div>
</div> */}




{/* <div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="ter_date"
      value={formData.ter_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Ter Date</label>
  </div>
</div> */}



{/* <div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="change_price_date"
      value={formData.change_price_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Change Price Date</label>
  </div>
</div> */}




  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
    <i class="fa-solid fa-file-pen input-icon"></i>
      <input
        required
        type="number"
        name="ssr_enabled"
        value={formData.ssr_enabled}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid DD Amount.
      </div>
      <label className="distributor-label">SSR Enabled</label>
    </div>
  </div>

  {/* <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-dollar-sign"></i>
      <input
        required
        type="number"
        name="trading"
        value={formData.trading}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order Value.
      </div>
      <label className="distributor-label">Trading</label>
    </div>
  </div> */}

  


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

export default ProductEdit;














