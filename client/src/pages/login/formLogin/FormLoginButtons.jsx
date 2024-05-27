import { Link } from "react-router-dom";
import FacebookButton from "../components/FacebookButton";
import GoogleButton from "../components/GoogleButton";
function FormLoginButtons() {
  return (
    <div className="flex flex-col gap-5">
      <FacebookButton label="Ingresá" />
      <GoogleButton label="Ingresá" />
      <p className="text-end text-sm">
        No tienes cuenta? <Link to="/register">Registrate </Link>
      </p>
    </div>
  );
}

export default FormLoginButtons;
