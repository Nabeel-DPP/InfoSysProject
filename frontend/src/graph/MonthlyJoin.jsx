import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyJoin = () => {
  const data = {
    labels: ['Punjab', 'Sindh', 'Balochistan', 'KPK'], // Provinces
    datasets: [
      {
        label: 'New Officers Joining per Month',
        data: [120, 95, 70, 85], // Monthly data for each province
        backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'], // Colors for each bar
        borderColor: ['#0056b3', '#1e7e34', '#d39e00', '#c82333'], // Border colors for each bar
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Horizontal bar chart
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of New Officers',
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Province',
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Monthly New Officers Joining',
        font: {
          size: 18,
        },
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `New Officers: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
  
      <Bar data={data} options={options} />
    
  );
};

export default MonthlyJoin;
