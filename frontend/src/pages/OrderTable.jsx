import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import "../Table.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUpModal } from '../components/Modal';
import { format } from 'date-fns';
export default function OrderTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editRow , setEditRow] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get("http://localhost:5555/order");
        setRows(response.data);
        console.log(response.data[917]);
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
    navigate('/orderEdit', { state: { rowData: selectedRow } });
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
      await axios.delete(`http://localhost:5555/order/${recordToDelete}`); // Adjust to your delete endpoint
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
    { field: 'OrderId', headerName: 'Order ID', width: 130 },
  { field: 'tblDistId', headerName: 'Distributor ID', width: 180 },
  { field: 'tblAreaId', headerName: 'Area ID', width: 150 },
  { field: 'instiId', headerName: 'Institute ID', width: 150 },
  { field: 'subAreaId', headerName: 'Sub Area ID', width: 150 },
  {
    field: 'FeedDate',
    headerName: 'Feed Date',
    width: 150,
    renderCell: (params) =>
      params.row.FeedDate ? format(new Date(params.row.FeedDate), 'dd/MM/yyyy') : '',
  },
  { field: 'dd_amount', headerName: 'DD Amount', width: 130 },
  { field: 'order_value', headerName: 'Order Value', width: 130 },
  { field: 'Period', headerName: 'Period', width: 100 },
  { field: 'instructions', headerName: 'Instructions', width: 200 },
  { field: 'ddNumber', headerName: 'DD Number', width: 130 },
  { field: 'orderType', headerName: 'Order Type', width: 120 },
  { field: 'status', headerName: 'Status', width: 100 },
  {
    field: 'forward_date',
    headerName: 'Forward Date',
    width: 150,
    renderCell: (params) =>
      params.row.forward_date ? format(new Date(params.row.forward_date), 'dd/MM/yyyy') : '',
  },
  {
    field: 'confirm_date',
    headerName: 'Confirm Date',
    width: 150,
    renderCell: (params) =>
      params.row.confirm_date ? format(new Date(params.row.confirm_date), 'dd/MM/yyyy') : '',
  },
  {
    field: 'invoice_date',
    headerName: 'Invoice Date',
    width: 150,
    renderCell: (params) =>
      params.row.invoice_date ? format(new Date(params.row.invoice_date), 'dd/MM/yyyy') : '',
  },
  {
    field: 'cancel_date',
    headerName: 'Cancel Date',
    width: 150,
    renderCell: (params) =>
      params.row.cancel_date ? format(new Date(params.row.cancel_date), 'dd/MM/yyyy') : '',
  },
  {
    field: 'restore_date',
    headerName: 'Restore Date',
    width: 150,
    renderCell: (params) =>
      params.row.restore_date ? format(new Date(params.row.restore_date), 'dd/MM/yyyy') : '',
  },
  { field: 'crem', headerName: 'Crem', width: 130 },
  { field: 'userId', headerName: 'User ID', width: 130 },
  { field: 'userIp', headerName: 'User IP', width: 130 },
  { field: 'invoiceNo', headerName: 'Invoice Number', width: 150 },
  {
    field: 'invoiceDate',
    headerName: 'Invoice Date',
    width: 150,
    renderCell: (params) =>
      params.row.invoiceDate ? format(new Date(params.row.invoiceDate), 'dd/MM/yyyy') : '',
  },
  { field: 'truckNo', headerName: 'Truck Number', width: 130 },
  { field: 'siv', headerName: 'SIV', width: 130 },
  { field: 'dispatch_mode', headerName: 'Dispatch Mode', width: 150 },
  { field: 'edit_by', headerName: 'Edited By', width: 150 },
  { field: 'confirm_by', headerName: 'Confirmed By', width: 150 },
  { field: 'forward_by', headerName: 'Forwarded By', width: 150 },
  { field: 'edit_status', headerName: 'Edit Status', width: 130 },
  { field: 'discount', headerName: 'Discount', width: 130 },
  { field: 'stockist', headerName: 'Stockist', width: 130 },
  { field: 'perage', headerName: 'Perage', width: 130 },
  {
    field: 'disp_date',
    headerName: 'Dispatch Date',
    width: 150,
    renderCell: (params) =>
      params.row.disp_date ? format(new Date(params.row.disp_date), 'dd/MM/yyyy') : '',
  },
  { field: 'Return_stock', headerName: 'Return Stock', width: 150 },
  { field: 'stock_aginst_orderNo', headerName: 'Stock Against Order No', width: 150 },
  { field: 'purchase_against_type', headerName: 'Purchase Against Type', width: 150 },
  {
    field: 'edit_date',
    headerName: 'Edit Date',
    width: 150,
    renderCell: (params) =>
      params.row.edit_date ? format(new Date(params.row.edit_date), 'dd/MM/yyyy') : '',
  },
  {
    field: 'prvs_frwd_date',
    headerName: 'Previous Forward Date',
    width: 150,
    renderCell: (params) =>
      params.row.prvs_frwd_date ? format(new Date(params.row.prvs_frwd_date), 'dd/MM/yyyy') : '',
  },
  { field: 'dd_banks', headerName: 'DD Banks', width: 130 },
  {
    field: 'payment_max_date',
    headerName: 'Payment Max Date',
    width: 150,
    renderCell: (params) =>
      params.row.payment_max_date ? format(new Date(params.row.payment_max_date), 'dd/MM/yyyy') : '',
  },
  { field: 'AdvTax', headerName: 'Advance Tax', width: 130 },
  { field: 'validatePayment', headerName: 'Validate Payment', width: 130 },
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
    <Link to="/orderInsert" className='btn  btn-outline-success' > <i className="fa-regular fa-pen-to-square"></i></Link>
   
    
    </div>
    <div className="table-caption">
    <h3 className="text-center col-md-6 border form-head-text p-2">Orders List</h3>
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
