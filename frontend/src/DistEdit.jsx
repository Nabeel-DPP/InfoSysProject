import React, { useState, useEffect} from 'react';
import './DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useNavigate , useLocation} from 'react-router-dom';
import axios from 'axios';
// import { keyframes } from '@emotion/react';

const DistEdit = () => {
    const location = useLocation();
    // const navigate = useNavigate();
    const { rowData } = location.state || {}; // Get the passed row data
  
  const navigate = useNavigate();
 
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
    arrDate:Date,
    emailId:'',
    phone1:'',
    phone2:'',
    ntn:'',
    LockDays:'',
    cnic:''
    
  });



  useEffect(() => {
    console.log("This is the Data coming from Area Table : ", rowData);
    if (rowData) {
      setFormData({
        DistId:rowData.DistId ,
        distName:rowData.distName ,
        areaID:rowData.areaID ,
        zoneID: rowData.zoneID ,
        status: rowData.status,
        address:rowData.address,
        balance: rowData.balance,
        closingBalance:rowData.closingBalance ,
        distType: rowData.distType,
        ssrType: rowData.ssrType,
        factorCode: rowData.factorCode,
        // arrDate: rowData.arrDate,
        arrDate: rowData.arrDate ? new Date(rowData.arrDate).toISOString().split('T')[0] : '',
        emailId: rowData.emailId,
        phone1:rowData.phone1,
        phone2:rowData.phone2,
        ntn:rowData.ntn,
        LockDays:rowData.LockDays,
        cnic:rowData.cnic
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
    // try {
        
    //     const response = axios.put(`http://localhost:5555/distributor/${rowData._id}`, formData); // Post request to the server's '/area' endpoint
    //       console.log( "This is Response" , response);
    //     if (response.status === 201) {  // Check if the response is OK
    //       alert('Area added successfully!');
          
    //       setFormData({
    //         DistId: '',
    // distName: '',
    // areaID: '',
    // zoneID: '',
    // status:'',
    // address:'',
    // balance:'',
    // closingBalance:'',
    // distType:'',
    // ssrType:'',
    // factorCode:'',
    // arrDate:'',
    // emailId:'',
    // phone1:'',
    // phone2:'',
    // ntn:'',
    // LockDays:'',
    // cnic:''
    
    //       });
    //       navigate("/distTable");
    //     } else {
    //       alert('Failed to add Distributor Data.');
    //     }
    //   } catch (error) {
    //     console.error('Error:', error);
    //     alert('Error occurred while submitting the form.');
    //   }

    try {
        await axios.put(`http://localhost:5555/distributor/${rowData._id}`, formData);
        navigate("/distTable"); // Navigate back to AreaTable after successful update
      } catch (error) {
        console.error("Error updating area data: ", error);
      }



    
  };











  return (
   
    <div className="distributor-form__container mt-5">
     
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


        <div className="col-md-12 col-lg-6 col-sm-12">
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







       
 </div>



      

      <div className="row">
       
      <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="areaID"
              value={formData.areaID}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            
            <label className="distributor-label">Area ID</label>
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
              name="zoneID"
              value={formData.zoneID}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Zone ID</label>
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
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Address</label>
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
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Balance</label>
            <i class="input-icon fa-solid fa-calendar-days"></i>
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
              name="distType"
              value={formData.distType}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">Distributor Type </label>
            <i class="input-icon fa-solid fa-calendar-days"></i>
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
              name="factorCode"
              value={formData.factorCode}
              onChange={handleChange}
              className="distributor-input"
            //   autoComplete="off"
            />
            <label className="distributor-label">Factory Code </label>
            <i class="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>





      <div className="row">
        {/* <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="date"
              name="arrDate"
              value={formData.arrDate}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Date</label>
            <i class="input-icon  fa-solid fa-location-crosshairs"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div> */}
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
            <i class="input-icon fa-solid fa-calendar-days"></i>
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
            <i class="input-icon  fa-solid fa-location-crosshairs"></i>
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
            <i class="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>


      <div className="row">

      <div className="distributor-input-group col-md-12 col-lg-3 col-sm-12">
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
            <i class="input-icon  fa-solid fa-location-crosshairs"></i>
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
            <i class="input-icon  fa-solid fa-location-crosshairs"></i>
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
  );
};

export default DistEdit;














