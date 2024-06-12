import PropTypes from "prop-types";
import { useState } from "react";
import Select from "react-select";
import Buttons from "../../../components/Buttons";
import PlanFree from "./PlanFree";
import PlanMensual from "./PlanMensual";

const ChangePlan = ({ setActiveSection }) => {
  const [plan, setPlan] = useState({ value: "Gratis", label: "Gratis" });
  // const [active, setActive] = useState("personalInformation");

  const handlePlanChange = (selectedOption) => {
    setPlan(selectedOption);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background:
        "linear-gradient(135deg, rgba(75, 107, 139, 1), rgba(44, 62, 80, 1))",
      color: "white",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      background:
        "linear-gradient(135deg, rgba(75, 107, 139, 1), rgba(44, 62, 80, 1))",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isFocused ? "rgba(75, 107, 139, 0.8)" : "transparent",
      color: "white",
    }),
  };

  const options = [
    { value: "Gratis", label: "Gratis" },
    { value: "Mensual", label: "Mensual" },
    { value: "Anual", label: "Anual" },
  ];

  // Condición para renderizar el componente correspondiente al plan seleccionado
  const renderPlanComponent = () => {
    if (plan.value === "Mensual") {
      return <PlanMensual />;
    } else {
      return <PlanFree />;
    }
  };

  return (
    <div className="p-2 mx-auto flex flex-col pt-14 px-4 pb-6 rounded-lg text-center text-primary-800 font-merriweather">
      <h3 className="text-lg font-semibold mb-2 text-white text-start">
        Prueba gratis
      </h3>

      {/* Renderiza componente correspondiente */}
      {renderPlanComponent()}

      <div className="mt-6 text-left">
        <h3 className="text-sm font-semibold text-white">Administra tu Plan</h3>
        <label className="block mt-4 mb-4">
          <span className="text-sm text-white">Planes</span>
          <Select
            value={plan}
            onChange={handlePlanChange}
            options={options}
            styles={customStyles}
          />
        </label>
      </div>

      <Buttons
        onClick={() => setActiveSection("personalInformation")}
        variant="primary"
        type="submit"
        className="w-full rounded-lg mt-4"
        fullWidth
      >
        Continuar
      </Buttons>
    </div>
  );
};
ChangePlan.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};

export default ChangePlan;
