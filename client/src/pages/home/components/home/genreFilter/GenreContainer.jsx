/* eslint-disable react/prop-types */
import { useState } from "react";
import dropDownArrow from "../../../../../assets/icons/dropDownArrow.svg";
function GenreContainer({ filterGenre, setGenreSelected, genreSelected }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const gendreHandler = (genre) => {
    setGenreSelected(genre);
    setIsDropdownOpen(false);
  };
  return (
    <div id="genre-container" className=" text-white">
      <div className="flex flex-col justify-end items-end mr-20 ">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex justify-center items-center gap-2   bg-[#FFFFFF0D] p-[10px] rounded-[10px]"
        >
          {genreSelected || "Genero"}
          <img src={dropDownArrow} alt="dropDownArrow" />
        </button>
        {isDropdownOpen && (
          <div className="">
            <div className="flex flex-col">
              {filterGenre.map((genre) => (
                <div
                  key={genre}
                  onClick={() => gendreHandler(genre)}
                  className="flex justify-start gap-2 hover:bg-[#233b53] p-1 cursor-pointer"
                >
                  {genre}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenreContainer;

/*{filterGenre.map((genre, index) => (
          <div key={index}>{genre}</div>
        ))} */
