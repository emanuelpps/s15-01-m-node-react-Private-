import PropTypes from "prop-types";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";

const PersonalInformation = ({ setActiveSection, userData }) => {
  return (
    <div className="w-full md:w-2/4 p-10">
      <div
        className="mb-6 p-4 rounded-lg"
        style={{
          backgroundColor: "rgba(44, 62, 80, 1)",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))",
        }}
      >
        <h2 className="text-sm md:text-[16px] font-semibold font-merriweather pb-2">
          Información Personal
        </h2>
        <ul className="mt-4 space-y-2 font-vollkorn text-lg">
          {/* Editar Perfil */}
          <li className="pb-1">
            <div className="flex items-center hover:text-primary-400 group">
              <IoPerson className="mr-2 w-6 h-6 text-white transition duration-75 group-hover:text-primary-400" />
              <button
                className="w-full text-left p-3 bg-transparent border-b border-white/30 flex items-center"
                onClick={() => setActiveSection("edit")}
              >
                <span className="flex-grow">Editar perfil</span>
                <IoIosArrowForward className="w-6 h-6" />
              </button>
            </div>
          </li>

          {/* Cambiar contraseña */}
          <li className="pb-1">
            <div className="flex items-center hover:text-primary-400 group">
              <MdOutlinePassword className="mr-2 w-6 h-6 text-white transition duration-75 group-hover:text-primary-400" />
              <button
                className="w-full text-left p-3 bg-transparent border-b border-white/30 flex items-center"
                onClick={() => setActiveSection("changePassword")}
              >
                <span className="flex-grow">Cambiar contraseña</span>
                <IoIosArrowForward className="w-6 h-6" />
              </button>
            </div>
          </li>

          {/* Cambiar plan */}
          <li className="pb-1">
            <div className="flex items-center hover:text-primary-400 group">
              <RiVipCrownFill className="mr-2 w-6 h-6 text-white transition duration-75 group-hover:text-primary-400" />
              <button
                className="w-full text-left p-3 bg-transparent border-b border-white/30 flex items-center"
                onClick={() => setActiveSection("changePlan")}
              >
                <span className="flex-grow">Cambiar Plan</span>
                <IoIosArrowForward className="w-6 h-6" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <img
          src={userData?.avatar || "../../assets/images/avatar1.png"} //probando avatars
          alt="Avatar"
          className="rounded-full w-24 h-24 mx-auto mb-4"
        />
        <p className="text-lg font-semibold">{userData?.email}</p>
      </div>
    </div>
  );
};

PersonalInformation.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
  userData: PropTypes.object,
};

export default PersonalInformation;
