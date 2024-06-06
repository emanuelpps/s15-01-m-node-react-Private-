import { useState } from "react";
import ChangePassword from "./ChangePassword";
import Edit from "./Edit";
import PersonalInformation from "./PersonalInformation";
import ChangePlan from "./changeplan/ChangePlan";

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("edit"); // Estado para controlar la sección activa

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-6 bg-primary-500 text-white md:pl-[20rem]">
      <PersonalInformation setActiveSection={setActiveSection} />

      {activeSection === "edit" && <Edit />}
      {activeSection === "changePassword" && <ChangePassword />}
      {activeSection === "changePlan" && <ChangePlan />}
    </div>
  );
};

export default UserProfile;
