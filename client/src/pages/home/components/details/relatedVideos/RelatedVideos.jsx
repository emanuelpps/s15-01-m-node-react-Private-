import { useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../../../../../assets/images/BB.png";
import img2 from "../../../../../assets/images/got.png";
import img3 from "../../../../../assets/images/ST.png";
import star from "../../../../../assets/icons/star.svg";

function RelatedVideos() {
  const [relatedVideos] = useState([
    { id: 1, title: "Breaking Bad", img: img1, stars: 9.5 },
    { id: 2, title: "Game of Thrones", img: img2, stars: 9.3 },
    { id: 3, title: "Stranger Things", img: img3, stars: 8.8 },
  ]);

  return (
    <div
      id="movie-container"
      className="text-white flex flex-col w-full pb-10 md:pl-[16rem] max-w-full md:max-w-full overflow-x-auto justify-center mt-20"
    >
      <div id="movie-container-title" className="ml-10 mb-5">
        <h2 className="font-[600] md:text-[30px]">Videos relacionados</h2>
      </div>
      <div
        id="movie-container-img"
        className="flex md:justify-center gap-10 overflow-x-auto scroll-container"
      >
        <div className="flex justify-start ml-4 gap-5 md:gap-10">
          {relatedVideos.map((video) => (
            <Link
              to={`/details/${video.id}`}
              key={video.id}
              className="flex flex-none justify-center items-center w-[calc(50%-1rem)] md:w-auto hover:shadow-md rounded-2xl m-5 p-5"
            >
              <div className="flex flex-col font-merriweather">
                <img
                  src={video.img}
                  alt={video.title}
                  className="w-[200px] md:w-[280px] shadow-md"
                />
                <h3 className="mt-5">{video.title}</h3>
                <div className="flex gap-2">
                  <img src={star} alt="star" />
                  <p>{video.stars}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedVideos;
