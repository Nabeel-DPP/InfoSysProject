import React, { useState,useEffect} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
import BonusSnackbar from './BonusSnackbar';
const ProductBonusEdit = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { rowData } = location.state || {};
    const [prodLog, setProdLog] = useState({
      bonus_scheme: "",
      bonus_units: "",
      fp:"",
      tp:"",
      mrp:""
    });
    const [snackbar, setSnackbar] = useState(false);

    useEffect(() => {
      const fetchLog = async () => {
        try {
          const response = await axios.get(`http://localhost:5555/prodLog/prod_id/${rowData.prod_id}`);
          console.log("Response in PD Bonus from Product Log", response.data);
  
          // Assuming response.data contains an object with bonus_scheme and bonus_units
          if (response.data.length > 0) {
            setProdLog({
              bonus_scheme: response.data[0].bonus_scheme,
              bonus_units: response.data[0].bonus_units,
              fp: response.data[0].fp,
              tp: response.data[0].tp,
              mrp: response.data[0].mrp,
            });
          }
        } catch (err) {
          console.error("Error fetching product log:", err);
        }
      };
  
      fetchLog();
    }, [rowData.prod_id]);


  const [formData, setFormData] = useState({
    prod_id: '',           
  prod_name: '',                 
  prod_form_name: '',                  
  });

 

  useEffect(() => {
    if (rowData) {
      setFormData({
      prod_id: rowData.prod_id || '',                 
      prod_name: rowData.prod_name || '',                    
      prod_form_name: rowData.prod_form_name || '',                   
        
      });
    }
  }, [rowData]);






  const handleLog = (e) => {
    const { name, value } = e.target;
    setProdLog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
   console.log("Submitted Data of Form : ", prodLog);
   try {
    await axios.put(`http://localhost:5555/prodLog/prod_id/${rowData.prod_id}`, prodLog);
    // setShowSnackbar(true);
    navigate("/productLog" , {state:{snackbar:true , formData , prodLog}}); // Navigate back to AreaTable after successful update
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
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Product Bonus Information</h1>
    <div className="row">
  


<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <i className="fa-regular fa-id-badge input-icon"></i>
    <input
      required
      type="number"
      name="prod_id"
      value={formData.prod_id}
      onChange={handleChange}
      className={`distributor-input ${
        formData.prod_id ? "distributor-input-prefilled" : ""
      }`}
      autoComplete="off"
      readOnly={!!formData.prod_id}
/>
    <div className="valid-feedback">
      <i className="fa-regular fa-circle-check"></i>
    </div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order ID.
    </div>
    <label
      className={`distributor-label ${
        formData.prod_id ? "distributor-label-prefilled" : ""
      }`}
    >
      Product ID
    </label>
  </div>
</div>



<div className="col-md-12 col-lg-6 col-sm-12">
<div className="distributor-input-group">
  <i className="fa-solid fa-capsules input-icon"></i>
  <input
    required
    type="text"
    name="prod_name"
    value={formData.prod_name}
    onChange={handleChange}
    className="distributor-input distributor-input-prefilled"
    autoComplete="off"
    readOnly
  />
  <div className="valid-feedback">
    <i className="fa-regular fa-circle-check"></i>
  </div>
  <div className="invalid-feedback">
    <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please
    enter a Valid Product Name.
  </div>
  <label className="distributor-label distributor-label-prefilled">Product Name</label>
</div>
</div>


 




<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <i className="fa-solid fa-layer-group input-icon"></i>
    <input
      required
      type="text"
      name="prod_form_name"
      value={formData.prod_form_name}
      onChange={handleChange}
      className={`distributor-input ${
        formData.prod_form_name ? "distributor-input-prefilled" : ""
      }`}
      autoComplete="off"
      readOnly={!!formData.prod_form_name}
    />
    <div className="valid-feedback">
      <i className="fa-regular fa-circle-check"></i>
    </div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please
      enter a Valid Product Form.
    </div>
    <label
      className={`distributor-label ${
        formData.prod_form_name ? "distributor-label-prefilled" : ""
      }`}
    >
      Product Form
    </label>
  </div>
</div>





<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <i className="fa-solid fa-layer-group input-icon"></i>
    <input
      required
      type="text"
      name="fp"
      value={prodLog.fp}
      onChange={handleChange}
      className={`distributor-input ${
        formData.prod_form_name ? "distributor-input-prefilled" : ""
      }`}
      autoComplete="off"
      readOnly
    />
    <div className="valid-feedback">
      <i className="fa-regular fa-circle-check"></i>
    </div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please
      enter a Valid Product Form.
    </div>
    <label
      className={`distributor-label ${
        formData.prod_form_name ? "distributor-label-prefilled" : ""
      }`}
    >
      Factory Price
    </label>
  </div>
</div>


<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <i className="fa-solid fa-layer-group input-icon"></i>
    <input
      required
      type="text"
      name="tp"
      value={prodLog.tp}
      onChange={handleChange}
      className={`distributor-input ${
        formData.prod_form_name ? "distributor-input-prefilled" : ""
      }`}
      autoComplete="off"
      readOnly
    />
    <div className="valid-feedback">
      <i className="fa-regular fa-circle-check"></i>
    </div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please
      enter a Valid Product Form.
    </div>
    <label
      className={`distributor-label ${
        formData.prod_form_name ? "distributor-label-prefilled" : ""
      }`}
    >
      Trade Price
    </label>
  </div>
</div>



<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <i className="fa-solid fa-layer-group input-icon"></i>
    <input
      required
      type="text"
      name="mrp"
      value={prodLog.mrp}
      onChange={handleChange}
      className={`distributor-input ${
        formData.prod_form_name ? "distributor-input-prefilled" : ""
      }`}
      autoComplete="off"
      readOnly
    />
    <div className="valid-feedback">
      <i className="fa-regular fa-circle-check"></i>
    </div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please
      enter a Valid Product Form.
    </div>
    <label
      className={`distributor-label ${
        formData.prod_form_name ? "distributor-label-prefilled" : ""
      }`}
    >
      Market Retail Price
    </label>
  </div>
</div>
 




  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
    <i className="fa-solid fa-briefcase input-icon"></i>
      <input
        required
        type="number"
        name="bonus_scheme"
        value={prodLog.bonus_scheme}
        onChange={handleLog}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid DD Amount.
      </div>
      <label className="distributor-label">Base Packs</label>
    </div>
  </div>
  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
    <i className="fa-solid fa-briefcase-medical input-icon"></i>
      <input
        required
        type="number"
        name="bonus_units"
        value={prodLog.bonus_units}
        onChange={handleLog}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid DD Amount.
      </div>
      <label className="distributor-label">Bonus Packs</label>
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

export default ProductBonusEdit;














