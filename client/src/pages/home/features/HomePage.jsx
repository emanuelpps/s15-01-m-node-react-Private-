import { useState, useEffect } from "react";
import newData from "../../../../public/assets/data.json";
import GenreContainer from "../components/home/genreFilter/GenreContainer";
import MovieContainer from "../components/home/movie/MovieContainer";
import SerieContainer from "../components/home/serie/SerieContainer";
import ShortFilmContainer from "../components/home/shortFilm/ShortFilmContainer";
import SlideContainer from "../components/home/slides/SlideContainer";

function HomePage() {
  const [films, setFilms] = useState(newData);
  const [randomFilms, setRandomFilms] = useState([]);

  useEffect(() => {
    updateRandomFilms();
    setFilms(newData);
  }, []);

  const updateRandomFilms = () => {
    const getRandomFilms = () => {
      const selectedFilms = [];
      const filmSet = new Set();
      while (filmSet.size < 3) {
        const randomIndex = Math.floor(Math.random() * newData.length);
        if (!filmSet.has(randomIndex)) {
          filmSet.add(randomIndex);
          selectedFilms.push(newData[randomIndex]);
        }
      }
      return selectedFilms;
    };

    setRandomFilms(getRandomFilms());
  };

  const [filterGenre] = useState([
    "Todas",
    "Genero",
    "Acción",
    "Animación",
    "Comedia",
    "Suspenso",
    "Terror",
    "Romance",
  ]);
  const [genreSelected, setGenreSelected] = useState("");

  console.log(films);

  return (
    <div>
      <SlideContainer randomFilms={randomFilms}/>
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
