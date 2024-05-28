import RegisterButtons from "./RegisterButtons";
import RegisterForm from "./RegisterForm";

function RegisterFormContainer() {
  return (
    <div
      id="form-login-container"
      className="flex flex-col justify-center items-center w-[50%] gap-10 bg-[#C2BEBE] p-10"
    >
      <h1 className="text-3xl">Crear una cuenta</h1>
      <RegisterForm />
      <RegisterButtons />
    </div>
  );
}

export default RegisterFormContainer;
