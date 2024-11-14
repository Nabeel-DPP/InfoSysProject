// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// // Register necessary Chart.js components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const MonthlySaleGraph = () => {
//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Month names or any other x-axis labels
//     datasets: [
//       {
//         label: 'Monthly Sales Revenue',
//         data: [4000, 7000, 8500, 4000, 12000, 18000, 14000], // Your actual sales data
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         tension: 0.4, // Smoothness of the curve
//         pointBackgroundColor: 'rgb(75, 192, 192)', // Color of spikes (data points)
//         pointBorderColor: '#fff',
//         pointBorderWidth: 2,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return `$${tooltipItem.raw.toLocaleString()}`; // Formatting tooltip labels with currency
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Months',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Revenue ($)',
//         },
//         ticks: {
//           callback: function (value) {
//             return `$${value.toLocaleString()}`; // Formatting y-axis ticks as currency
//           },
//         },
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };

// export default MonthlySaleGraph;



import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const MonthlySaleGraph = () => {
  const data = {
    labels: ['Punjab', 'Sindh', 'Balochistan', 'KPK',], // Provinces
    datasets: [
      {
        label: 'Sales Revenue by Province',
        data: [35000, 30000, 15000, 10000], // Sales data for each province
        backgroundColor: [
          '#FF5733', '#04C7E0', '#FFBF00', '#28A745', , // Colors for each slice
        ],
        borderColor: '#fff', // Border color of each slice
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Revenue',
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const totalSales = tooltipItem.dataset.data.reduce((a, b) => a + b, 0); // Total sales revenue
            const percentage = ((tooltipItem.raw / totalSales) * 100).toFixed(2); // Calculate percentage
            return `${tooltipItem.label}: $${tooltipItem.raw.toLocaleString()} (${percentage}%)`; // Display value with percentage
          },
        },
      },
      legend: {
        position: 'top', // Position of the legend (top, bottom, left, right)
        labels: {
          font: {
            size: 14, // Font size for the legend
          },
        },
      },
    },
  };


  return (
    
      <Pie data={data} options={options} />

  );
};

export default MonthlySaleGraph;
