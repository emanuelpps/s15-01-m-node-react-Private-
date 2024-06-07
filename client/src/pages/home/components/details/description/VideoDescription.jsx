import star from "../../../../../assets/icons/star.svg";
import personImage from "../../../../../assets/images/testImage/person.png";
function VideoDescription() {
  return (
    <div
      id="video-description"
      className="flex flex-col w-full pt-10 mb-10 md:pl-[16rem] text-white overflow-x-hidden"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div id="video-details" className="md:w-[90%]">
          <div>
            <h1>Movie Title</h1>
          </div>
          <div className="mt-5">
            <span
              className="rounded-[20px] p-2 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3))]
"
            >
              movie Tag
            </span>
          </div>
          <div className="flex gap-2 mt-5">
            <img src={star} alt="star" />
            <p>4.1</p>
          </div>
          <div className="mt-5 mb-5 w-[300px]  md:w-[100%]">
            <h3 className="mb-5">Sinopsis</h3>
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
