import Chart from "./Chart";
import VideoCard from "./VideoCard";

const Analysis = () => {
  const dates = [
    "06/05/2024 - 07/05/2024",
    "En los últimos 7 días",
    "En los últimos 28 días",
    "En los últimos 90 días",
    "En los últimos 365 días",
    "Personalizado",
  ];
  const data = [
    { date: "20 mayo", value: 1000 },
    { date: "25 mayo", value: 1500 },
    { date: "30 mayo", value: 3000 },
    { date: "04 junio", value: 4000 },
    { date: "09 junio", value: 5000 },
    { date: "14 junio", value: 4000 },
    { date: "19 junio", value: 7000 },
  ];

  return (
    <div className="bg-primary-500 md:pl-[17rem]">
      <div className="mr-[5rem]">
        <span className="flex justify-end mr-[220px] mb-2 text-white">
          Fecha
        </span>
        <span className="flex justify-end">
          <select className="text-white bg-primary-500 border-2 border-white rounded-md p-2 pr-10 inline-block">
            {dates.map((date, index) => (
              <option key={index} value={date} className="background-conic">
                {date}
              </option>
            ))}
          </select>
        </span>
      </div>

      <div className="mt-8 scroll-container flex md:flex-row space-x-2 md:space-x-4 px-2 md:px-12 md:space-y-0 overflow-x-auto">
        <div className="flex-1 flex flex-col bg-white p-4 pr-40 rounded-md">
          <span className="font-semibold">Vistas</span>
          <span className="text-2xl font-semibold">0</span>
        </div>
        <div className="flex-1 flex flex-col bg-white p-4 pr-40 rounded-md">
          <span className="font-semibold">Videos destacados</span>
          <span className="text-2xl font-semibold">0</span>
        </div>
        <div className="flex-1 flex flex-col bg-white p-4 pr-40 rounded-md">
          <span className="font-semibold">Calificaciones</span>
          <span className="text-2xl font-semibold">0</span>
        </div>
      </div>

      <div className="px-4 md:px-12">
        <div className="flex flex-col md:flex-row py-1">
          <Chart data={data} />
        </div>
        <div className="flex flex-col md:flex-row md:mt-10">
          <VideoCard title="Videos destacados" />
          <VideoCard title="Principales dispositivos" />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
