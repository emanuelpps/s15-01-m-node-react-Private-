import FormLogin from "./FormLogin";
import FormLoginButtons from "./FormLoginButtons";

function FormLoginContainer() {
  return (
    <div
      id="form-login-container"
      className="flex flex-col justify-center items-center w-[50%] gap-10 bg-[#C2BEBE] p-10"
    >
      <h1 className="text-3xl">Inicia Sesión</h1>
      <FormLogin />
      <FormLoginButtons />
    </div>
  );
}

export default FormLoginContainer;
