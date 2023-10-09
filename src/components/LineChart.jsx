/* eslint-disable react/prop-types */
import {
  CategoryScale,
  Chart,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the scales
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < (coinHistory?.data?.history?.length || 0); i += 1) {
    coinPrice.push(coinHistory?.data?.history[i]?.price);
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i]?.timestamp).toLocaleDateString("en-US", {
        dateStyle: "short",
      })
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#16c784",
        borderColor: "#16c784",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <div className='mb-10 flex items-center justify-between'>
        <h3 className='text-2xl font-semibold text-paraText'>Price Chart</h3>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
