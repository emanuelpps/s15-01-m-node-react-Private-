import { Link, useNavigate } from "react-router-dom";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import Buttons from "../../../components/Buttons";
import { useState } from "react";
import useUserStore from "../../../store/useUserStore";

function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password); // Llamada a login
    const { currentUser } = useUserStore.getState(); // Obtener el estado actual del usuario
    console.log("Current user after login:", currentUser);
    if (currentUser) {
      navigate("/profile");
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div id="form-login" className="">
      <form
        className="flex flex-col gap-2 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col">
          <label className="text-shadow-title text-[#ffff]">
            Correo electrónico
          </label>
          <input
            className="shadow bg-transparent appearance-none border rounded md:w-[400px] py-2 px-2 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label className="text-shadow-title text-[#ffff]">Contraseña</label>
          <div className="shadow bg-transparent appearance-none border rounded md:w-[400px] py-2 px-2 text-white leading-tight focus:outline-none focus:shadow-outline flex justify-between items-center">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="*********"
              className="bg-transparent appearance-none border-none w-full text-white leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <HiOutlineEye
                className="text-[#ffff] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <HiOutlineEyeOff
                className="text-[#ffff] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
        <div>
          <Link to="/home">
            <Buttons variant="primary" type="submit">
              Iniciar Sesión
            </Buttons>
          </Link>
        </div>
      </form>
      <div className="flex justify-center mt-8">
        <p className="mr-2 text-[#ffff]">No tienes cuenta?</p>
        <Link className="text-[#ffff]" to="/register">
          Registrate
        </Link>
      </div>
    </div>
  );
}

export default FormLogin;
