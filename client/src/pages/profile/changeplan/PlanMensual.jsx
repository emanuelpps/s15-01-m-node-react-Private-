import { MdCheckCircle } from "react-icons/md";

const PlanMensual = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-2">Suscripción mensual</h4>
      <hr className="my-4 border-gray-300" />
      <p className="text-2xl font-bold mb-2">
        $0 <span className="text-base font-normal">/Mes</span>
      </p>
      <ul className="space-y-2">
        <li className="flex items-center justify-center">
          <MdCheckCircle className="w-5 h-5 text-primary-800" />
          <span className="ml-2 text-primary-800">
            Transmisión en alta calidad
          </span>
        </li>
        <li className="flex items-center justify-center">
          <MdCheckCircle className="w-5 h-5 text-primary-800" />
          <span className="ml-2 text-primary-800">
            Reproducción en varios dispositivos
          </span>
        </li>
        <li className="flex items-center justify-center">
          <MdCheckCircle className="w-5 h-5 text-primary-800" />
          <span className="ml-2 text-primary-800">
            30 descargas para disfrutar offline
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PlanMensual;
