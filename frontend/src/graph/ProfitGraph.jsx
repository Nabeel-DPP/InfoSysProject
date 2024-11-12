import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering ChartJS components for Polar Area chart
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const ProfitGraph = () => {
  // Profit data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Profit of the Year',
        data: [50000, 60000, 40000, 80000, 100000, 120000, 140000, 160000, 180000, 200000, 220000, 240000], // Example profit data
        backgroundColor: [
          '#FF6384', // Color for each section of the polar area
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    
    },
  };

  return <PolarArea data={data} options={options} />;
};

export default ProfitGraph;
