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

const RevenueGraph = () => {
  // Revenue data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Revenue of the Year',
            data: [150000, 160000, 140000, 180000, 200000, 210000, 220000, 240000, 250000, 270000, 280000, 300000], // Example revenue data
            fill: true, // Set fill to true to create an area chart
            backgroundColor: 'rgba(144, 238, 144, 0.3)', // Light Green area color (with some transparency)
            borderColor: 'rgba(144, 238, 144, 1)', // Light Green line color
            borderWidth: 1, // Line border width
            tension: 0.4, // Slight curve in the line for smoother appearance
            pointRadius: 5, // Optional: adjust the size of the points on the line
            pointBackgroundColor: 'rgba(144, 238, 144, 1)', // Light Green point color
          }
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
        text: 'Yearly Revenue Overview (Area Chart)',
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
          text: 'Amount in USD',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default RevenueGraph;
