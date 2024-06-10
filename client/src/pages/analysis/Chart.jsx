import PropTypes from "prop-types";

const Chart = ({ data }) => {
  const isIncreasing = data[data.length - 1].value > data[0].value;
  const arrowPosition =
    ((data[data.length - 1].value - data[0].value) / 8000) * 100;

  return (
    <div className="w-full max-w-screen-md mx-auto bg-[rgba(255,255,255,0.08)] text-white mt-10 rounded-md p-6 border-2 border-white">
      <div className="text-start text-xl font-bold mb-4">Resumen</div>
      <div className="relative">
        <div className="flex justify-between">
          <div className="w-full mb-10">
            <div className="border-t-2 mb-4 border-white/50">8000</div>
            <div className="border-t-2 mb-4 border-white/50">6000</div>
            <div className="border-t-2 mb-4 border-white/50">4000</div>
            <div className="border-t-2 mb-4 border-white/50">2000</div>
            <div className="border-t-2 mb-4 border-white/50">0</div>
            <div className="border-t-2 border-white/50"></div>
          </div>
          <div className="flex flex-grow items-end">
            {data.map((entry, index) => (
              <div key={index} className="flex-grow">
                <div
                  className="w-full bg-green-500"
                  style={{ height: `${(entry.value / 8000) * 100}%` }}
                ></div>
              </div>
            ))}
            <div
              className={`absolute left-0 bottom-0 w-full h-0 border-4 border-transparent border-l-4 ${
                isIncreasing ? "border-green-500" : "border-red-500"
              }`}
              style={{ bottom: `${arrowPosition}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          {data.map((entry, index) => (
            <div key={index} className="w-1/7 text-xs text-center">
              {entry.date}
            </div>
          ))}
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
