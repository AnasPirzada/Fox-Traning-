import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Graph = () => {
  const [series, setSeries] = useState([
    {
      data: [200, 150, 100, 80, 120, 50, 60, 90],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
        borderRadius: 2.82,
        endingShape: 'flat',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        {
          image: 'https://via.placeholder.com/40x40.png?text=U1',
        },
        {
          image: 'https://via.placeholder.com/40x40.png?text=U2',
        },
        {
          image: 'https://via.placeholder.com/40x40.png?text=U3',
        },
        {
          image: 'https://via.placeholder.com/40x40.png?text=U4',
        },
        {
          image: 'https://via.placeholder.com/40x40.png?text=U5',
        },
        {
          image: 'https://via.placeholder.com/40x40.png?text=U6',
        },
        {
          image: 'https://via.placeholder.com/40x40.png?text=U7',
        },
        {
          image: 'https://via.placeholder.com/40x40.png?text=U8',
        },
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#8e8da4',
          fontSize: '12px',
        },
      },
    },
    fill: {
      colors: ['rgba(255, 40, 0, 0.4)'],
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent'],
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const name = w.globals.labels[dataPointIndex].name;
        const image = w.globals.labels[dataPointIndex].image;
        return `<div style="padding:10px;text-align:center;">
                  <img src="${image}" alt="${name}" style="width: 50px; height: 50px; border-radius: 50%;"/><br/>
                  <span style="font-size: 14px;">${name}</span><br/>
                  <span style="font-size: 14px;">Wins: ${series[seriesIndex][dataPointIndex]}</span>
                </div>`;
      },
    },
    markers: {
      size: 6,
      colors: ['rgba(255, 40, 0, 1)'],
      strokeColors: 'rgba(255, 255, 255, 1)',
      strokeWidth: 1.88,
      hover: {
        size: 8,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: '50%',
        dataLabels: {
          position: 'top', // Place data labels on top of bars
        },
      },
    },
    annotations: {
      yaxis: series[0].data.map((value, index) => ({
        y: value,
        marker: {
          size: 7,
          fillColor: 'rgba(255, 40, 0, 1)',
          strokeColor: 'rgba(255, 255, 255, 1)',
          strokeWidth: 1.88,
          shape: 'circle',
          shadow: {
            enabled: true,
            top: 6.58,
            left: 0,
            blur: 7.52,
            color: 'rgba(74, 58, 255, 0.13)',
            opacity: 1,
          },
        },
      })),
    },
  });

  return (
    <div className='rounded-[40px] border-[#F5F5F5] border-1 bg-[#FFFFFF] w-[654px] h-[398px] p-4'>
      <div className='flex justify-between items-center mb-4'>
        <p className='text-xl font-semibold'>Top Wins Users</p>
        <p className='flex justify-center items-center text-gray-500'>
          Month <img className='ml-2' src='/down.svg' alt='Month Dropdown' />
        </p>
      </div>
      <div id='chart'>
        <ReactApexChart
          options={options}
          series={series}
          type='bar'
          height={250}
        />
      </div>
      <div className='flex justify-around mt-4'>
        {options.xaxis.categories.map((cat, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img
              src={cat.image}
              alt={cat.name}
              className='w-10 h-10 rounded-full'
            />
            <p className='text-sm mt-2'>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;
