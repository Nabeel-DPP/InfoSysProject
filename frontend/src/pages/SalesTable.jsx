import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Button, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SalesTable.css';

const data = [
  { id: 1, product: 'AMRAX 10MG', unit: 134, amount: 24541, soldPercentage: 35.28, progress: 70 },
  { id: 2, product: 'TORAX BRONCO', unit: 119, amount: 20225, soldPercentage: 27.05, progress: 55 },
  { id: 3, product: 'KALASTRAN 50MG', unit: 101, amount: 17290, soldPercentage: 20.25, progress: 45 },
  { id: 4, product: 'MEXAIR SYP', unit: 59, amount: 1150, soldPercentage: 12.50, progress: 25 },
  { id: 5, product: 'LUMEZA 20MG', unit: 25, amount: 790, soldPercentage: 2.10, progress: 10 },
  ];

const columns = [
  { name: 'Product Name', selector: row => row.product, sortable: true },
  { name: 'Unit', selector: row => row.unit, sortable: true },
  { name: 'Amount', selector: row => `$${row.amount.toLocaleString()}`, sortable: true },
  { name: '% Sold', selector: row => `${row.soldPercentage}%`, sortable: true },
  {
    name: 'Progress',
    cell: row => (
      <ProgressBar now={row.progress} label={`${row.progress}%`} className="progress-md rounded-0" />
    ),
  },
];

const SalesTable = () => {
  const [filterText, setFilterText] = useState('');

  const filteredData = data.filter(item => 
    item.product.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2>Sales by Product</h2>
          <Button variant="primary" className="btn-pill" data-toggle="modal" data-target="#modal-stock">
            Add Stock
          </Button>
        </div>
        <div className="card-body">
          <input
            type="text"
            placeholder="Filter by Product Name"
            className="form-control mb-3"
            value={filterText}
            onChange={e => setFilterText(e.target.value)}
          />
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            striped
            responsive
            className="table-product"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesTable;
