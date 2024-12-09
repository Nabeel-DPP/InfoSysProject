// FinalOrder.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import FinalOrderForm from './FinalOrderForm';
import "../Table.css";

const FinalOrder = () => {
  const location = useLocation();
  const { rows } = location.state || {};
  const { totalPurchase, displayData , formData } = location.state || {};
  console.log("Display Data for Testing" , displayData);
  console.log("Form Data for Testing" , formData);
  console.log("Total Purchase for Testing" , totalPurchase);
  const filteredRows = rows.filter(row => row.base_units && row.bonus_units && row.value);
  console.log("Rows Data : " , rows);

  const columns = [
    { field: 'prod_id', headerName: 'Sr. #', width: 75 , flex:1 },
    { field: 'prod_name', headerName: 'Product Name', width: 230, flex:1 },
    { field: 'f_price', headerName: 'Price', width: 80, flex:1 },
    { field: 'scheme', headerName: 'Scheme', width: 80 , flex:1},
    { field: 'base_units', headerName: 'Base Packs', width: 100 , flex:1},
    { field: 'bonus_units', headerName: 'Bonus Packs', width: 110, flex:1 },
    { field: 'value', headerName: 'Sale Value', width: 230 , flex:1},
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
              <span className='t-purchase'>  Total Purchase: </span>
              </div>
              <div className="col-md-6">
             <span className='t-value'> {totalPurchase} </span>
              </div>
            </div>
    </div>
    </div> 

{/* This is just for testing that "formData" is reached at SelectProduct component or not : its coming !! */}
{/* <div className="">
  <h3>Order Form Data</h3>
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
</div> */}

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
     <FinalOrderForm formData={formData} rows ={filteredRows} orderValue={totalPurchase} />
     </div>
  );
};

export default FinalOrder;
