// FinalOrder.js
import React, { useEffect,useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import FinalOrderForm from './FinalOrderForm';
import "../Table.css";

const FinalOrder = () => {
 
  const location = useLocation();
 const navigate = useNavigate();
  // const { rows } = location.state || {};
  const {rows, totalPurchase, displayData , formData } = location.state || {};
  formData.order_value = totalPurchase;
  // console.log("Display Data for Testing" , displayData);
  // console.log("Form Data for Testing" , formData);
  // console.log("Total Purchase for Testing" , totalPurchase);
  // console.log("Rows are Received : " , rows);
  const filteredRows = rows.filter(row => row.base_units && row.value);
  const [latestOrderDetailId, setLatestOrderDetailId] = useState(null);
  const [orderDetailId, setOrderDetailId] = useState(null);

  useEffect(() => {
    const fetchLatestOrderId = async () => {
      try {
        const response = await axios.get("http://localhost:5555/orderDetail/latest");
        const newOrderDetailId = response.data.latestOrderDetailId;
        // console.log("Fetched Latest Order ID:", newOrderDetailId);

        // Update FormData with the new OrderId
        setLatestOrderDetailId(newOrderDetailId);
        await setOrderDetailId(newOrderDetailId);
        // console.log("Lattest Order ID is : " , newOrderDetailId);
      } catch (error) {
        console.error("Error fetching latest OrderId:", error);
      }
    };

    fetchLatestOrderId();
  }, []);

  // console.log("Rows Data : " , rows);
  // console.log("These are the Selected Products Data : " , filteredRows);

//This is the Date that is coming back from the FinalOrderForm 
  const [submittedOrderData, setSubmittedOrderData] = useState([]);

  const handlePlaceOrder = async () => {
    try {
      // Order API call
      const orderBankPayLoad = 
      {
        formData: formData,
        bankData: submittedOrderData
      }  
      await  axios.post("http://localhost:5555/order/placeOrder", orderBankPayLoad);
    //  await  axios.post("http://localhost:5555/order/placeOrder", formData);
     const order_id =formData.OrderId;
    //  console.log("This is my Order ID : ",order_id);
    //  console.log("This is orderDetail ID : " ,orderDetailId);
     filteredRows.forEach(row => {
      delete row._id;
    }); 
     const orderPayload = 
    {
      orderId: order_id,
      selectedProducts: filteredRows ,
      orderDetailID : orderDetailId
    }  
    
    // await  axios.post("http://localhost:5555/orderDetail/placeOrder", orderPayload);
  alert('Order placed successfully');
  // navigate("/orderDetail");
    } catch (error) {
      console.error('Error placing order:', error);
    }
  // console.log("Payment Details Data : " , submittedOrderData);
  };
 
  
  const handleOrderSubmit = (data) => {
    console.log('Data received from FinalOrderForm:', data);
    setSubmittedOrderData(data);
    // Perform any additional operations if necessary
  };

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
<div className="">
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
                <strong>Feed Date :</strong>
              </div>
              <div className="col-md-6">
                {formData.FeedDate}
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
    <button className='btn btn-info mt-5 mx-5' onClick={handlePlaceOrder}>Place Order</button>
     <FinalOrderForm 
     formData={formData} rows ={filteredRows} orderValue={totalPurchase}
     onOrderSubmit={handleOrderSubmit} 
     />
     </div>
  );
};

export default FinalOrder;
