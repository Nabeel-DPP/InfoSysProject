// SalesGraph.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesGraph = () => {
  // Sales data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales of the Year',
        data: [1200, 1800, 1600, 2000, 2500, 2300, 2800, 2700, 3000, 3500, 3200, 3800], // Example sales data
        fill: false, // Set fill to false for a standard line graph
        backgroundColor: 'rgba(75, 192, 192, 1)', // Line color
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        tension: 0, // Remove smoothing (make it a simple line graph)
        pointRadius: 5, // Optional: you can adjust the size of the points on the line
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
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
      title: {
        display: true,
        text: 'Sales Overview (Year)',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount in PKR',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesGraph;
