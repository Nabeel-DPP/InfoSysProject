import React, { useState, useEffect } from 'react';
import '../DemoForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
const QuotaReport = () => {
  const navigate = useNavigate();
  const [areas, setAreas] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [selectedAreaId, setSelectedAreaId] = useState(null);
  const [formData, setFormData] = useState({
  tblAreaId: '',
    tblDistId: '',
   startDate:'',
   endDate:''
    });

      const [displayData, setDisplayData] = useState({
        distributorName:'',
        saleAreaName:'',
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
    }));
  }, [formData, areas, distributors]);








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
console.log("This is the Data of Submitted Form:",formData);
navigate("/qtRpTable", { state: { formData , displayData } });
  };

  return (
    <div className="orderI">
      <ThemeToggle onThemeChange={handleThemeChange} />
      <div className={` distributor-form__container ${theme}`}>
        <form onSubmit={handleSubmit}>
          <h1 className="distributor-form__title p-1 w-50 mb-5">Product Quota Report</h1>
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

<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="startDate"
      value={formData.arr_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Start Date</label>
  </div>
</div>
<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="endDate"
      value={formData.arr_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">End Date</label>
  </div>
</div>


          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <button type="submit" className="distributor-submit-btn">
                Generate Report
              </button>
            </div>
        
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuotaReport;





