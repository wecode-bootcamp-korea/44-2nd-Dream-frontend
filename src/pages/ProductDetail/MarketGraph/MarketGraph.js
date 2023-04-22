import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import useFetch from '../../../hooks/useFetch';

const MarketGraph = ({ graphData, setGraphData }) => {
  useEffect(() => {
    fetch(`/data/graphData${graphData}.json`)
      .then(response => response.json())
      .then(result => setGraphData(result));
  }, [graphData]);

  // const [graphData] = useFetch('http://10.58.52.75:3000/bid/graph/1');

  const data = {
    labels: graphData.label,
    datasets: [
      {
        label: 'Going Price',
        data: graphData.data,
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
