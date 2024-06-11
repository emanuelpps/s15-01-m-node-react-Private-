import PropTypes from "prop-types";
//import { useState } from "react";
// s
import star from "../../../../../assets/icons/star.svg";
import { Link } from "react-router-dom";
import Tooltip from "../../../../../components/tooltip/Tooltip";

function SerieContainer({ series }) {
  const seriesData = series.filter((serie) => serie.tipo === "serie");

  return (
    <div
      id="serie-container"
      className="font-vollkorn text-white max-w-full md:max-w-full overflow-x-auto justify-center mt-10 md:pl-[16rem]"
    >
      <div id="serie-container-title" className="ml-10 mb-5">
        <h2 className="font-[600] md:text-[30px]">Mejores Series</h2>
      </div>
      <div
        id="serie-container-img"
        className="flex md:justify-center gap-10 overflow-x-auto scroll-container"
      >
        <div className="flex justify-start ml-4 gap-5 md:gap-10">
          {seriesData.slice(0, 3).map((serie) => (
            <Link
              to={`/details/${serie.id}`}
              key={serie.title}
              className="flex flex-none justify-center items-center w-[calc(50%-1rem)] md:w-auto hover:shadow-md rounded-2xl m-5 p-5 relative"
            >
              <Tooltip
                content={
                  <div className="flex flex-col justify-center ml-5 p-2">
                    <h3 className="mt-1">{serie.title}</h3>
                    <div className="flex gap-2">
                      <img src={star} alt="star" className="w-[10px]" />
                      <p>{serie.star}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem]">{serie.synopsis}</p>
                    </div>
                  </div>
                }
                direction="bottom"
                delay="500"
              >
                <div className="flex flex-col font-merriweather">
                  <img
                    src={serie.img}
                    alt={serie.title}
                    className="w-[150px] md:w-[280px] shadow-md rounded"
                  />
                  <h3 className="mt-5">{serie.title}</h3>
                  <div className="flex gap-2">
                    <img src={star} alt="star" />
                    <p>{serie.star}</p>
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

SerieContainer.propTypes = {
  series: PropTypes.arrayOf(
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

export default SerieContainer;

// Usage example
// const seriesExample = [
//   { id: "1", title: "Serie 1", type: "serie", img: img1, rating: 5, synopsis: "Synopsis 1" },
//   { id: "2", title: "Serie 2", type: "serie", img: img2, rating: 4, synopsis: "Synopsis 2" },
//   { id: "3", title: "Serie 3", type: "serie", img: img3, rating: 5, synopsis: "Synopsis 3" },
// ];

{
  /* <SerieContainer series={seriesExample} />; */
}
