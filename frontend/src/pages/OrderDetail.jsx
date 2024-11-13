import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import "../Table.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUpModal } from '../components/Modal';
import { format } from 'date-fns';

// ...

export default function OrderDetailTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editRow , setEditRow] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get("http://localhost:5555/orderDetail");
        setRows(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the Order Details data: ", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchAreas();
  }, []);

  const handleEditClick = (id) => {
    const selectedRow = rows.find((row) => row._id === id);
    navigate('/orderDetailEdit', { state: { rowData: selectedRow } });
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
      await axios.delete(`http://localhost:5555/orderDetail/${recordToDelete}`); // Adjust to your delete endpoint
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




  const columns = [
    // { field: '_id', headerName: 'ID', width: 90 },
    { field: 'orderDetailID', headerName: 'Order Detail ID', width: 130 },
    { field: 'order_id', headerName: 'Order ID', width: 180 },
    { field: 'product_id', headerName: 'Product ID', width: 150 },
    { field: 'base_units', headerName: 'Base Units', width: 150 },
    { field: 'cash_price', headerName: 'Cash Price', width: 150 },
    { field: 'bonus_units', headerName: 'Bonus Units', width: 150 },
    { field: 'value', headerName: 'Value', width: 130 },
    { field: 'comments', headerName: 'Comments', width: 130 },
    { field: 'prd_remarks', headerName: 'PRD Remarks', width: 100 },
    { field: 'dispatch_status', headerName: 'Dispatch Status ', width: 200 },
    { field: 'sch', headerName: 'SCH', width: 130 },
    { field: 'pack_on_sch', headerName: 'Pack on Sch', width: 120 },
    {
      field: 'dispatch_date',
      headerName: 'Dispatch Date',
      width: 150,
      renderCell: (params) =>
        params.row.dispatch_date ? format(new Date(params.row.dispatch_date), 'dd/MM/yyyy') : '',
    },
    { field: 'type', headerName: 'Order Type', width: 100 } ,
    { field: 'trade_price', headerName: 'Trade Price ', width: 100 },
    { field: 'product_scheme', headerName: 'Product Scheme', width: 150 },
    // { field: 'units_convert_date', headerName: 'Units Convert Date', width: 150 },
    {
      field: 'units_convert_date',
      headerName: 'Units Convert Date',
      width: 150,
      renderCell: (params) =>
        params.row.units_convert_date ? format(new Date(params.row.units_convert_date), 'dd/MM/yyyy') : '',
    },
  
    { field: 'old_units', headerName: 'Old Units', width: 150 },
    { field: 'old_bonus', headerName: 'Old Bonus', width: 150 },
    { field: 'old_price', headerName: 'Old Price', width: 150 },
    { field: 'old_value', headerName: 'Old Value', width: 130 },
    { field: 'svn', headerName: 'SVN', width: 130 },
    { field: 'inv_notes', headerName: 'Invoice Notes', width: 130 },

    {
        field: 'action',
        headerName: 'Actions',
        width: 150,
        sortable: false,
        renderCell: (params) => (
          <>
            <button
             
              size="small"
              onClick={() => handleEditClick(params.row._id)}
            >
             <i class="tableIcons edit-btn fa-solid fa-pencil"></i>
            </button>
            <button
              data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
              size="small"
              onClick={() => handleDeleteClick(params.row._id)}
              style={{ marginLeft: 10 }}
            >
             <i class="tableIcons delete-btn fa-solid fa-trash"></i>
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







  return (
    
    <div className='mx-5'>

<div className="add-btn d-flex w-100 mb-5 justify-content-end">
    <Link to="/orderDetailInsert" className='btn  btn-outline-success' > <i class="fa-regular fa-pen-to-square"></i></Link>
   
    
    </div>
    <div className="table-caption">
    <h3 className="text-center col-md-6 border form-head-text p-2">Order Detail List</h3>
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
    </div>
  );
}
