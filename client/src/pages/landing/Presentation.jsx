import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";

const HomeTitle = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-[56px] font-vollkorn font-semibold text-center pt-6">
        Indie Zone
      </h1>
      <h2 className="font-medium font-merriweather text-[32px] text-center text-white p-4">
        Descubre y comparte películas y animaciones con el resto del mundo
      </h2>
      <div className="flex justify-center p-6 font-merriweather">
        <Link to="/suscription">
          <Buttons variant="primary">Suscríbete Ahora</Buttons>
        </Link>
      </div>
    </div>
  );
};

export default HomeTitle;
