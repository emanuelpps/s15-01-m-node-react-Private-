import PropTypes from "prop-types";

const VideoCard = ({ title }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] text-white p-4 my-2 md:mx-4 border border-white rounded-md flex-1">
      <span className="text-lg font-semibold mb-4">{title}</span>
      <div className="flex justify-between mt-4">
        <span>Video</span>
        <span>Vistas</span>
      </div>
      <div className="flex justify-center items-center py-10 md:p-20">
        <p className="text-center">Aún no hay datos para mostrar</p>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default VideoCard;
