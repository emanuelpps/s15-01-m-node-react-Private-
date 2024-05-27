import { Link } from "react-router-dom";
import FacebookButton from "../components/FacebookButton";
import GoogleButton from "../components/GoogleButton";

function RegisterButtons() {
  return (
    <div className="flex flex-col gap-5">
      <FacebookButton label="Registrate con" />
      <GoogleButton label="Registrate con" />
      <p className="text-center text-sm">
        Ya tienes una cuenta? <Link to="/login">Iniciar Sesion</Link>
      </p>
    </div>
  );
}

export default RegisterButtons;
