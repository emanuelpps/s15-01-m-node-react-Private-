import ReactPlayer from "react-player";
function VideoContainer(video) {
  return (
    <div
      id="video-container"
      className="flex justify-center items-center md:pl-[16rem] rounded-xl"
    >
      <div className="flex justify-center items-center mt-10 w-[250px] md:w-[800px]">
        <ReactPlayer
          url={video.videoData.trailer}
          controls
          width={"100%"}
          className="rounded-xl md:w-auto "
        />
      </div>
    </div>
  );
}

export default VideoContainer;
