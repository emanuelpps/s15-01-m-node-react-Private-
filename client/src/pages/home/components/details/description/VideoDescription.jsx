import PropTypes from "prop-types";
import star from "../../../../../assets/icons/star.svg";
import personImage from "../../../../../assets/images/testImage/person.png";

function VideoDescription({ videoData }) {
  return (
    <div
      id="video-description"
      className="flex flex-col w-full pt-10 mb-10 md:pl-[16rem] text-white overflow-x-hidden"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div id="video-details" className="md:w-[90%]">
          <div>
            <h1>{videoData.title}</h1>
          </div>
          <div className="mt-5">
            <span className="rounded-[20px] p-2 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3))]">
              {videoData.genre}
            </span>
          </div>
          <div className="flex gap-2 mt-5">
            <img src={star} alt="star" />
            <p>{videoData.star}</p>
          </div>
          <div className="mt-5 mb-5 w-[300px] md:w-[100%]">
            <h3 className="mb-5">Sinopsis</h3>
            <p>{videoData.synopsis}</p>
          </div>
          {videoData.actors.length > 0 && (
            <div className="mt-5 hidden md:flex md:flex-col">
              <h3>Elenco</h3>
              <div className="flex flex-col md:flex-row gap-5">
                {videoData.actors.map((actor, index) => (
                  <div key={index} className="flex gap-2 h-full">
                    <img
                      src={personImage}
                      className="flex justify-center items-center w-[70px] h-[60px]"
                      alt={actor}
                    />
                    <div className="flex flex-col w-[200px] justify-center">
                      <p>{actor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

VideoDescription.propTypes = {
  videoData: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    vistas: PropTypes.number.isRequired,
    synopsis: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoDescription;
