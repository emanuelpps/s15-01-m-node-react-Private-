/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import sliderImg from "../../../../../assets/images/slideImg.png";
import rectangle from "../../../../../assets/icons/Rectangle.svg";
import ellipse from "../../../../../assets/icons/Ellipse.svg";
import Buttons from "../../../../../components/Buttons";
function SlideContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  //const [imgSelector, setImgSelector] = useState(0);
  const [slideImages] = useState([
    { src: sliderImg },
    { src: sliderImg },
    { src: sliderImg },
  ]);
  return (
    <>
      <div
        id="slide-container"
        className="flex flex-col w-full mt-10 mb-10 md:pl-[16rem]"
      >
        <div className="flex flex-row justify-center">
          {slideImages.map((image, index) => (
            <div
              key={index}
              id="slide-img"
              className="flex flex-row justify-center items-center"
            >
              <img
                src={image.src}
                alt="sliderImg"
                className={`object-fill w-[300px] md:h-[400px] md:w-[800px] rounded-[20px] ${
                  currentSlide === index ? "block" : "hidden"
                }`}
              />
              <div
                className={`${
                  currentSlide === index
                    ? "block absolute left-[30%] pt-[10%]"
                    : "hidden"
                }`}
              >
                <Buttons variant="primary">Ver Trailer</Buttons>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center mt-5 gap-2">
          {slideImages.map((image, index) => (
            <div
              key={index}
              id="slide-dot"
              className="flex cursor-pointer"
              onClick={() => setCurrentSlide(index)}
            >
              <div>
                {index === currentSlide ? (
                  <img src={rectangle} alt="rectangle" />
                ) : (
                  <img src={ellipse} alt="ellipse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SlideContainer;
