import { useState } from "react";
import img1 from "../../../../../assets/images/testImage/img-1.png";
import img2 from "../../../../../assets/images/testImage/img-2.png";
import img3 from "../../../../../assets/images/testImage/img-3.png";
import star from "../../../../../assets/icons/star.svg";
function SerieContainer() {
  const [shortFilms] = useState([
    { title: "Serie 1", img: img1, stars: 5 },
    { title: "Serie 2", img: img2, stars: 4 },
    { title: "Serie 3", img: img3, stars: 5 },
  ]);
  return (
    <div id="serie-container" className="text-white mt-10 mb-20">
      <div id="serie-container-title" className="ml-10 mb-5">
        <h2>Mejores Series</h2>
      </div>
      <div id="serie-container-img" className="flex justify-center gap-10">
        {shortFilms.map((shortFilm) => (
          <div
            key={shortFilm.title}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col">
              <img src={shortFilm.img} alt={shortFilm.title} />
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
  );
}

export default SerieContainer;
