import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import "./Table.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUpModal } from './components/Modal';
import { format } from 'date-fns';
export default function DistTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editRow , setEditRow] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get("http://localhost:5555/distributor");
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
    navigate('/distEdit', { state: { rowData: selectedRow } });
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
      await axios.delete(`http://localhost:5555/distributor/${recordToDelete}`); // Adjust to your delete endpoint
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
    { field: 'DistId', headerName: 'Distributor ID', width: 130 },
    { field: 'distName', headerName: 'Distributor Name', width: 150 },
    { field: 'areaID', headerName: 'Area ID', width: 150 },
    { field: 'zoneID', headerName: 'Zone ID', width: 180 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'address', headerName: 'Address', width: 120 },
    { field: 'balance', headerName: 'Balance', width: 120 },
    { field: 'closingBalance', headerName: 'Closing Balance', width: 120 },
    { field: 'distType', headerName: 'Distributor Type', width: 120 },
    { field: 'ssrType', headerName: 'SSR Type', width: 120 },
    { field: 'factorCode', headerName: 'Factory Code', width: 120 },
    // { field: 'arrDate', headerName: 'Date', width: 120 },
    {
      field: 'arrDate',
      headerName: 'Date',
      width: 150,
      renderCell: (params) =>
        params.row.arrDate ? format(new Date(params.row.arrDate), 'dd/MM/yyyy') : '',
    },
    { field: 'emailId', headerName: 'Email ID', width: 120 },
    { field: 'phone1', headerName: 'Phone 1', width: 120 },
    { field: 'phone2', headerName: 'Phone 2 ', width: 120 },
    { field: 'ntn', headerName: 'NTN', width: 120 },
    { field: 'LockDays', headerName: 'Lock Days', width: 120 },
    { field: 'cnic', headerName: 'CNIC', width: 120 },
    
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
    <Link to="/DistInsert" className='btn  btn-outline-success' > <i class="fa-regular fa-pen-to-square"></i></Link>
   
    
    </div>

    <div className="table-caption">
    <h3 className="text-center col-md-6 border form-head-text p-2">Distributor's List List</h3>
    </div>
    <Paper style={{ height: 700, width: '100%' , }}>
   
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
