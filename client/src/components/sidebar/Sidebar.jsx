import { useEffect, useRef, useState } from "react";
import { MdOutlineHome, MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import TopMenu from "./TopMenu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

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
          <a href="/" className="flex items-center ps-2.5 mb-16">
            <span className="self-center text-[32px] font-semibold whitespace-nowrap text-white">
              Indie Zone
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 rounded-xl text-white hover:bg-primary-600 group"
              >
                <MdOutlineHome
                  className="w-6 h-6 text-white transition duration-75  group-hover:text-primary-400"
                  aria-hidden="true"
                />
                <span className="ms-3 text-2xl">Inicio</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center p-2 rounded-xl text-white hover:bg-primary-600 group"
              >
                <MdOutlineAnalytics
                  className="w-6 h-6 text-white transition duration-75  group-hover:text-primary-400"
                  aria-hidden="true"
                />
                <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                  Análisis
                </span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center p-2 rounded-xl text-white hover:bg-primary-600 group"
              >
                <IoSettingsOutline
                  className="w-6 h-6 text-white transition duration-75  group-hover:text-primary-400"
                  aria-hidden="true"
                />
                <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                  Configuración
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
