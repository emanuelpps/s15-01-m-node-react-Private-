import { Link } from "react-router-dom";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import GoogleIcon from "../../../assets/icons/google.svg";
function FormLoginButtons() {
  return (
    <div className="flex flex-col gap-5">
      <button className="bg-gray-100 py-2 px-12 flex items-center gap-2">
        <img src={GoogleIcon} className="w-4" />
        Ingresá con Google
      </button>
      <button className="bg-gray-100 py-2 px-12 flex items-center gap-2">
        <img src={FacebookIcon} className="w-4" />
        Ingresá con Facebook
      </button>
      <p className="text-end text-sm">
        No tienes cuenta? <Link to="/register">Registrate </Link>
      </p>
    </div>
  );
}

export default FormLoginButtons;
