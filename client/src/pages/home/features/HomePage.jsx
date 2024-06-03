import GenreContainer from "../components/home/genreFilter/GenreContainer";
import MovieContainer from "../components/home/movie/MovieContainer";
import SerieContainer from "../components/home/serie/SerieContainer";
import ShortFilmContainer from "../components/home/shortFilm/ShortFilmContainer";
import SlideContainer from "../components/home/slides/SlideContainer";

function HomePage() {
  return (
    <div>
      <SlideContainer />
      <GenreContainer />
      <ShortFilmContainer />
      <MovieContainer />
      <SerieContainer />
    </div>
  );
}

export default HomePage;
