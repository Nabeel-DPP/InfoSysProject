import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'distName', headerName: 'Distributor Name', width: 130 },
  { field: 'saleArea', headerName: 'Sale Area', width: 130 },
  {
    field: 'email',
    headerName: 'Email ID',
    type: 'string',
    width: 90,
  },
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




//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
];

const rows = [
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
  ];

  

const paginationModel = { page: 0, pageSize: 5 };

export default function Table() {
  return (
    <div className="container   mt-5">
    <Paper sx={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
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