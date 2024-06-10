import PropTypes from "prop-types";
import star from "../../../../../assets/icons/star.svg";
import { Link } from "react-router-dom";
import Tooltip from "../../../../../components/tooltip/Tooltip";

function ShortFilmContainer({ shortFilms }) {
  const shortFilmsData = shortFilms.filter(
    (film) => film.tipo === "cortometraje"
  );

  return (
    <div
      id="short-film-container"
      className="font-vollkorn text-white max-w-full md:max-w-full overflow-x-auto justify-center mt-10 md:pl-[16rem]"
    >
      <div id="short-film-container-title" className="ml-10 mb-5">
        <h2 className="font-[600] md:text-[30px]">Mejores Cortometrajes</h2>
      </div>
      <div
        id="short-film-container-img"
        className="flex md:justify-center gap-10 overflow-x-auto scroll-container"
      >
        <div className="flex justify-start ml-4 gap-5 md:gap-10">
          {shortFilmsData.map((shortFilm) => (
            <Link
              to={`/details/${shortFilm.id}`}
              key={shortFilm.title}
              className="flex flex-none justify-center items-center w-[calc(50%-1rem)] md:w-auto hover:shadow-md rounded-2xl m-5 p-5 relative"
            >
              <Tooltip
                content={
                  <div className="flex flex-col justify-center ml-5 p-2">
                    <h3 className="mt-1">{shortFilm.title}</h3>
                    <div className="flex gap-2">
                      <img src={star} alt="star" className="w-[10px]" />
                      <p>{shortFilm.star}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem]">{shortFilm.synopsis}</p>
                    </div>
                  </div>
                }
                direction="bottom"
                delay="500"
              >
                <div className="flex flex-col font-merriweather">
                  <img
                    src={shortFilm.img}
                    alt={shortFilm.title}
                    className="w-[200px] md:w-[280px] shadow-md rounded"
                  />
                  <h3 className="mt-5">{shortFilm.title}</h3>
                  <div className="flex gap-2">
                    <img src={star} alt="star" />
                    <p>{shortFilm.star}</p>
                  </div>
                </div>
              </Tooltip>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

ShortFilmContainer.propTypes = {
  shortFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      tipo: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
      sinopsis: PropTypes.string.isRequired,
      puntuación: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ShortFilmContainer;
