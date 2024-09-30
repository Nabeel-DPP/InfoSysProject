import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import "./Table.css";
import { TableForm } from './TableForm';
import { useNavigate , useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { PopUpModal } from './components/Modal';
export default function Table() {

  const location = useLocation();
 
  const { formData } = location.state || {};

  console.log("Object Reached at the Table : " , formData);
 

 const navigate = useNavigate();

  const [editRow , setEditRow] = useState(null);
   
  const [rows,setRows] =useState([
    { id: 1, distName: 'Distributor A', saleArea: 'Area 1', email: 'a@example.com', distSince: '2015', status: 'Active', ssr: true, adTax: 10 },
    { id: 2, distName: 'Distributor B', saleArea: 'Area 2', email: 'b@example.com', distSince: '2018', status: 'Inactive', ssr: false, adTax: 5 },
    { id: 3, distName: 'Distributor C', saleArea: 'Area 3', email: 'c@example.com', distSince: '2020', status: 'Active', ssr: true, adTax: 8 },
    { id: 4, distName: 'Distributor D', saleArea: 'Area 4', email: 'd@example.com', distSince: '2012', status: 'Active', ssr: true, adTax: 7 },
    { id: 5, distName: 'Distributor E', saleArea: 'Area 5', email: 'e@example.com', distSince: '2016', status: 'Inactive', ssr: false, adTax: 4 },
    { id: 6, distName: 'Distributor F', saleArea: 'Area 6', email: 'f@example.com', distSince: '2019', status: 'Active', ssr: true, adTax: 6 },
    { id: 7, distName: 'Distributor G', saleArea: 'Area 7', email: 'g@example.com', distSince: '2014', status: 'Active', ssr: false, adTax: 5 },
    { id: 8, distName: 'Distributor H', saleArea: 'Area 8', email: 'h@example.com', distSince: '2011', status: 'Inactive', ssr: true, adTax: 9 },
    { id: 9, distName: 'Distributor I', saleArea: 'Area 9', email: 'i@example.com', distSince: '2021', status: 'Active', ssr: true, adTax: 7 },
    { id: 10, distName: 'Distributor J', saleArea: 'Area 10', email: 'j@example.com', distSince: '2017', status: 'Inactive', ssr: false, adTax: 8 },
    { id: 11, distName: 'Distributor K', saleArea: 'Area 11', email: 'k@example.com', distSince: '2013', status: 'Active', ssr: true, adTax: 12 },
    { id: 12, distName: 'Distributor L', saleArea: 'Area 12', email: 'l@example.com', distSince: '2019', status: 'Inactive', ssr: false, adTax: 6 },
    { id: 13, distName: 'Distributor M', saleArea: 'Area 13', email: 'm@example.com', distSince: '2010', status: 'Active', ssr: true, adTax: 9 },
    { id: 14, distName: 'Distributor N', saleArea: 'Area 14', email: 'n@example.com', distSince: '2022', status: 'Inactive', ssr: false, adTax: 5 },
    { id: 15, distName: 'Distributor O', saleArea: 'Area 15', email: 'o@example.com', distSince: '2021', status: 'Active', ssr: true, adTax: 10 },
    { id: 16, distName: 'Distributor P', saleArea: 'Area 16', email: 'p@example.com', distSince: '2015', status: 'Inactive', ssr: true, adTax: 7 },
    { id: 17, distName: 'Distributor Q', saleArea: 'Area 17', email: 'q@example.com', distSince: '2013', status: 'Active', ssr: false, adTax: 11 },
    { id: 18, distName: 'Distributor R', saleArea: 'Area 18', email: 'r@example.com', distSince: '2018', status: 'Active', ssr: true, adTax: 6 },
    { id: 19, distName: 'Distributor S', saleArea: 'Area 19', email: 's@example.com', distSince: '2017', status: 'Inactive', ssr: true, adTax: 9 },
    { id: 20, distName: 'Distributor T', saleArea: 'Area 20', email: 't@example.com', distSince: '2020', status: 'Active', ssr: false, adTax: 8 },
    { id: 21, distName: 'Distributor U', saleArea: 'Area 21', email: 'u@example.com', distSince: '2012', status: 'Inactive', ssr: true, adTax: 5 },
    { id: 22, distName: 'Distributor V', saleArea: 'Area 22', email: 'v@example.com', distSince: '2023', status: 'Active', ssr: true, adTax: 10 },
    { id: 23, distName: 'Distributor W', saleArea: 'Area 23', email: 'w@example.com', distSince: '2016', status: 'Active', ssr: false, adTax: 12 },
    { id: 24, distName: 'Distributor X', saleArea: 'Area 24', email: 'x@example.com', distSince: '2014', status: 'Inactive', ssr: true, adTax: 7 },
    { id: 25, distName: 'Distributor Y', saleArea: 'Area 25', email: 'y@example.com', distSince: '2021', status: 'Active', ssr: false, adTax: 9 },
    { id: 26, distName: 'Distributor Z', saleArea: 'Area 26', email: 'z@example.com', distSince: '2011', status: 'Active', ssr: true, adTax: 6 },
    { id: 27, distName: 'Distributor AA', saleArea: 'Area 27', email: 'aa@example.com', distSince: '2020', status: 'Inactive', ssr: false, adTax: 8 },
    { id: 28, distName: 'Distributor BB', saleArea: 'Area 28', email: 'bb@example.com', distSince: '2019', status: 'Active', ssr: true, adTax: 5 },
    { id: 29, distName: 'Distributor CC', saleArea: 'Area 29', email: 'cc@example.com', distSince: '2013', status: 'Inactive', ssr: false, adTax: 7 },
    { id: 30, distName: 'Distributor DD', saleArea: 'Area 30', email: 'dd@example.com', distSince: '2015', status: 'Active', ssr: true, adTax: 9 },
  ]);
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'distName', headerName: 'Distributor Name', width: 130 },
    { field: 'saleArea', headerName: 'Sale Area', width: 130 },
    { field: 'email', headerName: 'Email ID', type: 'string', width: 130,},
    {
      field: 'distSince',
      headerName: 'Distributor Since',
      type: 'string',
      width: 90,
    },
  
    {
      field: 'status',
      headerName: 'Status',
      type: 'string',
      width: 90,
    },
    {
      field: 'ssr',
      headerName: 'SSR',
      type: 'boolean',
      width: 90,
    },
    {
      field: 'adTax',
      headerName: 'Adv Tax',
      type: 'number',
      width: 90,
    },
    {
      field: 'login',
      headerName: 'Create Login',
      sortable:false,
      width: 100,
      renderCell: (params) => (
        <div className="text-center">
        <button variant="contained" color="primary">
          <i  class="tableIcons login-btn fa-solid fa-user-plus"></i>
        </button>
        </div>
      ),
    },
    // Add Actions column with Delete and Create buttons
    {
      field: 'action',
      headerName: 'Actions',
      width: 120,
      sortable:false,
      renderCell: (params) => (
        <div className='d-flex justify-content-around'>
          
          <button
            variant="contained"
            color="success"
            size="small"
            onClick={() => handleCreate(params.row)}
          >
           <i class="tableIcons edit-btn fa-solid fa-pencil"></i>
          </button>
          
          
          <button
 data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
            variant="outlined"
            color="error"
            size="small"
            style={{ marginRight: 8 }}
            onClick={() => handleDelete(params.row)}
          >
           <i class="tableIcons  delete-btn fa-solid fa-trash"></i>
          </button>
          
        </div>
      ),
    },
  
  
  
  
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  //   },
  ];
 
  useEffect(() => {
    if (formData) {
      // Use formData as it is, assuming it already contains an id
      console.log(rows);
      const newRow = { ...formData };
    
      // Append the new row to the existing rows
      setRows(  (prevRows) => [...prevRows, newRow]);

  
      console.log("New row added: ", newRow);
    
    }
  }, [formData]);


  useEffect(() => {
    console.log("The Updated Value of Complete Rows Array is : ", rows);
  }, [rows]);

  useEffect(() => {
    if (editRow) {
      console.log("The updated value of editRow is", editRow);
    }
  }, [editRow]);

  

 












    const handleDelete = (row) => {
      console.log('Deleted Row',row);
      
      // navigate("/tableForm");
      // Add your delete logic here
    };
    
    const handleCreate =  (row) => {
      console.log('Edit Row', row);
     setEditRow(row);
     navigate("/tableForm", { state: { row } });
     
      // Add your create logic here
    };
   
   
    
    
  
  const paginationModel = { page: 0, pageSize: 15 };







  


  return (
    <div className="container   mt-5">
     <div className="add-btn d-flex w-100 mb-5 justify-content-end">
    <Link to="/createForm" className='btn  btn-outline-success' > <i class="fa-regular fa-pen-to-square"></i></Link>
    <PopUpModal/>
    
    </div>
    <div className="table-caption">
    <h3 className="text-center col-md-3 border form-head-text p-2">Distributors List</h3>
    </div>
    <Paper sx={{ height: "500", width: '100%' }}>
 
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[15, 20,30]}
        checkboxSelection
    
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
    

   
  
    </div>
  );
}