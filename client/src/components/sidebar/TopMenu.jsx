import PropTypes from "prop-types";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineSearch } from "react-icons/hi"; // Importa el ícono de búsqueda
import avatar1 from "../../assets/images/avatar1.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopMenu = ({ toggleSidebar }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <nav className="bg-primary-500 text-white flex justify-between items-center px-4 py-6">
      <button
        onClick={toggleSidebar}
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-1 mt-2 ms-3 text-sm text-white rounded-lg sm:hidden hover:bg-primary-600 focus:outline-none "
      >
        <span className="sr-only">Open sidebar</span>
        <AiOutlineMenu className="w-8 h-8" aria-hidden="true" />
      </button>

      <ul className="hidden md:flex space-x-12 pl-80 font-merriweather">
        <li>
          <Link to="/cortometrajes" className="text-2xl hover:text-primary-400">
            Cortometrajes
          </Link>
        </li>
        <li>
          <Link to="/peliculas" className="text-2xl hover:text-primary-400">
            Peliculas
          </Link>
        </li>
        <li>
          <Link to="/series" className="text-2xl hover:text-primary-400">
            Series
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Hinted search text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 bg-primary-500 rounded-full pl-4 pr-10 py-2"
          />
          <HiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4" />
        </div>
        <div>
          <Link to={"/upload-video"}>
            <IoCloudUploadOutline className="w-8 h-8 hidden md:block" />
          </Link>
        </div>
        <img
          src={avatar1}
          alt="Avatar"
          className="w-10 h-10 rounded-full hidden md:block"
        />
      </div>
    </nav>
  );
};

TopMenu.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default TopMenu;
