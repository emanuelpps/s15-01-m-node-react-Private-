import { MdFilterList } from "react-icons/md";
import star from "../../../assets/icons/star.svg";
import { useState } from "react";

function Table() {
  const [filterType] = useState(["Fecha", "Visitas", "Puntuacion"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterSelected, setFilterSelected] = useState("");

  const filterHandler = (filter) => {
    setFilterSelected(filter);
    setIsDropdownOpen(false);
  };

  return (
    <div id="table-container" className="text-white ml-20 ">
      <div></div>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        id="table-filter"
        className="h-10 flex ml-80 md:ml-0 justify-center items-center gap-2 bg-[#FFFFFF0D] p-[10px] rounded-[10px] relative"
      >
        <MdFilterList />
        {filterSelected || "Filtro"}
      </button>
      {isDropdownOpen && (
        <div className="flex flex-col w-[100px] absolute z-50 left-22 bg-[#233b53] rounded-[10px]">
          {filterType.map((filter) => (
            <div
              key={filter}
              onClick={() => filterHandler(filter)}
              className="flex justify-start gap-2 hover:bg-[#233b53] p-1 cursor-pointer"
            >
              {filter}
            </div>
          ))}
        </div>
      )}
      <table className="table-auto flex flex-col overflow-x-auto scroll-container">
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
