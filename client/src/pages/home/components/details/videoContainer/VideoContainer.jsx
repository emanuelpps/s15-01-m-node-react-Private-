import ReactPlayer from "react-player";
function VideoContainer(video) {
  return (
    <div id="video-container" className="flex justify-center items-center md:pl-[16rem] rounded-xl">
      <div className="flex justify-center items-center mt-10">
        <ReactPlayer
          url={video.videoData.trailer}
          controls
          className="rounded-xl md:w-auto w-[300px] h-[300px] md:h-[400px]"
        />
      </div>
    </div>
  );
}

export default VideoContainer;
