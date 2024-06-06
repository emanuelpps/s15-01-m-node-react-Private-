import Buttons from "../../components/Buttons";
import avatar from "../../assets/images/avatar1.png";
import { MdOutlineCameraEnhance } from "react-icons/md";
import useUserStore from "../../store/useUserStore";

const Edit = () => {
  const { email, firstName, lastName, setEmail, setFirstName, setLastName } =
    useUserStore();

  return (
    <div className="p-2 mx-auto flex flex-col pt-6 px-4 pb-6">
      <div className="bg-primary-500 p-6 rounded-lg flex flex-col items-center relative">
        <div className="relative w-16 h-16 mb-10">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full rounded-full"
          />
          <MdOutlineCameraEnhance
            className="w-6 h-6 text-white absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 cursor-pointer bg-primary-500 rounded-full p-1"
            title="Editar Avatar"
          />
        </div>
        <form className="font-merriweather w-full">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Correo Electrónico *
            </label>
            <input
              type="email"
              className="w-full p-2 rounded-lg bg-primary-500 border border-white"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Nombre *</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-primary-500 border border-white"
              placeholder="Nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Apellido *</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-primary-500 border border-white"
              placeholder="Apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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

export default Edit;
