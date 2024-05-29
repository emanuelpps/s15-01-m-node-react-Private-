import { Link } from "react-router-dom";

function RegisterButtons() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-center text-sm">
        Ya tienes una cuenta? <Link to="/login">Iniciar Sesion</Link>
      </p>
    </div>
  );
}

export default RegisterButtons;
