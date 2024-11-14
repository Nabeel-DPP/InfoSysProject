import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import "../Table.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUpModal } from '../components/Modal';
import { format } from 'date-fns'; // Make sure to install date-fns

export default function ProductLog() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editRow , setEditRow] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get("http://localhost:5555/prodLog");
        setRows(response.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the Product Log data: ", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchAreas();
  }, []);

  const handleEditClick = (id) => {
    const selectedRow = rows.find((row) => row._id === id);
    navigate('/pdLogEdit', { state: { rowData: selectedRow } });
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
      await axios.delete(`http://localhost:5555/productLog/${recordToDelete}`); // Adjust to your delete endpoint
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
  { 
    field: 'prod_log_id', 
    headerName: 'Product Log ID', 
    width: 150 
  }, 
  { 
      field: 'prod_id', 
      headerName: 'Product ID', 
      width: 150 
    },
    { 
      field: 'scheme_id', 
      headerName: 'Scheme ID', 
      width: 150 
    },
    { 
      field: 'bonus_scheme', 
      headerName: 'Bonus Scheme', 
      width: 150 
    },
    { 
      field: 'bonus_units', 
      headerName: 'Bonus Units', 
      width: 150 
    },
    { 
      field: 'fp', 
      headerName: 'FP', 
      width: 130 
    },
    { 
      field: 'entry_date', 
      headerName: 'Entry Date', 
      width: 180, 
      renderCell: (params) =>
        params.row.entry_date ? format(new Date(params.row.entry_date), 'dd/MM/yyyy') : '',
    },
    { 
      field: 'remarks', 
      headerName: 'Remarks', 
      width: 180 
    },
    { 
      field: 'type', 
      headerName: 'Type', 
      width: 130 
    },
    { 
      field: 'bonus_status', 
      headerName: 'Bonus Status', 
      width: 150 
    },
    { 
      field: 'tp', 
      headerName: 'TP', 
      width: 150 
    },
    { 
      field: 'mrp', 
      headerName: 'MRP', 
      width: 130 
    },
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







  return (
    
    <div className='mx-5'>

<div className="add-btn d-flex w-100 mb-5 justify-content-end">
    <Link to="/pdLoginInsert" className='btn  btn-outline-success' > <i className="fa-regular fa-pen-to-square"></i></Link>
   
    
    </div>
    <div className="table-caption">
    <h3 className="text-center col-md-6 border form-head-text p-2">Product Log List</h3>
    </div>

    <Paper style={{height: 700, width: '100%'  }}>
   
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
