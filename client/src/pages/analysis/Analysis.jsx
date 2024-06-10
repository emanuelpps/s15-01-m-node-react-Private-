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
    { date: "20 mayo", value: 2000 },
    { date: "25 mayo", value: 6000 },
    { date: "30 mayo", value: 3000 },
    { date: "04 junio", value: 2000 },
    { date: "09 junio", value: 5000 },
    { date: "14 junio", value: 6000 },
    { date: "19 junio", value: 2000 },
    // Agrega más datos si es necesario
  ];

  return (
    <div className="bg-primary-500 md:pl-[17rem]">
      <span className="flex justify-end mr-[270px] mb-2 text-white">Fecha</span>
      <span className="flex justify-end mr-12">
        <select className="text-white bg-primary-500 border-2 border-white rounded-md p-2 pr-10 inline-block">
          {dates.map((date, index) => (
            <option key={index} value={date} className="background-conic">
              {date}
            </option>
          ))}
        </select>
      </span>

      <div className="mt-8 flex flex-col md:flex-row md:space-x-4 px-12 space-y-4 md:space-y-0">
        <div className="flex-1 flex flex-col bg-white p-4 rounded-md">
          <span className="font-semibold">Vistas</span>
          <span className="text-2xl font-semibold">0</span>
        </div>
        <div className="flex-1 flex flex-col bg-white p-4 rounded-md">
          <span className="font-semibold">Videos destacados</span>
          <span className="text-2xl font-semibold">0</span>
        </div>
        <div className="flex-1 flex flex-col bg-white p-4 rounded-md">
          <span className="font-semibold">Calificaciones</span>
          <span className="text-2xl font-semibold">0</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-4 py-2 px-6 md:px-12">
        <Chart data={data} />
      </div>
      <div className="flex flex-col md:flex-row mt-10 md:px-12">
        <VideoCard title="Videos destacados" />
        <VideoCard title="Principales dispositivos" />
      </div>
    </div>
  );
};

export default Analysis;
