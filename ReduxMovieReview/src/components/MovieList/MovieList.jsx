import React from 'react'
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.scss'
import Slider from "react-slick";
import { settings } from '../../common/settings'

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies, renderShows = "";

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((e, index) => {
      return <MovieCard key={index} data={e} />;
    })
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );

  renderShows = shows.Response === 'True' ? (
    shows.Search.map((e, index) => {
      return <MovieCard key={index} data={e} />;
    })
  ) : (
    <div className="shows-error">
      <h3>{shows.Error}</h3>
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h3>Here's all the popular marvel movies to watch !</h3>
        <div className="movie-container"><Slider {...settings}>{renderMovies}</Slider></div>
      </div>

      <div className="show-list">
        <h3>Here's all the popular tv series to watch !</h3>
        <div className="movie-container"><Slider {...settings}>{renderShows}</Slider></div>
      </div>
    </div>
  );
}

export default MovieList