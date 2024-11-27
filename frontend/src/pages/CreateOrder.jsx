import React, { useState, useEffect } from 'react';
import '../DemoForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
import SelectProduct from './SelectProduct';
const CreateOrder = () => {
  const navigate = useNavigate();
  const [areas, setAreas] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [selectedAreaId, setSelectedAreaId] = useState(null);
  const [ subArea , setSubArea] = useState([]);
  const [institution , setInstitution] = useState([]);
  const [distributorType , setDistributorType]= useState([]);
  const [formData, setFormData] = useState({
    OrderId: '' ,
    tblAreaId: '',
    tblDistId: '',
    distType:'',
    subAreaId: '',
    instiId: '',
    FeedDate: '',
    // status:'',
    extra:'',
  });

  const [displayData, setDisplayData] = useState({
    distributorName: '',
    saleAreaName: '',
    saleTypeName: '',
    saleMonthName: '',
  });

  useEffect(() => {
    const fetchLatestOrderId = async () => {
      try 
      {
        const response = await axios.get("http://localhost:5555/order/latest");  // Endpoint to fetch the latest order ID
        // setLatestOrderId(response.data.latestOrderId); 
        console.log("This is Useffect response",response.data.latestOrderId); 
        const resId= response.data.latestOrderId;
        console.log("Order ID coming from DB is : " , resId);
        const incId= resId +1 ;
        // setLatestOrderId(incId);

        setFormData((prevFormData) => ({
          ...prevFormData,
          OrderId: incId
        }));


      } 
      catch (error) {
        console.error("Error fetching latest OrderId:", error);
      }
    };
    fetchLatestOrderId();
  }, []);
  // Fetch areas on component load
  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get("http://localhost:5555/area");
        setAreas(response.data);     
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    };
    fetchAreas();
  }, []);

  useEffect(() => {
    const fetchAreas = async () => {
      
      try {
        const response = await axios.get(`http://localhost:5555/distributor/type/${formData.tblDistId}`);
       console.log("This is the Response that have dist Type:",response);
       const resData = response.data;
       console.log("This is Response Data :",resData );
        await setDistributorType(resData);
           console.log("Distributor Type Found : " , distributorType);
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
  
    };
    fetchAreas();
  }, [formData.tblDistId]);

  // Fetch distributors based on selected Area ID
  useEffect(() => {
    
      console.log(selectedAreaId);
      const fetchDistributors = async () => {
        try {
          console.log("Area ID is : " , selectedAreaId);
          const response = await axios.get(
            `http://localhost:5555/distributor/area/${selectedAreaId}`
          );
          setDistributors(response.data);
        } catch (error) {
          console.error("Error fetching distributors:", error);
        }
      };
      fetchDistributors();
    
  }, [selectedAreaId]);











  useEffect(() => {
    if (selectedAreaId) {
      const fetchSubArea = async () => {
        try {
          console.log("Area ID for Sub Area is : " , selectedAreaId);
          const response = await axios.get(
            `http://localhost:5555/subArea/area/${selectedAreaId}`
          );
          setSubArea(response.data);
        } catch (error) {
          console.error("Error fetching Sub Area:", error);
        }
      };
      fetchSubArea();
    }
  }, [selectedAreaId]);







  useEffect(() => {
    const fetchInstitute = async () => {
      
        try {
          console.log("Area ID for Institution is : ", selectedAreaId);
          const response = await axios.get(
            `http://localhost:5555/inst/areaId/${selectedAreaId}`  // Correct URL format, as your backend expects :areaName
          );

          console.log("This is the Response from Institution : ",response.data);
         setInstitution(response.data);
          console.log("Coming institution from database is : " , institution);  // Set the institution data
        } catch (error) {
          console.error("Error fetching Institution:", error);
        }
      
      
       
       
      };
      fetchInstitute();
  
  }, [selectedAreaId]);
  



  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });



    // Update selected Area ID
    if (name === "tblAreaId") {
      setSelectedAreaId(value);
    }
   

  };


  useEffect(() => {
    const selectedDistributor = distributors.find(
      (dist) => dist.DistId == formData.tblDistId
    );
    console.log("UseEffect Distrtibutor:",selectedDistributor);

    const selectedArea = areas.find(
      (area) => area.AreaId == formData.tblAreaId
    );
    console.log("UseEffect Area:",selectedArea);

    setDisplayData((prevDisplayData) => ({
      ...prevDisplayData,
      distributorName: selectedDistributor?.distName || '',
      saleAreaName: selectedArea?.AreaName || '',
      saleTypeName:
        formData.saleType === 'General'
          ? 'General Sale'
          : formData.saleType === 'SP'
          ? 'Special Sale'
          : '',
      saleMonthName: formData.saleMonth || '',
    }));
  }, [formData, areas, distributors]);








  const [theme, setTheme] = useState('white'); // Initial form theme

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update the form theme
  };



  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("The Name of Distributor Type is : " , distributorType);

    const currentDate = new Date().toISOString().split('T')[0]; 

    // const updatedFormData = { ...formData, FeedDate: currentDate };

    // console.log("Update Form Values:", updatedFormData);
     
    setFormData((prevFormData) => ({
      ...prevFormData,
      FeedDate: currentDate,
    }));
   

   console.log('Display Data:', displayData)

   if(formData.FeedDate)
   {
    console.log("Update Form is :" , formData)
   }
   
   

    try {
      // const response = await axios.post(
      //   "http://localhost:5555/order//",
      //   updatedFormData
      // );
      // if (response.status === 201) {
      //   alert("Order created successfully!");
      //   setFormData({
      //     OrderId: '' ,
      //     tblAreaId: '',
      //     tblDistId: '',
      //     distType:'',
      //     subAreaName: '',
      //     instiId: '',
      //     FeedDate: '',
      //     status:''
      //   });
        
        navigate("/selectProduct", { state: { displayData , formData } });

    }
     catch (error) {
      console.error("Error:", error);
      alert("Error occurred while submitting the form.");
    }
  };

  return (
    <div className="orderI">
      <ThemeToggle onThemeChange={handleThemeChange} />
      <div className={` distributor-form__container ${theme}`}>
        <form onSubmit={handleSubmit}>
          <h1 className="distributor-form__title p-1 w-50 mb-5">Create Order</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="distributor-input-group">
                <select
                  name="tblAreaId"
                  className="distributor-input"
                  onChange={handleChange}
                  value={formData.tblAreaId}
                  required
                >
                  <option value=""></option>
                  {areas.map((area) => (
                  
                    <option key={area.AreaId} value={area.AreaId}>
                      {area.AreaName}
                    </option>
                  ))}
                </select>
                <label className="distributor-label">Area Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="distributor-input-group">
                <select
                  name="tblDistId"
                  className="distributor-input"
                  onChange={handleChange}
                  value={formData.tblDistId}
                  required
                >
                  <option value=""></option>
                  {distributors.map((dist) => (
                    <option key={dist.DistId} value={dist.DistId}>
                      {dist.distName}
                    </option>
                  ))}
                </select>
                <label className="distributor-label">Distributor</label>
              </div>
            </div>


<div className="col-md-6">
  <div className="distributor-input-group">
    <select
      name="distType"
      className="distributor-input"
      onChange={handleChange}
      value={formData.distType}
      required
      
    >
        <option value="" disabled></option>
      {distributorType.map((dist) => (
                    <option key={dist._id} value={dist.distType}>
                      {dist.distType}
                    </option>
    ))
      }
    </select>
    
    <label className="distributor-label">Distributor Type</label>
  </div>
</div>


<div className="col-md-6">
  <div className="distributor-input-group">
    <select
      name="extra" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={formData.extra} // Reflect distType in the form data
      required
    >
      <option value=""></option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
    <label className="distributor-label">Extra Comission</label>
  </div>
</div>





{/* <div className="col-md-6">
  <div className="distributor-input-group">
    <select
      name="status"
      className="distributor-input"
      onChange={handleChange}
      value={formData.status} 
      required
    >
      <option value=""></option>
      <option value="0">0</option>
      <option value="1">1</option>
    </select>
    <label className="distributor-label">Status</label>
  </div>
</div> */}


<div className="col-md-6">
  <div className="distributor-input-group">
    <select
      name="saleMonth" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={formData.saleMonth} // Reflect distType in the form data
      required
    >
       <option value=""></option>
      <option value="Jan-24">January-2024</option>
      <option value="Feb-24">Februrar-2024</option>
      <option value="Mar-24">March-2024</option>
      <option value="Apr-24">April-2024</option>
      <option value="May-24">May-2024</option>
      <option value="June-24">June-2024</option>
      <option value="Jul-24">July-2024</option>
      <option value="Aug-24">August-2024</option>
      <option value="Sep-24">September-2024</option>
      <option value="Oct-24">October-2024</option>
      <option value="Nov-24">November-2024</option>
      <option value="Dec-24">December-2024</option>
    </select>
    <label className="distributor-label">Sale Month</label>
  </div>
</div>


<div className="col-md-6">
  <div className="distributor-input-group">
    <select
      name="saleType" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={formData.saleType} // Reflect distType in the form data
      required
    >
       <option value=""></option>
      <option value="General">General</option>
      <option value="SP">SP</option>
    </select>
    <label className="distributor-label">Sale Type</label>
  </div>
</div>


<div className="col-md-6">
  <div className="distributor-input-group">
    <select
      name="subAreaId"
      className="distributor-input"
      onChange={handleChange}
      value={formData.subAreaId}
      required
    >
      <option value=""></option>
      {subArea.map((sub) => (
        <option key={`${sub.AreaId}-${sub.id}`} value={sub.id}>
          {sub.name} # {sub.id} 
        </option>
      ))}
    </select>
    <label className="distributor-label">Dispatch Area</label>
  </div>
</div>


<div className="col-md-6">
              <div className="distributor-input-group">
                <select
                  name="instiId"
                  className="distributor-input"
                  onChange={handleChange}
                  value={formData.instiId}
                  required
                >
                  <option value=""></option>
                  {institution.map((inst) => (
                    <option key={inst.id} value={inst.id}>
                      {inst.inst_name}
                    </option>
                  ))}
                </select>
                <label className="distributor-label">Institution</label>
              </div>
            </div>



          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <button type="submit" className="distributor-submit-btn">
                Submit
              </button>
            </div>
            <div className="col-md-3">
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

export default CreateOrder;





