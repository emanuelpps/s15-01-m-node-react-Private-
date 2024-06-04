import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";

const Navbar = () => {
  return (
    <nav className="bg-primary-500 p-6 flex justify-between items-center">
      <div className="md:text-[48px] font-semibold text-white font-vollkorn">
        <Link to="/">Indie Zone</Link>
      </div>
      <div className="md:space-x-4 font-merriweather text-xl">
        <Link to="/login">
          <Buttons variant="tertiary">Acceder</Buttons>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
