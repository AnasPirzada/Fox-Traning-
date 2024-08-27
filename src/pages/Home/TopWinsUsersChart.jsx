
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

// Register the necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const TopWinsUsersChart = () => {
  const data = {
    labels: ['k', '', '', 'L', '', '', 'P', '', '', 'H', ''],
    datasets: [
      {
        label: 'Wins',
        data: [200, 150, 80, 120, 60, 100, 50, 75, 30, 110, 90],
        backgroundColor: '#FF280066',
      
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: '#E5E7EB',
        },
        ticks: {
          stepSize: 50,
        },
        beginAtZero: true,
        max: 300,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Top Wins Users</h2>
      <div className="relative" style={{ height: '300px' }}>
        <Bar data={data} options={options} />
        <div className="absolute inset-x-0 bottom-0 flex justify-between items-center px-3 -mb-8">
          {['k', 'user2', 'user3', 'L', 'user5', 'user6', 'P', 'user8', 'user9', 'H', 'user11'].map((user, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={`/Ellipse 12 (3).svg/${user}.png`} // Replace with your image paths
                alt={user}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <span className="mt-1 text-xs font-semibold">{user}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopWinsUsersChart;
