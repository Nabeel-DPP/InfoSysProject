// FinalOrder.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import FinalOrderForm from './FinalOrderForm';

const FinalOrder = () => {
  const location = useLocation();
  const { rows } = location.state || {};
  const { totalPurchase, displayData } = location.state || {};
  const filteredRows = rows.filter(row => row.base_units && row.bonus_units && row.value);
  console.log("Rows Data : " , rows);

  const columns = [
    { field: 'prod_id', headerName: 'Sr. #', width: 75 },
    { field: 'prod_name', headerName: 'Product Name', width: 230 },
    { field: 'f_price', headerName: 'Price', width: 80 },
    { field: 'scheme', headerName: 'Scheme', width: 80 },
    { field: 'base_units', headerName: 'Base Packs', width: 100 },
    { field: 'bonus_units', headerName: 'Bonus Packs', width: 110 },
    { field: 'value', headerName: 'Sale Value', width: 230 },
    // { field: 'narration', headerName: 'Narration', width: 100 },
  ];

  return (
    <div>
    <div className='mx-5'>

{/* Display State Info */}
<div className="card shadow-sm mb-5 mt-5">
  <div className="state-card-header">
    <span>Order Summary</span>
  </div>
  <div className="card-body">
    <div className="row mb-3">
      <div className="col-md-6">
        <strong>Distributor Name:</strong>
      </div>
      <div className="col-md-6">{displayData.distributorName}</div>
    </div>
    <div className="row mb-3">
      <div className="col-md-6">
        <strong>Sale Area Name:</strong>
      </div>
      <div className="col-md-6">{displayData.saleAreaName}</div>
    </div>
    <div className="row mb-3">
      <div className="col-md-6">
        <strong>Sale Type:</strong>
      </div>
      <div className="col-md-6">{displayData.saleTypeName}</div>
    </div>
    <div className="row mb-3">
      <div className="col-md-6">
        <strong>Sale Month:</strong>
      </div>
      <div className="col-md-6">{displayData.saleMonthName}</div>
    </div>
    <div className="row mb-3">
      <div className="col-md-6">
        <strong>Total Purchase:</strong>
      </div>
      <div className="col-md-6">{totalPurchase}</div>
    </div>
    </div>
    </div> 




      <div className="table-caption">
        <h3 className="text-center col-md-6 border form-head-text p-2">Final Order</h3>
      </div>
      <Paper style={{ width: '100%' }}>
        <DataGrid
         rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          checkboxSelection
          getRowId={(row) => row._id}
          initialState={{
            sorting: {
              sortModel: [{ field: 'prod_id', sort: 'asc' }],
            },
          }}
          sx={{
            border: 0,
            boxShadow: 5,
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#385F98',
              color: 'white',
            },
            '& .MuiDataGrid-cell': {
              border: '1px solid #dee2e6',
            },
            '& .MuiDataGrid-root': {
              fontSize: '15px',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#f1f1f1',
            },
          }}
        />
      </Paper>

     
    </div>
     <FinalOrderForm/>
     </div>
  );
};

export default FinalOrder;
