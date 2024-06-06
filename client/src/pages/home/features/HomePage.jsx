import { useState } from "react";
import GenreContainer from "../components/home/genreFilter/GenreContainer";
import MovieContainer from "../components/home/movie/MovieContainer";
import SerieContainer from "../components/home/serie/SerieContainer";
import ShortFilmContainer from "../components/home/shortFilm/ShortFilmContainer";
import SlideContainer from "../components/home/slides/SlideContainer";

function HomePage() {
  const [filterGenre] = useState([
    "Todas",
    "Genero",
    "Nombre",
    "Año",
    "Rating",
  ]);
  const [genreSelected, setGenreSelected] = useState("");

  return (
    <div>
      <SlideContainer />
      <GenreContainer
        filterGenre={filterGenre}
        setGenreSelected={setGenreSelected}
        genreSelected={genreSelected}
      />
      <ShortFilmContainer />
      <MovieContainer />
      <SerieContainer />
    </div>
  );
}

export default HomePage;
