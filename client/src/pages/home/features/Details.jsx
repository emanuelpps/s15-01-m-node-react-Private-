import { useParams } from "react-router-dom";
import VideoDescription from "../components/details/description/VideoDescription";
import VideoContainer from "../components/details/videoContainer/VideoContainer";
import RelatedVideos from "../components/details/relatedVideos/RelatedVideos";

function Details() {
  const { id } = useParams();
  return (
    <div className=" bg-[#2C3E50]">
      <VideoDescription />
      <VideoContainer />
      <RelatedVideos />
    </div>
  );
}

export default Details;
