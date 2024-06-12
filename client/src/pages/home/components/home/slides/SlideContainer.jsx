/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import sliderImg from "../../../../../assets/images/slideImg.png";
import rectangle from "../../../../../assets/icons/Rectangle.svg";
import ellipse from "../../../../../assets/icons/Ellipse.svg";
import Buttons from "../../../../../components/Buttons";
import { Link } from "react-router-dom";
function SlideContainer(randomFilms) {
  const [currentSlide, setCurrentSlide] = useState(0);
  //const [imgSelector, setImgSelector] = useState(0);
  const [slideImages] = useState([
    { src: sliderImg },
    { src: sliderImg },
    { src: sliderImg },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  console.log(randomFilms);
  return (
    <>
      <div
        id="slide-container"
        className="flex flex-col w-full mt-10 mb-10 md:pl-[16rem]"
      >
        <div className="flex flex-row justify-center relative">
          {randomFilms.randomFilms.map((film, index) => (
            <div
              key={index}
              id="slide-img"
              className="flex flex-row justify-center items-center relative"
            >
              <img
                src={film?.wide}
                alt="sliderImg"
                className={`hidden md:flex object-cover ${film.id === 9 || film.id === 12 || film.id === 7 ? "object-top" : "object-center"} md:h-[400px] md:w-[900px] rounded-[20px] ${
                  currentSlide === index ? "md:block" : "md:hidden"
                }`}
              />
              <img
                src={film?.img}
                alt="sliderImg"
                className={`flex md:hidden object-cover object-center w-[300px] h-[90%] rounded-[20px] ${
                  currentSlide === index ? "block md:hidden" : "hidden"
                }`}
              />
              <Link
                to={`/details/${film.id}`}
                className={`${
                  currentSlide === index
                    ? "block absolute left-[10%] pt-[20%]"
                    : "hidden"
                }`}
              >
                <Buttons variant="primary">Ver Trailer</Buttons>
              </Link>
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
