import { MdFilterList } from "react-icons/md";
import star from "../../../assets/icons/star.svg";

function Table() {
  return (
    <div id="table-container" className="text-white ml-20 ">
      <div id="table-filter" className="flex">
        <MdFilterList />
        Filtro
      </div>
      <table className="table-auto flex flex-col  overflow-x-auto scroll-container ">
        <thead>
          <tr className="flex">
            <th className="border-r-2 pr-5 w-60 pb-5">Videos</th>
            <th className="border-r-2 pr-5 w-60 pb-5">Fecha</th>
            <th className="border-r-2 pr-5 w-60 pb-5">Vistas</th>
            <th className="border-r-2 pr-5 w-60 pb-5">Calificaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex justify-center items-center w-full">
            <td className="border-r-2 border-b-2 flex justify-center items-center pr-5 w-60">
              Prueba
            </td>
            <td className="border-r-2 border-b-2 flex justify-center items-center pr-5 w-60">
              07-06-20
            </td>
            <td className="border-r-2 border-b-2 flex justify-center items-center pr-5 w-60">
              4K
            </td>
            <td className="border-r-2 border-b-2 flex justify-center items-center pr-5 w-60 gap-2">
              <img src={star} alt="star" className="w-[10px]" />
              <p>4.1</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
