import videoImage from "../../../../../assets/images/testImage/front.png";
import personImage from "../../../../../assets/images/testImage/person.png";
function VideoDescription() {
  return (
    <div
      id="video-description"
      className="flex justify-center items-center pt-10 text-white"
    >
      <div className="flex justify-center gap-10">
        <div
          id="video-front-page"
          className=" flex justify-center items-center ]"
        >
          <div className=" flex justify-center items-center ">
            <img src={videoImage} className="rounded-[20px]" />
          </div>
        </div>
        <div id="video-details" className="w-[50%]">
          <div>
            <h1>Video Title</h1>
          </div>
          <div>
            <p>video info</p>
          </div>
          <div className="mt-5 w-[50%]">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              nostrum amet, voluptatem, sequi repudiandae officiis quo culpa
              quia perferendis totam, laborum quod nemo asperiores porro
              suscipit illum. Rem, in! Fugit.
            </p>
          </div>
          <div className="mt-5">
            <h3>Elenco</h3>
            <div className="flex gap-5">
              <div className="flex gap-2">
                <img src={personImage} />
                <div className="flex flex-col  justify-center">
                  <p>Person Name</p>
                  <p>character name</p>
                </div>
              </div>{" "}
              <div className="flex">
                <img src={personImage} />
                <div className="flex flex-col ml-5 justify-center">
                  <p>Person Name</p>
                  <p>character name</p>
                </div>
              </div>{" "}
              <div className="flex">
                <img src={personImage} />
                <div className="flex flex-col ml-5 justify-center">
                  <p>Person Name</p>
                  <p>character name</p>
                </div>
              </div>{" "}
              <div className="flex">
                <img src={personImage} />
                <div className="flex flex-col ml-5 justify-center">
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
