import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import "../Table.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUpModal } from '../components/Modal';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
const SelectProduct =()=> 
{ 
  const location = useLocation();
  const { displayData , formData } = location.state || {};
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editRow , setEditRow] = useState(null);
  const [totalPurchase, setTotalPurchase] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productResponse, productLogResponse, orderDetailResponse] = await Promise.all([
          axios.get("http://localhost:5555/product"),        // Fetch products
          axios.get("http://localhost:5555/prodLog"),     // Fetch product logs
          axios.get("http://localhost:5555/orderDetail"),    // Fetch order details
        ]);
  
        // Combine the data into a unified structure
        const combinedData = productResponse.data.map((product) => {
          const productLog = productLogResponse.data.find((log) => log.prod_id === product.prod_id);
          const orderDetail = orderDetailResponse.data.find((detail) => detail.product_id === product.prod_id);
  

          const baseSchemeValue = productLog?.bonus_scheme ? Math.floor(productLog.bonus_scheme / 10) : 0;
          const bonusSchemeValue = productLog?.bonus_units ? Math.floor(productLog.bonus_units / 10) : 0;
          const schemeValue = `${baseSchemeValue}+${bonusSchemeValue}`;
         

          return {
            _id: product._id,
            prod_id: product.prod_id,
            prod_name: product.prod_name,
            f_price: productLog?.fp || "N/A", // Price from product log
            scheme: schemeValue || "N/A",       // Calculated scheme
            // base_units: orderDetail?.base_units || "N/A", // Base packs from order detail
            // bonus_units: orderDetail?.bonus_units || "N/A", // Bonus packs from order detail
            // value: orderDetail?.value || "N/A", // Bonus packs from order detail
            base_units:"",
            bonus_units:"",
            value:"",

          };

        });
  
