import React, { useState,useEffect} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import PriceEditModal from './PriceEditModal';
import CustomSnackbar from './CustomSnackbar';


const ProductPriceEdit = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { rowData } = location.state || {};
    const [prodLog, setProdLog] = useState({
    fp:"",
    tp:"",
    mrp:"",
    base:"",
    bonus:""
    });
  
    const [snackbar , setSnackbar] = useState(false);
    const [logs, setLogs] = useState([]); // State to store fetched logs
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const closeModal = async() => {
      setShowModal(false);
    await axios.put(`http://localhost:5555/prodLog/price/${rowData.prod_id}`, prodLog);
      navigate("/productLog"); // Navigate to the product log after closing the modal
    };
   
    
    useEffect(() => {
      const fetchLog = async () => {
        try {
          const response = await axios.get(`http://localhost:5555/prodLog/prod_id/${rowData.prod_id}`);
          console.log("Response from Product Log", response.data);
  
          // Assuming response.data contains an object with bonus_scheme and bonus_units
          if (response.data.length > 0) {
            setProdLog({
              fp: response.data[0].fp,
              tp: response.data[0].tp,
              mrp: response.data[0].mrp,
              base:response.data[0].bonus_scheme,
              bonus:response.data[0].bonus_units,
            });
          }
        } catch (err) {
          console.error("Error fetching product log:", err);
        }
      };
  
      fetchLog();
    }, [rowData.prod_id]);


    useEffect(() => {
        const fetchLog = async () => {
          try {
            const response = await axios.get(`http://localhost:5555/prodLog/logTable/${rowData.prod_id}`);
            setLogs(response.data); // Store fetched logs in state
          } catch (err) {
            console.error("Error fetching product log:", err);
          }
        };
    
        fetchLog();
      }, [rowData.prod_id]);
    
      const columns = [
        { field: "scheme_id", headerName: "Scheme #", width: 90, flex: 1 }, // You can use `flex` instead of `width`
        { field: "bonus_scheme", headerName: "Bonus Scheme", width: 110, flex: 1 },
        { field: "bonus_units", headerName: "Bonus Units", width: 110, flex: 1 },
        { field: "fp", headerName: "Factory Price", width: 120, flex: 1 },
        { field: "tp", headerName: "Trader Price", width: 110, flex: 1 },
        { field: "mrp", headerName: "Market Retail Price", width: 110, flex: 1 },
        { field: "log_status", headerName: "Log Status", width: 90, flex: 1 },
        {
          field: 'toggle_scheme',
          headerName: 'Change Scheme',
          width: 120,
          sortable: false,
          renderCell: (params) => (
            <button
              className='btn-success btn'
              onClick={() => handletoggle(params.row._id)}
            >
              <i className="fa-solid fa-repeat"></i>
            </button>
          ),
          flex: 1, // Flex for the action column as well
        },
      ];
      

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


  const handletoggle = (rowId) => {
    const selectedRow = logs.find((log) => log._id === rowId); // Find the clicked row
    if (selectedRow) {
      // setProdLog({
      //   fp: selectedRow.fp, // Set factory price
      //   tp: selectedRow.tp,
      //   mrp: selectedRow.mrp,
      //   base: selectedRow.bonus_scheme,
      //   bonus: selectedRow.bonus_units,  // Set trader price
      // });
      setProdLog((prevProdLog) => ({
        ...prevProdLog, // Keep all current values from prodLog
        fp: selectedRow.fp, // Update factory price
        tp: selectedRow.tp, // Update trader price
        mrp: selectedRow.mrp, // Update MRP
        // Ensure base and bonus remain unchanged
        base: prevProdLog.base,
        bonus: prevProdLog.bonus,
      }));
    }
  };
  



  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log("Submitted Data of Form : ", prodLog);
   try {
   
    await axios.put(`http://localhost:5555/prodLog/price/${rowData.prod_id}`, prodLog);
   
    navigate("/productLog" , { state: { snackbar:true , formData , prodLog } })
    // Navigate back to AreaTable after successful update
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
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Product Price Information</h1>
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
      className={`distributor-input ${formData.prod_id ? 'distributor-input-prefilled' : ''}`}
      autoComplete="off"
      readOnly
    />
    <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order ID.
    </div>
    <label
      className={`distributor-label ${formData.prod_id ? 'distributor-label-prefilled' : ''}`}
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
      className={`distributor-input ${formData.prod_name ? 'distributor-input-prefilled' : ''}`}
      autoComplete="off"
      readOnly
    />
    <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Product Name.
    </div>
    <label
      className={`distributor-label ${formData.prod_name ? 'distributor-label-prefilled' : ''}`}
    >
      Product Name
    </label>
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
      className={`distributor-input ${formData.prod_form_name ? 'distributor-input-prefilled' : ''}`}
      autoComplete="off"
      readOnly
    />
    <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Product Form.
    </div>
    <label
      className={`distributor-label ${formData.prod_form_name ? 'distributor-label-prefilled' : ''}`}
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
      name="base"
      value={prodLog.base}
      onChange={handleChange}
      className={`distributor-input ${formData.prod_form_name ? 'distributor-input-prefilled' : ''}`}
      autoComplete="off"
      readOnly
    />
    <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Product Form.
    </div>
    <label
      className={`distributor-label ${formData.prod_form_name ? 'distributor-label-prefilled' : ''}`}
    >
      Base Units
    </label>
  </div>
</div>



<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <i className="fa-solid fa-layer-group input-icon"></i>
    <input
      required
      type="text"
      name="bonus"
      value={prodLog.bonus}
      onChange={handleChange}
      className={`distributor-input ${formData.prod_form_name ? 'distributor-input-prefilled' : ''}`}
      autoComplete="off"
      readOnly
    />
    <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
    <div className="invalid-feedback">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Product Form.
    </div>
    <label
      className={`distributor-label ${formData.prod_form_name ? 'distributor-label-prefilled' : ''}`}
    >
      Bonus Units
    </label>
  </div>
</div>


 




  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
    <i className="fa-solid fa-industry input-icon"></i>
      <input
        required
        type="number"
        name="fp"
        value={prodLog.fp}
        
        onChange={(e) => setProdLog({ ...prodLog, fp: e.target.value })}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid DD Amount.
      </div>
      <label className="distributor-label">Factory Price</label>
    </div>
  </div>
  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
    <i className="fa-solid fa-scale-unbalanced-flip input-icon"></i>
      <input
        required
        type="number"
        name="tp"
        value={prodLog.tp}
        // onChange={handleLog}
        onChange={(e) => setProdLog({ ...prodLog, tp: e.target.value })}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid DD Amount.
      </div>
      <label className="distributor-label">Trader Price</label>
    </div>
  </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
    <i className="fa-solid fa-store input-icon"></i>
      <input
        required
        type="number"
        name="mrp"
        value={prodLog.mrp}
        // onChange={handleLog}
        onChange={(e) => setProdLog({ ...prodLog, mrp: e.target.value })}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid DD Amount.
      </div>
      <label className="distributor-label">Max Retail Price</label>
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
    <br />
    <div className="table-caption">
    <h3 className="text-center col-md-6 border form-head-text p-2">Product Log Details </h3>
    </div>
    <Paper style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={logs}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        //   checkboxSelection
          getRowId={(row) => row._id} // Specify _id as the unique identifier
          sx={{
            border: 0,
            boxShadow: 5,
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#385F98",
              color: "white",
            },
            "& .MuiDataGrid-cell": {
              border: "1px solid #dee2e6",
            },
            "& .MuiDataGrid-root": {
              fontSize: "15px",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f1f1f1",
            },
          }}
        />
      </Paper>
  </div>
 
  </div>
  );
};

export default ProductPriceEdit;

