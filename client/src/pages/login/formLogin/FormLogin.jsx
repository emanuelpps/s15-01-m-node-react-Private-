import { Link } from "react-router-dom";
function FormLogin() {
  return (
    <div id="form-login" className=" w-full">
      <form
        className="flex flex-col gap-2 justify-center items-center"
        action="#"
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <div>
            <Link to="#" className="flex justify-end text-[0.7rem]">
              Olvidé mi contrseña
            </Link>
          </div>
        </div>
        <div>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            type="submit"
          >
            Iniciar Sesion
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;
