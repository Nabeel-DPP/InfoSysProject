import React, { useState , useEffect} from 'react';
import './DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { keyframes } from '@emotion/react';
import ThemeToggle from './components/ThemeToggle';
const DistInsert = () => {

  const navigate = useNavigate();
  const [areas, setAreas] = useState([]);
  const [formData, setFormData] = useState({
    DistId: '',
    distName: '',
    areaID: '',
    zoneID: '',
    status:'',
    address:'',
    balance:'',
    closingBalance:'',
    distType:'',
    ssrType:'',
    factorCode:'',
    arrDate: Date,
    emailId:'',
    phone1:'',
    phone2:'',
    ntn:'',
    LockDays:'',
    cnic:''
    
  });

 
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  


  useEffect(() => {
    // Fetch areas for the dropdown
    const fetchAreas = async () => {
      const response = await axios.get("http://localhost:5555/area"); // Adjust the API endpoint accordingly
      setAreas(response.data);
      // console.log(response);
    };
    fetchAreas();
  }, []);
  



  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log("Submitted Data of Form : ", formData);
    try {
        
        const response = await axios.post("http://localhost:5555/distributor", formData); // Post request to the server's '/area' endpoint
          console.log(response);
        if (response.status === 201) {  // Check if the response is OK
          alert('Area added successfully!');
          
          setFormData({
            DistId: '',
    distName: '',
    areaID:'',
    zoneID: '',
    status:'',
    address:'',
    balance:'',
    closingBalance:'',
    distType:'',
    ssrType:'',
    factorCode:'',
    arrDate:'',
    emailId:'',
    phone1:'',
    phone2:'',
    ntn:'',
    LockDays:'',
    cnic:''
    
          });
          navigate("/distTable");
        } else {
          alert('Failed to add area.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error occurred while submitting the form.');
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
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Distributor Information</h1>
      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
             <i className="input-icon fa fa-user"></i>
            <input
              required
              type="number"
              name="DistId"
              value={formData.DistId}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
          <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback">  <i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid distributor name </div>
            <label className="distributor-label">Distributor ID</label>
            <i className="input-icon fa fa-user"></i>
          </div>
        </div>

       


      <div className="distributor-input-group col-md-12 col-lg-6 col-sm-12">
        <i class="input-icon fa-solid fa-street-view mr-5"></i>
            


            <select name="areaID" className="distributor-input" onChange={handleChange} required>
        <option value=""></option>
        {areas.map(area => (
          <option key={area.AreaId} value={area.AreaId}>{area.AreaName}</option>
        ))}
      </select>
            
            
           <label className="distributor-label ml-2" >Area Name</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please select a sale area.</div>
            
          </div>
















        <div className="col-md-1 col-lg-6 col-sm-12">
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
          <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback">  <i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid distributor name </div>
            <label className="distributor-label">Distributor Name</label>
            <i className="input-icon fa fa-user"></i>
          </div>
        </div>



        
<div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="zoneID"
              value={formData.zoneID}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Zone ID</label>
            <i class="input-icon fa-solid fa-location-dot"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>



        
 </div>



      

      <div className="row">
       
      
       
        
        
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
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
            <i class="input-icon fa-solid fa-location-crosshairs"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Balance</label>
            <i class="input-icon fa-solid fa-sack-dollar"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>
      




      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="closingBalance"
              value={formData.closingBalance}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">Closing Balance</label>
            <i class="input-icon fa-solid fa-filter-circle-dollar"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="distType"
              value={formData.distType}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">Distributor Type </label>
            <i class="input-icon fa-solid fa-list"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>


      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="ssrType"
              value={formData.ssrType}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">SSR Type</label>
            <i class="input-icon fa-solid fa-layer-group"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="factorCode"
              value={formData.factorCode}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">Factory Code </label>
            <i class="input-icon fa-solid fa-industry"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>





      <div className="row">
       



        <div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="arrDate"
      value={formData.arrDate}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Date</label>
    <i class="input-icon fa-solid fa-calendar-days"></i>
  </div>
</div>




        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">Email ID</label>
            <i class="input-icon fa-regular fa-envelope"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>


      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="phone1"
              value={formData.phone1}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">Phone No 1</label>
            <i class="input-icon fa-solid fa-phone-flip"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="phone2"
              value={formData.phone2}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">Phone No 2 </label>
            <i class="input-icon fa-solid fa-mobile-screen"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>


      <div className="row">


      <div className="distributor-input-group col-md-12 col-lg-3 col-sm-12">
      <i class="input-icon fa-solid fa-diagram-project mr-5"></i>
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



        <div className="col-md-12 col-lg-3 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="ntn"
              value={formData.ntn}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">NTN</label>
            <i class="input-icon fa-solid fa-hashtag"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>


        <div className="col-md-12 col-lg-3 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="LockDays"
              value={formData.LockDays}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">LockDays</label>
            <i class="input-icon fa-solid fa-shop-lock"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-3 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">CNIC</label>
            <i class="input-icon fa-regular fa-address-card"></i>
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

export default DistInsert;














