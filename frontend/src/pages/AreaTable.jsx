import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import "../Table.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUpModal } from '../components/Modal';
import { format } from 'date-fns';
export default function AreaTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editRow , setEditRow] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get("http://localhost:5555/area");
        setRows(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the areas data: ", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchAreas();
  }, []);

  const handleEditClick = (id) => {
    const selectedRow = rows.find((row) => row._id === id);
    navigate('/areaEdit', { state: { rowData: selectedRow } });
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
      await axios.delete(`http://localhost:5555/area/${recordToDelete}`); // Adjust to your delete endpoint
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
    { field: 'AreaId', headerName: 'Area ID', width: 130 },
    { field: 'AreaName', headerName: 'Area Name', width: 150 },
    { field: 'Manager', headerName: 'Manager', width: 150 },
    { field: 'E_Mail', headerName: 'Email ID', width: 180 },
    { field: 'ZoneId', headerName: 'Zone ID', width: 130 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
      field: 'arr_date',
      headerName: 'Date',
      width: 150,
      renderCell: (params) =>
        params.row.arr_date ? format(new Date(params.row.arr_date), 'dd/MM/yyyy') : '',
    },
    { field: 'lead_days', headerName: 'Lead Days', width: 130 },
    { field: 'Manager_nick', headerName: 'Manager Nickname', width: 150 },
    { field: 'area_manager', headerName: 'Area Manager', width: 150 },
    { field: 'area_manager_email', headerName: 'Area Manager Email', width: 180 },
    { field: 'area_manager_phone', headerName: 'Area Manager Phone', width: 150 },
    { field: 'manager_phone', headerName: 'Manager Phone', width: 150 },
    { field: 'FixPay', headerName: 'Fixed Pay', width: 130 },
    { field: 'type', headerName: 'Type', width: 130 },
    { field: 'province', headerName: 'Province', width: 130 },
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
    <Link to="/areaForm" className='btn  btn-outline-success' > <i className="fa-regular fa-pen-to-square"></i></Link>
   
    
    </div>
    <div className="table-caption">
    <h3 className="text-center col-md-6 border form-head-text p-2">Area List</h3>
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
