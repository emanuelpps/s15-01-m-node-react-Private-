import PropTypes from "prop-types";
import star from "../../../../../assets/icons/star.svg";
import { Link } from "react-router-dom";
import Tooltip from "../../../../../components/tooltip/Tooltip";
//import { useState } from "react";
import img1 from "../../../../../assets/images/testImage/img-1.png";
import img2 from "../../../../../assets/images/testImage/img-2.png";
import img3 from "../../../../../assets/images/testImage/img-3.png";

function MovieContainer({ movies }) {
  const moviesData = movies.filter((movie) => movie.tipo === "pelicula");

  return (
    <div
      id="movie-container"
      className="font-vollkorn text-white max-w-full md:max-w-full overflow-x-auto justify-center mt-10 md:pl-[16rem]"
    >
      <div id="movie-container-title" className="ml-10 mb-5">
        <h2 className="font-[600] md:text-[30px]">Mejores Películas</h2>
      </div>
      <div
        id="movie-container-img"
        className="flex md:justify-center gap-10 overflow-x-auto scroll-container"
      >
        <div className="flex justify-start ml-4 gap-5 md:gap-10">
          {moviesData.slice(0, 3).map((movie) => (
            <Link
              to={`/details/${movie.id}`}
              key={movie.title}
              className="flex flex-none justify-center items-center w-[calc(50%-1rem)] md:w-auto hover:shadow-md rounded-2xl m-5 p-5 relative"
            >
              <Tooltip
                content={
                  <div className="flex flex-col justify-center ml-5 p-2">
                    <h3 className="mt-1">{movie.title}</h3>
                    <div className="flex gap-2">
                      <img src={star} alt="star" className="w-[10px]" />
                      <p>{movie.star}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem]">{movie.synopsis}</p>
                    </div>
                  </div>
                }
                direction="bottom"
                delay="500"
              >
                <div className="flex flex-col font-merriweather">
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="w-[200px] md:w-[280px] shadow-md rounded"
                  />
                  <h3 className="mt-5">{movie.title}</h3>
                  <div className="flex gap-2">
                    <img src={star} alt="star" />
                    <p>{movie.star}</p>
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

MovieContainer.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      synopsis: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieContainer;

// Usage example
const moviesExample = [
  {
    id: "1",
    title: "Movie 1",
    type: "pelicula",
    img: img1,
    rating: 5,
    synopsis: "Synopsis 1",
  },
  {
    id: "2",
    title: "Movie 2",
    type: "pelicula",
    img: img2,
    rating: 4,
    synopsis: "Synopsis 2",
  },
  {
    id: "3",
    title: "Movie 3",
    type: "pelicula",
    img: img3,
    rating: 5,
    synopsis: "Synopsis 3",
  },
];

<MovieContainer movies={moviesExample} />;
