import React, { useState, useEffect } from 'react';
import '../DemoForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
import { Institution } from '../../../backend/models/Institution';

const CreateOrder = () => {
  const navigate = useNavigate();
  const [areas, setAreas] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [selectedAreaId, setSelectedAreaId] = useState(null);
  const [ subArea , setSubArea] = useState([]);
  const [AreaName , setAreaName] = useState("");
  const [institution , setInstitution] = useState([]);
  const [formData, setFormData] = useState({
    OrderId: '',
    tblAreaId: '',
    // area_name:'', 
    tblDistId: '',
    distType:'',
    subAreaName: '',
    instiId: '',
    FeedDate: '',
    status:''
  });

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

  // Fetch distributors based on selected Area ID
  useEffect(() => {
    if (selectedAreaId) {
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
    }
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
          console.log("Area Name for Institution is : ", AreaName);
          const response = await axios.get(
            `http://localhost:5555/inst/${AreaName}`  // Correct URL format, as your backend expects :areaName
          );
          setInstitution(response.data);  // Set the institution data
        } catch (error) {
          console.error("Error fetching Institution:", error);
        }
      };
      fetchInstitute();
  
  }, []);
  

 
  

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


  const [theme, setTheme] = useState('white'); // Initial form theme

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update the form theme
  };



  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data of Form:", formData);
    try {
      const response = await axios.post(
        "http://localhost:5555/order",
        formData
      );
      if (response.status === 201) {
        alert("Order created successfully!");
        setFormData({
          tblAreaId: '',
          tblDistId: '',
          subAreaId: '',
          instiId: '',
          FeedDate: '',
        });
        navigate("/orderTable");
      } else {
        alert("Failed to create order.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while submitting the form.");
    }
  };

  return (
    <div className="orderI">
      <ThemeToggle onThemeChange={handleThemeChange} />
      <div className={` distributor-form__container ${theme}`}>
        <form onSubmit={handleSubmit}>
          <h1 className="distributor-form__title p-1 w-50 mb-5">Order Information</h1>
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
      <option value=""></option>
      {distributors.map((dist) => (
        <option key={dist.DistId} value={dist.distType}>
          {dist.distType}
        </option>
      ))}
    </select>
    <label className="distributor-label">Distributor Type</label>
  </div>
</div>



<div className="col-md-6">
  <div className="distributor-input-group">
    <select
      name="status" // New input field for distributor type
      className="distributor-input"
      onChange={handleChange}
      value={formData.status} // Reflect distType in the form data
      required
    >
      <option value=""></option>
      <option value="0">0</option>
      <option value="1">1</option>
    </select>
    <label className="distributor-label">Status</label>
  </div>
</div>


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
      <option value="Jan">January</option>
      <option value="Feb">Februrary</option>
      <option value="Mar">March</option>
      <option value="Jan">April</option>
      <option value="Feb">May</option>
      <option value="Mar">June</option>
      <option value="Jan">July</option>
      <option value="Feb">August</option>
      <option value="Mar">September</option>
      <option value="Jan">October</option>
      <option value="Feb">November</option>
      <option value="Mar">December</option>
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
      <option value="TP">TP</option>
      <option value="SP">SP</option>
      <option value="XD">XD</option>
    </select>
    <label className="distributor-label">Sale Type</label>
  </div>
</div>


<div className="col-md-6">
  <div className="distributor-input-group">
    <select
      name="subAreaName"
      className="distributor-input"
      onChange={handleChange}
      value={formData.subAreaName}
      required
    >
      <option value=""></option>
      {subArea.map((sub) => (
        <option key={`${sub.AreaId}-${sub.id}`} value={sub.name}>
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
                  name="institution"
                  className="distributor-input"
                  onChange={handleChange}
                  value={formData.institution}
                  required
                >
                  <option value=""></option>
                  {institution.map((inst) => (
                    <option key={inst.id} value={inst.inst_name}>
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





