import Buttons from "../../components/Buttons";
import useUserStore from "../../store/useUserStore";

const ChangePassword = () => {
  const {
    password,
    newPassword,
    repeatPassword,
    setPassword,
    setNewPassword,
    setRepeatPassword,
  } = useUserStore();

  return (
    <div className="p-2 mx-auto flex flex-col pt-6 px-4 pb-6">
      <div className="bg-primary-500 p-6 rounded-lg flex flex-col items-center">
        <form className="font-merriweather w-full">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Contraseña *
            </label>
            <input
              type="password"
              className="w-full p-2 rounded-lg bg-primary-500 border border-white"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Nueva Contraseña *
            </label>
            <input
              type="password"
              className="w-full p-2 rounded-lg bg-primary-500 border border-white"
              placeholder="*********"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Repetir Contraseña *
            </label>
            <input
              type="password"
              className="w-full p-2 rounded-lg bg-primary-500 border border-white"
              placeholder="*********"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <Buttons
            variant="primary"
            type="submit"
            className="w-full p-2 rounded-lg mt-4"
          >
            Guardar
          </Buttons>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
