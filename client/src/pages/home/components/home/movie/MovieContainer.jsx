import { useState } from "react";
import img1 from "../../../../../assets/images/testImage/img-1.png";
import img2 from "../../../../../assets/images/testImage/img-2.png";
import img3 from "../../../../../assets/images/testImage/img-3.png";
import star from "../../../../../assets/icons/star.svg";

function MovieContainer() {
  const [shortFilms] = useState([
    { title: "Serie 1", img: img1, stars: 5 },
    { title: "Serie 2", img: img2, stars: 4 },
    { title: "Serie 3", img: img3, stars: 5 },
  ]);

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
          {shortFilms.map((shortFilm) => (
            <div
              key={shortFilm.title}
              className="flex flex-none justify-center items-center w-[calc(50%-1rem)] md:w-auto"
            >
              <div className="flex flex-col font-merriweather">
                <img
                  src={shortFilm.img}
                  alt={shortFilm.title}
                  className="w-[200px] md:w-[280px]"
                />
                <h3 className="mt-5">{shortFilm.title}</h3>
                <div className="flex gap-2">
                  <img src={star} alt="star" />
                  <p>{shortFilm.stars}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieContainer;
