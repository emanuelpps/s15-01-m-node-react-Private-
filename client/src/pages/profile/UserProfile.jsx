import { useEffect, useState } from "react";
import ChangePassword from "./ChangePassword";
import Edit from "./Edit";
import PersonalInformation from "./PersonalInformation";
import ChangePlan from "./changeplan/ChangePlan";

import { IoIosArrowBack } from "react-icons/io";

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("edit");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBackClick = () => {
    setActiveSection("personalInformation");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-6 bg-primary-500 text-white md:pl-[20rem]">
      {(isMobile && activeSection === "personalInformation") || !isMobile ? (
        <PersonalInformation setActiveSection={setActiveSection} />
      ) : null}

      {!isMobile || activeSection !== "personalInformation" ? (
        <div className="flex flex-col w-auto">
          {isMobile && (
            <button className="text-left mb-4" onClick={handleBackClick}>
              <IoIosArrowBack className="w-6 h-6" />
            </button>
          )}
          {activeSection === "edit" && <Edit />}
          {activeSection === "changePassword" && <ChangePassword />}
          {activeSection === "changePlan" && <ChangePlan />}
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;
