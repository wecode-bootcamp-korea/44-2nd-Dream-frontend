import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
<<<<<<< HEAD
import useFetch from '../../../hooks/useFetch';
import { api } from '../../../api';
=======
// import useFetch from '../../../hooks/useFetch';
import { api } from '../../../api';
import { useEffect } from 'react';
import { useState } from 'react';
>>>>>>> 3bd74b0 (수정사항 반영중)

const MarketGraph = ({ paramsId, graphChange }) => {
  const [graphData, setGraphData] = useState({});
  // const [graphData] = useFetch(`${api.graph}${paramsId}${graphChange}`);

  useEffect(() => {
    fetch(`${api.graph}${paramsId}${graphChange}`)
      .then(response => response.json())
      .then(result => setGraphData(result));
  }, [graphChange]);

  const data = {
    labels: graphData.date,
    datasets: [
      {
        label: 'Going Price',
        data: graphData.bidPrice,
        fill: false,
        borderColor: 'rgb(247 180 174)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: true,
        title: {
          display: true,
        },
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          autoSkip: true,
          maxTicksLimit: 6,
        },
        position: 'right',
      },
      x: {
        display: false,
        title: {
          display: true,
        },
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default MarketGraph;
