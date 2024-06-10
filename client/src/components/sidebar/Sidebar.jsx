import { useEffect, useRef, useState } from "react";
import { MdOutlineHome, MdOutlineAnalytics } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuPlaySquare } from "react-icons/lu";
import TopMenu from "./TopMenu";
import { useLocation } from "react-router-dom";

import avatar1 from "../../assets/images/avatar1.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const renderSidebarContent = () => {
    if (location.pathname === "/analisis") {
      return (
        <>
          <a href="/" className="flex items-center ps-2.5 mb-16">
            <span className="font-vollkorn self-center text-[32px] font-semibold whitespace-nowrap text-white">
              Indie Zone
            </span>
          </a>
          <div className="flex flex-col items-center mb-10">
            <div className="relative w-16 h-16 mb-2">
              <img
                src={avatar1}
                alt="avatar"
                className="w-full h-full rounded-full"
              />
            </div>
            <span className="text-white text-base">Tu canal</span>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 rounded-xl text-white hover:text-primary-400 group"
              >
                <LuPlaySquare
                  className="w-6 h-6 text-white transition duration-75 group-hover:text-primary-400"
                  aria-hidden="true"
                />
                <span className="font-merriweather ms-3 text-xl">
                  Contenido
                </span>
              </a>
            </li>

            <li>
              <a
                href="/analisis"
                className="flex items-center p-2 rounded-xl text-white hover:text-primary-400 group"
              >
                <MdOutlineAnalytics
                  className="w-6 h-6 text-white transition duration-75 group-hover:text-primary-400"
                  aria-hidden="true"
                />
                <span className="font-merriweather flex-1 ms-3 whitespace-nowrap text-xl">
                  Análisis
                </span>
              </a>
            </li>

            <li>
              <a
                href="/profile"
                className="flex items-center p-2 rounded-xl text-white hover:text-primary-400 group"
              >
                <BsCurrencyDollar
                  className="w-6 h-6 text-white transition duration-75 group-hover:text-primary-400"
                  aria-hidden="true"
                />
                <span className="font-merriweather flex-1 ms-3 whitespace-nowrap text-xl">
                  Ingresos
                </span>
              </a>
            </li>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <a href="/" className="flex items-center ps-2.5 mb-16">
            <span className="font-vollkorn self-center text-[32px] font-semibold whitespace-nowrap text-white">
              Indie Zone
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 rounded-xl text-white hover:text-primary-400 group"
              >
                <MdOutlineHome
                  className="w-6 h-6 text-white transition duration-75 group-hover:text-primary-400"
                  aria-hidden="true"
                />
                <span className="font-merriweather ms-3 text-xl">Inicio</span>
              </a>
            </li>

            <li>
              <a
                href="/analisis"
                className="flex items-center p-2 rounded-xl text-white hover:text-primary-400 group"
              >
                <MdOutlineAnalytics
                  className="w-6 h-6 text-white transition duration-75 group-hover:text-primary-400"
                  aria-hidden="true"
                />
                <span className="font-merriweather flex-1 ms-3 whitespace-nowrap text-xl">
                  Análisis
                </span>
              </a>
            </li>

            <li>
              <a
                href="/profile"
                className="flex items-center p-2 rounded-xl text-white hover:text-primary-400 group"
              >
                <IoPerson
                  className="w-6 h-6 text-white transition duration-75 group-hover:text-primary-400"
                  aria-hidden="true"
                />
                <span className="font-merriweather flex-1 ms-3 whitespace-nowrap text-xl">
                  Perfil
                </span>
              </a>
            </li>
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <TopMenu toggleSidebar={toggleSidebar} />
      <div
        ref={sidebarRef}
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-6 py-8 overflow-y-auto bg-primary-500 rounded-r-lg border-r-2 border-white/25">
          {renderSidebarContent()}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
