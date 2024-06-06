import { useState } from "react";
import img1 from "../../../../../assets/images/testImage/img-1.png";
import img2 from "../../../../../assets/images/testImage/img-2.png";
import img3 from "../../../../../assets/images/testImage/img-3.png";
import star from "../../../../../assets/icons/star.svg";
import { Link } from "react-router-dom";
function ShortFilmContainer() {
  const [shortFilms] = useState([
    { id: 1, title: "Serie 1", img: img1, stars: 5 },
    { id: 2, title: "Serie 2", img: img2, stars: 4 },
    { id: 3, title: "Serie 3", img: img3, stars: 5 },
  ]);

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
          {shortFilms.map((shortFilm) => (
            <Link
              to={`/details/${shortFilm.id}`}
              key={shortFilm.title}
              className="flex flex-none justify-center items-center w-[calc(50%-1rem)] md:w-auto hover:shadow-md rounded-2xl m-5 p-5"
            >
              <div className="flex flex-col font-merriweather">
                <img
                  src={shortFilm.img}
                  alt={shortFilm.title}
                  className="w-[200px] md:w-[280px] shadow-md"
                />
                <h3 className="mt-5">{shortFilm.title}</h3>
                <div className="flex gap-2">
                  <img src={star} alt="star" />
                  <p>{shortFilm.stars}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShortFilmContainer;
