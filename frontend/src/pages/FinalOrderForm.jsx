import React, { useState , useEffect} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import axios from 'axios';

const FinalOrderForm = () => {

  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    bank_id: '',
    bank_name: '',
    status: '',
    branch_code: '',
    add_date: Date,
    bank_abr: '',
    
  });



  const [theme, setTheme] = useState('white'); // Initial form theme

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update the form theme
  };

const [bank , setBank] =useState([]);

useEffect(() => {
    const fetchBank = async () => {
      try {
        const response = await axios.get("http://localhost:5555/bank");
        setBank(response.data);     
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    };
    fetchBank();
  }, []);


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
        
        const response = await axios.post("http://localhost:5555/bank", formData); // Post request to the server's '/area' endpoint
          console.log(response);
        if (response.status === 201) {  // Check if the response is OK
          alert('Area added successfully!');
          
          setFormData({
            bank_id: '',
    bank_name: '',
    status: '',
    branch_code: '',
    add_date: '',
    bank_abr: '',
    
          });
          navigate("/bankTable");
        } else {
          alert('Failed to add area.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error occurred while submitting the form.');
      }
    
  };











  return (
    <div className="bankInsert">
     
      <ThemeToggle onThemeChange={handleThemeChange} />
    <div className={` distributor-form__container ${theme}`}>
     
    <form onSubmit={handleSubmit} >
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Payment Information</h1>
      <div className="row">
        <div className="col-md-12 col-lg-5 col-sm-12">
          <div className="distributor-input-group">
           
            <input
              required
              type="number"
              name="bank_id"
              value={formData.bank_id}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
          <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback">  <i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid distributor name </div>
            <label className="distributor-label">Total Enclosed Payment</label>
            <i class="fa-solid fa-money-bill-wave input-icon"></i>
          </div>
        </div>
       
 </div>



      
<h3>Instrument #1 </h3>
<br />
      <div className="row">
       
      <div className="col-md-12 col-lg-4 col-sm-12">
      <div className="distributor-input-group">
                <select
                  name="bankName"
                  className="distributor-input"
                  onChange={handleChange}
                  value={formData.bank}
                  required
                >
                  <option value=""></option>
                  {bank.map((bank) => (
                  
                    <option key={bank.bank_id} value={bank.bank_name}>
                      {bank.bank_name}
                    </option>
                  ))}
                </select>
                <label className="distributor-label">Bank Name</label>
                <i className="input-icon fa-solid fa-building-columns"></i>
              </div>
         
        </div>
       
        <div className="col-md-12 col-lg-3 col-sm-12">
    <div className="distributor-input-group">
    <select
      name="method" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={formData.method} // Reflect distType in the form data
      required
    >
      <option value=""></option>
      <option value="0">Online</option>
      <option value="1">DD</option>
      <option value="1">TT</option>
    </select>
    <label className="distributor-label">Method</label>
    <i class="fa-regular fa-credit-card input-icon"></i>
  </div>
        </div>
        <div className="col-md-12 col-lg-3 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="ddNumber"
              value={formData.ddNumber}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">DD Number</label>
            <i class="fa-solid fa-receipt input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
       <div className="col-md-12 col-lg-2 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="payDate"
      value={formData.payDate}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Date</label>
    {/* <i className="input-icon fa-solid fa-calendar-days"></i> */}
  </div>
</div>
      </div>
      <h3>Instrument #2 </h3>
      <br />
      <div className="row">
       
      <div className="col-md-12 col-lg-4 col-sm-12">
      <div className="distributor-input-group">
                <select
                  name="bankName2"
                  className="distributor-input"
                  onChange={handleChange}
                  value={formData.bankName2}
                  required
                >
                  <option value=""></option>
                  {bank.map((bank) => (
                  
                    <option key={bank.bank_id} value={bank.bank_name}>
                      {bank.bank_name}
                    </option>
                  ))}
                </select>
                <label className="distributor-label">Bank Name</label>
                <i className="input-icon fa-solid fa-building-columns"></i>
              </div>
         
        </div>
       
        <div className="col-md-12 col-lg-3 col-sm-12">
    <div className="distributor-input-group">
    <select
      name="method2" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={formData.method2} // Reflect distType in the form data
      required
    >
      <option value=""></option>
      <option value="0">Online</option>
      <option value="1">DD</option>
      <option value="1">TT</option>
    </select>
    <label className="distributor-label">Method</label>
    <i class="fa-regular fa-credit-card input-icon"></i>
  </div>
        </div>
        <div className="col-md-12 col-lg-3 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="ddNumber2"
              value={formData.ddNumber2}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">DD Number</label>
            <i class="fa-solid fa-receipt input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
       <div className="col-md-12 col-lg-2 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="payDate2"
      value={formData.payDate2}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Date</label>
    {/* <i className="input-icon fa-solid fa-calendar-days"></i> */}
  </div>
</div>
      </div>

      <h3>Instrument #3 </h3>
      <br />
      <div className="row">
       
       <div className="col-md-12 col-lg-4 col-sm-12">
       <div className="distributor-input-group">
                 <select
                   name="bankName3"
                   className="distributor-input"
                   onChange={handleChange}
                   value={formData.bankName3}
                   required
                 >
                   <option value=""></option>
                   {bank.map((bank) => (
                   
                     <option key={bank.bank_id} value={bank.bank_name}>
                       {bank.bank_name}
                     </option>
                   ))}
                 </select>
                 <label className="distributor-label">Bank Name</label>
                 <i className="input-icon fa-solid fa-building-columns"></i>
               </div>
          
         </div>
        
         <div className="col-md-12 col-lg-3 col-sm-12">
     <div className="distributor-input-group">
     <select
       name="method3" // New input field for distributor type
       className="distributor-input"
       onChange={handleChange}
       value={formData.method3} // Reflect distType in the form data
       required
     >
       <option value=""></option>
       <option value="0">Online</option>
       <option value="1">DD</option>
       <option value="1">TT</option>
     </select>
     <label className="distributor-label">Method</label>
     <i class="fa-regular fa-credit-card input-icon"></i>
   </div>
         </div>
         <div className="col-md-12 col-lg-3 col-sm-12">
           <div className="distributor-input-group">
             <input
               required
               type="number"
               name="ddNumber3"
               value={formData.ddNumber3}
               onChange={handleChange}
               className="distributor-input"
               autoComplete="off"
             />
             <label className="distributor-label">DD Number</label>
             <i class="fa-solid fa-receipt input-icon"></i>
             <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
             <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
           </div>
         </div>
        
        <div className="col-md-12 col-lg-2 col-sm-12">
   <div className="distributor-input-group">
     <input
       type="date"
       name="payDate3"
       value={formData.payDate3}
       onChange={handleChange}
       className="distributor-input"
       autoComplete="off"
     />
     <label className="distributor-label">Date</label>
     {/* <i className="input-icon fa-solid fa-calendar-days"></i> */}
   </div>
 </div>
       </div>



      <div className="row">
       
       <div className="col-md-12 col-lg-6 col-sm-12">
           <div className="distributor-input-group">
             <input
               required
               type="text"
               name="remarks"
               value={formData.remarks}
               onChange={handleChange}
               className="distributor-input"
               autoComplete="off"
             />
             
             <label className="distributor-label">Remarks / Instructions </label>
             <i class="fa-solid fa-pencil input-icon"></i>
             <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
             <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid email address</div>
           </div>
         </div>
        
         <div className="col-md-12 col-lg-4 col-sm-12">
         <div className="distributor-input-group">
    <select
      name="dipatchMode" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={formData.dispatchMode} // Reflect distType in the form data
      required
    >
      <option value=""></option>
      <option value="Bilty">Bilty</option>
      <option value="Courier">Courier</option>
    </select>
    <label className="distributor-label">Dispatch Mode</label>
    <i class="fa-solid fa-truck-arrow-right input-icon"></i>
  </div>
         </div>
         <div className="col-md-12 col-lg-2 col-sm-12">
         <div className="distributor-input-group">
    <select
      name="siv" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={formData.siv} // Reflect distType in the form data
      required
    >
      <option value=""></option>
      <option value="Y">Yes</option>
      <option value="N">No</option>
      
    </select>
    <label className="distributor-label">S I V</label>
    <i class="fa-solid fa-globe input-icon"></i>
  </div>
         </div>
        
      
       </div>
      
      
      {/* Submit Button */}
      <div className="row">
        <div className=" col-md-12 col-lg-3 col-sm-12">
          <button type="submit" className="distributor-submit-btn"  >
            Submit & Finalize
          </button>
        </div>
        <div className=" col-md-12 col-lg-3 col-sm-12">
          <button type="reset" className="distributor-reset-btn">
            Back
          </button>
        </div>
      </div>

      
      
    </form>
  </div>
  </div>
  );
};

export default FinalOrderForm;
