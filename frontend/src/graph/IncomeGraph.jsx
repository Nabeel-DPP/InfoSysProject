
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Card, CardContent, Typography } from '@mui/material';
import 'chart.js/auto';

const IncomeGraph = () => {
  // Data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Expenses',
        data: [65000, 59000, 80000, 81000, 56000, 55000,65000, 59000, 80000, 81000, 56000, 55000,],
        backgroundColor: 'rgba(65, 105, 225, 0.3)', // Royal Blue area color (with some transparency)
  borderColor: '#4169E1', // Royal Blue line color
        borderWidth: 1,
      },
      {
        label: 'Income',
        data: [28000, 48000, 40000, 19000, 86000, 27000,28000, 48000, 40000, 19000, 86000, 27000],
        backgroundColor: 'rgba(144, 238, 144, 0.3)', // Light Green area color (with some transparency)
        borderColor: 'rgba(144, 238, 144, 1)',
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
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: 'Income and Expenses Over Time',
        font: {
          size: 18,
          weight: 'bold',
          family: 'Roboto, sans-serif',
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10000,
        },
        grid: {
          borderColor: '#ddd',
          borderWidth: 1,
        },
      },
    },
  };

  return (
    <Box sx={{marginTop:2 , marginBottom:2}}>
      <Card
        sx={{
          borderRadius: 1,
          boxShadow: 3,
          overflow: 'hidden',
          backgroundColor: '#fff',
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
            Income vs Expenses
          </Typography>
          <Box sx={{ height: 300 }}>
            <Bar data={data} options={options} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IncomeGraph;




















