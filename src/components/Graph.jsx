import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Graph = () => {
  const [series, setSeries] = useState([
    {
      data: [80, 150, 100, 80, 120, 50, 60, 90],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 250,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        distributed: false,
        borderRadius: 10,
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        {
          image:
            'https://images.unsplash.com/photo-1552320853-b14fa736e4c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'User 2',
          image:
            'https://images.unsplash.com/photo-1552320853-b14fa736e4c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'User 3',
          image:
            'https://images.unsplash.com/photo-1552320853-b14fa736e4c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'User 4',
          image:
            'https://images.unsplash.com/photo-1552320853-b14fa736e4c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'User 5',
          image:
            'https://images.unsplash.com/photo-1552320853-b14fa736e4c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'User 6',
          image:
            'https://images.unsplash.com/photo-1552320853-b14fa736e4c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'User 7',
          image:
            'https://images.unsplash.com/photo-1552320853-b14fa736e4c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'User 8',
          image:
            'https://images.unsplash.com/photo-1552320853-b14fa736e4c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.25,
        gradientToColors: ['#FF2800'],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 90, 100],
      },
    },
    markers: {
      size: 8,
      colors: ['#FF2800'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 10,
      },
    },
    stroke: {
      show: false,
      width: 4,
      colors: ['#FF2800'],
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
    annotations: {
      yaxis: series[0].data.map(value => ({
        y: value,
        marker: {
          size: 6,
          fillColor: '#FF280066',
          strokeColor: '#fff',
          strokeWidth: 2,
          shape: 'circle',
          shadow: {
            enabled: false,
            top: 3,
            left: 0,
            blur: 5,
            color: '#FF280066',
            opacity: 0.1,
          },
        },
      })),
    },
  });

  return (
    <div className='rounded-2xl border-[#F5F5F5] border bg-white w-[654px] h-[398px] p-6'>
      <div className='flex justify-between items-center mb-4'>
        <p className='text-xl font-semibold'>Top Wins Users</p>
        <p className='flex items-center text-gray-500'>
          Month <img className='ml-2' src='/down.svg' alt='Month Dropdown' />
        </p>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type='bar'
        height={250}
      />
      <div className='flex justify-around me-1 w-[90%] mx-auto'>
        {options.xaxis.categories.map((cat, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img
              src={cat.image}
              alt={cat.name}
              className='w-10 h-10 rounded-full'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;