console.log(orderDetailResponse);

        setRows(combinedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from multiple sources:", error);
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  const handleEditClick = (id) => {
    const selectedRow = rows.find((row) => row._id === id);
    navigate('/productEdit', { state: { rowData: selectedRow } });
  };


const [recordToDelete, setRecordToDelete] = useState(null);
const [showModal, setShowModal] = useState(false);

const handleDeleteClick = (id) => {
  setRecordToDelete(id); // Set the record ID to delete
  setShowModal(true); // Show the modal
};

const confirmDelete = async () => {
  if (recordToDelete) {
    try {
      // Send DELETE request to the server
      await axios.delete(`http://localhost:5555/product/${recordToDelete}`); // Adjust to your delete endpoint
      // Update local state to remove the deleted record
      setRows(rows.filter((row) => row._id !== recordToDelete));
    } catch (error) {
      console.error('Error deleting the row:', error);
    } finally {
      setShowModal(false); // Hide the modal after the operation
      setRecordToDelete(null); // Clear the record ID
    }
  }
};

const cancelDelete = () => {
  setShowModal(false); // Just hide the modal
  setRecordToDelete(null); // Clear the record ID
};




const processRowUpdate = async (newRow, oldRow) => {
  try {
    // Calculate bonus_units and value dynamically based on the new base_units
    const [baseSchemeValue, bonusSchemeValue] = newRow.scheme.split("+").map(Number);
    console.log("Base :",baseSchemeValue);
    console.log("Bonus :",bonusSchemeValue);
    const bonusUnits = Math.floor((newRow.base_units/baseSchemeValue) * bonusSchemeValue ); // Example: 10% of base_units
    const saleValue = Math.floor(newRow.base_units * newRow.f_price); // Example: base_units * f_price

    const updatedRow = {
      ...newRow,
      bonus_units: bonusUnits,
      value: saleValue,
    };



    setTotalPurchase((prevTotal) => prevTotal + saleValue);
    const updatedRows = rows.map((row) => (row._id === newRow._id ? updatedRow : row));
    setRows(updatedRows);


    return updatedRow;
  } catch (error) {
    console.error("Error during row update:", error);
    return oldRow; // Revert back to the old row in case of an error
  }
};

const handleProcessRowUpdateError = (error) => {
  console.error("Error during row update:", error);
};


const columns = [
  { field: 'prod_id', headerName: 'Sr. #', width: 75 },
  { field: 'prod_name', headerName: 'Product Name', width: 230 },
  { field: 'f_price', headerName: 'Price', width: 80 },
  { field: 'scheme', headerName: 'Scheme', width: 80 },
  {
    field: 'base_units',
    headerName: 'Base Packs',
    width: 100,
    editable: true, // Allow editing
  },
  {
    field: 'bonus_units',
    headerName: 'Bonus Packs',
    width: 110,
  },
  {
    field: 'value',
    headerName: 'Sale Value',
    width: 100,
  },
  { field: 'narration', headerName: 'Narration', width: 100 },
  {
    field: 'action',
    headerName: 'Actions',
    width: 80,
    sortable: false,
    renderCell: (params) => (
      <>
        <button
          size="small"
          onClick={() => handleEditClick(params.row._id)}
        >
          <i className="tableIcons edit-btn fa-solid fa-pencil"></i>
        </button>
        <button
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          size="small"
          onClick={() => handleDeleteClick(params.row._id)}
          style={{ marginLeft: 10 }}
        >
          <i className="tableIcons delete-btn fa-solid fa-trash"></i>
        </button>
      </>
    ),
  },
];




  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  const handleProceedToLastStep = () => {
    navigate('/finalOrder', { state: { rows ,displayData , totalPurchase } });
  };

  return (
    
    <div className='mx-5'>

<div className="add-btn d-flex w-100 mb-5 justify-content-end">
    <Link to="/productInsert" className='btn  btn-outline-success' > <i className="fa-regular fa-pen-to-square"></i></Link>
   
    
    </div>

    <div className="stateInfoContainer mt-5 mb-5">
     {/* <h1 className="text-center mb-4">Select Product</h1> */}
      {displayData ? (
        <div className="card shadow-sm">
          <div className="state-card-header  ">
            <span>Order Summary</span>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Distributor Name:</strong>
              </div>
              <div className="col-md-6">
                {displayData.distributorName}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Sale Area Name:</strong>
              </div>
              <div className="col-md-6">
                {displayData.saleAreaName}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Sale Type:</strong>
              </div>
              <div className="col-md-6">
                {displayData.saleTypeName}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Sale Month:</strong>
              </div>
              <div className="col-md-6">
                {displayData.saleMonthName}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Total Purchase:</strong>
              </div>
              <div className="col-md-6">
              {totalPurchase}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center">
          <strong>No data available.</strong>
        </div>
      )}


  


{formData ? (
        <div className="card shadow-sm mt-5">
          <div className="state-card-header  ">
            <span>Order Form Submitted Data</span>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Order ID :</strong>
              </div>
              <div className="col-md-6">
                {formData.OrderId}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Area ID:</strong>
              </div>
              <div className="col-md-6">
                {formData.tblAreaId}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Distributor ID:</strong>
              </div>
              <div className="col-md-6">
                {formData.tblDistId}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Sub Area ID:</strong>
              </div>
              <div className="col-md-6">
                {formData.subAreaId}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Institute ID:</strong>
              </div>
              <div className="col-md-6">
              {formData.instiId}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Discount %:</strong>
              </div>
              <div className="col-md-6">
              {formData.extra}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center">
          <strong>No data available.</strong>
        </div>
      )}



    </div>
    <div className="table-caption">
    <h3 className="text-center col-md-6 border form-head-text p-2">Product List</h3>
    </div>

   



    <Paper style={{ height: 700, width: '100%' }}>
   
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
        getRowId={(row) => row._id}// Specify _id as the unique identifier
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        initialState={{
          sorting: {
            sortModel: [{ field: 'prod_id', sort: 'asc' }], // Default sorting by 'value' in descending order
          },
        }}
        
        sx={{
            border: 0,
            boxShadow:5, // Remove default border
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#385F98',
              color: "white",
              // Bootstrap table header color
            },
            '& .MuiDataGrid-cell': {
              border: '1px solid #dee2e6', // Bootstrap table cell border
            },
            '& .MuiDataGrid-root': {
              fontSize: '15px' // Adjust text size
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#f1f1f1', // Hover effect like Bootstrap's 'table-hover'
            },
          }}
      />
    </Paper>
    {showModal && (
        <PopUpModal onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}

<div className="container w-100 mt-5">
        <button
          onClick={handleProceedToLastStep}
          className='btn btn-success mt-5'
        >
          Proceed to Last Step
        </button>
      </div>
    </div>
  );
}

export default SelectProduct;