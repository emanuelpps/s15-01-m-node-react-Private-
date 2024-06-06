import { useState } from "react";
import ChangePassword from "./ChangePassword";
import Edit from "./Edit";
import PersonalInformation from "./PersonalInformation";

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("edit"); // Estado para controlar la sección activa

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-6 bg-primary-500 text-white md:pl-[20rem]">
      <PersonalInformation setActiveSection={setActiveSection} />

      {activeSection === "edit" && <Edit />}
      {activeSection === "changePassword" && <ChangePassword />}

      {/* acá agregamos las secciones idioma y cambiar plan cuando esten listas */}
    </div>
  );
};

export default UserProfile;
