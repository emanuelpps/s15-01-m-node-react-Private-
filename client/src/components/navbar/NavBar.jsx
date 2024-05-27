import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";

const Navbar = () => {
  return (
    <nav className="bg-primary-500 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
      <div className="text-4xl font-bold text-white">
        <Link to="/">Indie Zone</Link>
      </div>
      <div className="space-x-4">
        <Link to="/login">
          <Buttons variant="primary">Acceder</Buttons>
        </Link>
        <Link to="/register">
          <Buttons variant="secondary">Suscríbete</Buttons>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
