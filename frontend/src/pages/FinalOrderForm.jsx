import React, { useState , useEffect} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import axios from 'axios';

const FinalOrderForm = ({formData , rows , orderValue , onOrderSubmit}) => {

  const navigate = useNavigate();
 const [orderFormData , setOrderFromData] = useState(formData);

  const [orderData, setOrderData] = useState({
    
    dd_banks1: '',
    dd_amount1:'',
    dd_number1:'',
    pay_slip_date1:'',
    pay_method1:'',


    dd_banks2: '',
    dd_amount2:'',
    dd_number2:'',
    pay_slip_date2:'',
    pay_method2:'',


    dd_banks3: '',
    dd_amount3:'',
    dd_number3:'',
    pay_slip_date3:'',
    pay_method3:'',



    dd_banks4: '',
    dd_amount4:'',
    dd_number4:'',
    pay_slip_date4:'',
    pay_method4:'',



    dd_banks5: '',
    dd_amount5:'',
    dd_number5:'',
    pay_slip_date5:'',
    pay_method5:'',



    total_payment:"",
    remarks:'',
    dispatch_mode:'',
    siv:''


    
  });
 
  // console.log("OrderFormData finally came from create Order", orderFormData);

  // console.log("Selected Order Table finally came from create Order",rows);
  // console.log("Order Value of all Selected  poructs",orderValue);

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
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setOrderData({
  //     ...orderData,
  //     [name]: value
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update the state with the new input value
    setOrderData((prevData) => {
      // Create a new object with the updated value
      const updatedData = { ...prevData, [name]: value };
  
      // Calculate the total payment
      const totalPayment = [
        updatedData.dd_amount1,
        updatedData.dd_amount2,
        updatedData.dd_amount3,
        updatedData.dd_amount4,
        updatedData.dd_amount5,
      ].reduce((sum, amount) => sum + (parseFloat(amount) || 0), 0);
  
      // Return the updated state including the new total payment
      return { ...updatedData, total_payment: totalPayment };
    });
  };
  



  



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Data of Form:', orderData);
    onOrderSubmit(orderData);
  };











  return (
    <div className="bankInsert">
   
      <ThemeToggle onThemeChange={handleThemeChange} />
    <div className={` distributor-form__container ${theme}`}>
     
    <form  onSubmit={handleSubmit}>
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Payment Information</h1>
      <div className="row">
        <div className="col-md-12 col-lg-5 col-sm-12">
          <div className="distributor-input-group">
           
            <input
              
              required
              type="number"
              name="total_payment"
              value={orderData.total_payment}
              onChange={handleChange}
              readOnly
              className={`distributor-input ${orderData.total_payment ? 'distributor-input-prefilled' : ''}`}
            />
          <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback">  <i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid distributor name </div>
            <label className={`distributor-label ${orderData.total_payment ? 'distributor-label-prefilled' : ''}`}>Total Enclosed Payment</label>
            
            <i class="fa-solid fa-coins input-icon"></i>
          </div>
        </div>
       
 </div>



      
<h3>Instrument #1 </h3>
<br/>
      <div className="row">
       
      <div className="col-md-12 col-lg-3 col-sm-12">
      <div className="distributor-input-group">
                <select
                  name="dd_banks1"
                  className="distributor-input"
                  onChange={handleChange}
                  value={orderData.dd_banks1}
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
            <input
              required
              type="number"
              name="dd_amount1"
              value={orderData.dd_amount1}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Amount</label>
            <i class="fa-solid fa-money-bill-wave input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
        <div className="col-md-12 col-lg-2 col-sm-12">
    <div className="distributor-input-group">
    <select
      name="pay_method1" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={orderData.pay_method1} // Reflect distType in the form data
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

        <div className="col-md-12 col-lg-2 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="dd_number1"
              value={orderData.dd_number1}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">DD #</label>
            <i class="fa-solid fa-receipt input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
       <div className="col-md-12 col-lg-2 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="pay_slip_date1"
      value={orderData.pay_slip_date1}
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
<br/>
      <div className="row">
       
      <div className="col-md-12 col-lg-3 col-sm-12">
      <div className="distributor-input-group">
                <select
                  name="dd_banks2"
                  className="distributor-input"
                  onChange={handleChange}
                  value={orderData.dd_banks2}
                  
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
            <input
            
              type="number"
              name="dd_amount2"
              value={orderData.dd_amount2}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label input-icon">Amount</label>
            <i class="fa-solid fa-money-bill-wave input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
        <div className="col-md-12 col-lg-2 col-sm-12">
    <div className="distributor-input-group">
    <select
      name="pay_method2" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={orderData.pay_method2} // Reflect distType in the form data
      
    >
      <option value=""></option>
      <option value="ON">Online</option>
      <option value="DD">DD</option>
      <option value="TT">TT</option>
    </select>
    <label className="distributor-label">Method</label>
    <i class="fa-regular fa-credit-card input-icon"></i>
  </div>
        </div>

        <div className="col-md-12 col-lg-2 col-sm-12">
          <div className="distributor-input-group">
            <input
             
              type="number"
              name="dd_number2"
              value={orderData.dd_number2}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">DD #</label>
            <i class="fa-solid fa-receipt input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
       <div className="col-md-12 col-lg-2 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="pay_slip_date2"
      value={orderData.pay_slip_date2}
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
<br/>
      <div className="row">
       
      <div className="col-md-12 col-lg-3 col-sm-12">
      <div className="distributor-input-group">
                <select
                  name="dd_banks3"
                  className="distributor-input"
                  onChange={handleChange}
                  value={orderData.dd_banks3}
                 
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
            <input
             
              type="number"
              name="dd_amount3"
              value={orderData.dd_amount3}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Amount</label>
            <i class="fa-solid fa-money-bill-wave input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
        <div className="col-md-12 col-lg-2 col-sm-12">
    <div className="distributor-input-group">
    <select
      name="pay_method3" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={orderData.pay_method3} // Reflect distType in the form data
     
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

        <div className="col-md-12 col-lg-2 col-sm-12">
          <div className="distributor-input-group">
            <input
             
              type="number"
              name="dd_number3"
              value={orderData.dd_number3}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">DD #</label>
            <i class="fa-solid fa-receipt input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
       <div className="col-md-12 col-lg-2 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="pay_slip_date3"
      value={orderData.pay_slip_date3}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Date</label>
    {/* <i className="input-icon fa-solid fa-calendar-days"></i> */}
  </div>
</div>
      </div>



      <h3>Instrument #4 </h3>
<br/>
      <div className="row">
       
      <div className="col-md-12 col-lg-3 col-sm-12">
      <div className="distributor-input-group">
                <select
                  name="dd_banks4"
                  className="distributor-input"
                  onChange={handleChange}
                  value={orderData.dd_banks4}
                 
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
            <input
              
              type="number"
              name="dd_amount4"
              value={orderData.dd_amount4}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label ">Amount</label>
            <i class="fa-solid fa-money-bill-wave input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
        <div className="col-md-12 col-lg-2 col-sm-12">
    <div className="distributor-input-group">
    <select
      name="pay_method4" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={orderData.pay_method4} // Reflect distType in the form data
     
    >
      <option value=""></option>
      <option value="ON">Online</option>
      <option value="DD">DD</option>
      <option value="TT">TT</option>
    </select>
    <label className="distributor-label">Method</label>
    <i class="fa-regular fa-credit-card input-icon"></i>
  </div>
        </div>

        <div className="col-md-12 col-lg-2 col-sm-12">
          <div className="distributor-input-group">
            <input
              
              type="number"
              name="dd_number4"
              value={orderData.dd_number4}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">DD #</label>
            <i class="fa-solid fa-receipt input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
       <div className="col-md-12 col-lg-2 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="pay_slip_date4"
      value={orderData.pay_slip_date4}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Date</label>
    {/* <i className="input-icon fa-solid fa-calendar-days"></i> */}
  </div>
</div>
      </div>


      <h3>Instrument #5 </h3>
<br/>
      <div className="row">
       
      <div className="col-md-12 col-lg-3 col-sm-12">
      <div className="distributor-input-group">
                <select
                  name="dd_banks5"
                  className="distributor-input"
                  onChange={handleChange}
                  value={orderData.dd_banks5}
                
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
            <input
          
              type="number"
              name="dd_amount5"
              value={orderData.dd_amount5}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label input-icon">Amount</label>
            <i class="fa-solid fa-money-bill-wave input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
        <div className="col-md-12 col-lg-2 col-sm-12">
    <div className="distributor-input-group">
    <select
      name="pay_method5" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={orderData.pay_method5} // Reflect distType in the form data
      
    >
      <option value=""></option>
      <option value="ON">Online</option>
      <option value="DD">DD</option>
      <option value="TT">TT</option>
    </select>
    <label className="distributor-label">Method</label>
    <i class="fa-regular fa-credit-card input-icon"></i>
  </div>
        </div>

        <div className="col-md-12 col-lg-2 col-sm-12">
          <div className="distributor-input-group">
            <input
              
              type="number"
              name="dd_number5"
              value={orderData.dd_number5}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">DD #</label>
            <i class="fa-solid fa-receipt input-icon"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
       
       <div className="col-md-12 col-lg-2 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="pay_slip_date5"
      value={orderData.pay_slip_date5}
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
               value={orderData.remarks}
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
      name="dispatch_mode" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={orderData.dispatch_mode} // Reflect distType in the form data
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
      value={orderData.siv} // Reflect distType in the form data
      required
    >
      <option value=""></option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
      
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
