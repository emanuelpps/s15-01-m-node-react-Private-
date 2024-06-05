import videoImage from "../../../../../assets/images/testImage/front.png";
import personImage from "../../../../../assets/images/testImage/person.png";
function VideoDescription() {
  return (
    <div
      id="video-description"
      className="flex flex-col w-full pt-10 mb-10 md:pl-[16rem] text-white overflow-x-hidden"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div
          id="video-front-page"
          className=" flex justify-center items-center"
        >
          <div className="flex justify-center items-center ">
            <img
              src={videoImage}
              className="w-[200px] md:w-auto rounded-[20px]"
            />
          </div>
        </div>
        <div id="video-details" className="md:w-[50%]">
          <div>
            <h1>Video Title</h1>
          </div>
          <div>
            <p>video info</p>
          </div>
          <div className="mt-5 w-[300px]  md:w-[100%]">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              nostrum amet, voluptatem, sequi repudiandae officiis quo culpa
              quia perferendis totam, laborum quod nemo asperiores porro
              suscipit illum. Rem, in! Fugit.
            </p>
          </div>
          <div className="mt-5 hidden md:flex md:flex-col">
            <h3>Elenco</h3>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex gap-2 h-full">
                <img
                  src={personImage}
                  className="flex justify-center items-center w-[70px] h-[60px]"
                />
                <div className="flex flex-col w-[200px] justify-center">
                  <p>Person Name</p>
                  <p>character name</p>
                </div>
              </div>
              <div className="flex gap-2 h-full">
                <img
                  src={personImage}
                  className="flex justify-center items-center w-[70px] h-[60px]"
                />
                <div className="flex flex-col w-[200px] justify-center">
                  <p>Person Name</p>
                  <p>character name</p>
                </div>
              </div>
              <div className="flex gap-2 h-full">
                <img
                  src={personImage}
                  className="flex justify-center items-center w-[70px] h-[60px]"
                />
                <div className="flex flex-col w-[200px] justify-center">
                  <p>Person Name</p>
                  <p>character name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDescription;
