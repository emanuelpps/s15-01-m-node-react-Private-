import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; // Importa useState y useEffect
import VideoDescription from "../components/details/description/VideoDescription";
import VideoContainer from "../components/details/videoContainer/VideoContainer";
import RelatedVideos from "../components/details/relatedVideos/RelatedVideos";
import videoDataArray from "../../../assets/data.json"; // Importa los datos de los videos

function Details() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const selectedVideo = videoDataArray.find(
      (video) => video.id === parseInt(id)
    );

    setVideoData(selectedVideo);
  }, [id]);

  return (
    <div className=" bg-[#2C3E50]">
      <VideoContainer />
      {videoData && <VideoDescription videoData={videoData} />}

      <RelatedVideos />
    </div>
  );
}

export default Details;
