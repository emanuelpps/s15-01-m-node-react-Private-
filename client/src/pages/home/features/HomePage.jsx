import { useState, useEffect } from "react";
import data from "../../../assets/data.json";
import GenreContainer from "../components/home/genreFilter/GenreContainer";
import MovieContainer from "../components/home/movie/MovieContainer";
import SerieContainer from "../components/home/serie/SerieContainer";
import ShortFilmContainer from "../components/home/shortFilm/ShortFilmContainer";
import SlideContainer from "../components/home/slides/SlideContainer";

function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms(data);
  }, []);

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
      <ShortFilmContainer
        shortFilms={films.filter((film) => film.tipo === "cortometraje")}
      />
      <MovieContainer
        movies={films.filter((film) => film.tipo === "pelicula")}
      />
      <SerieContainer series={films.filter((film) => film.tipo === "serie")} />
    </div>
  );
}

export default HomePage;
