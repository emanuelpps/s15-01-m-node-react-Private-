import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data }) => {
  const dates = data.map((entry) => entry.date);
  const values = data.map((entry) => entry.value);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "Resumen",
        data: values,
        fill: false,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 8000,
        ticks: {
          stepSize: 2000,
        },
      },
    },
  };

  const isIncreasing = values[values.length - 1] > values[0];
  const arrowPosition = ((values[values.length - 1] - values[0]) / 8000) * 100;

  return (
    <div className="w-full max-w-screen-md mx-auto bg-[rgba(255,255,255,0.08)] text-white mt-10 rounded-md p-6 border-2 border-white">
      <div className="text-start text-xl font-bold mb-4">Resumen</div>
      <div className="relative">
        <Line data={chartData} options={options} />
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 ${
            isIncreasing ? "text-green-500" : "text-red-500"
          }`}
          style={{ top: `${100 - arrowPosition}%` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isIncreasing ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V2"
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Chart;
