import React, { useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies("Marvel"));
    dispatch(fetchAsyncShows("Friends"));
  }, [dispatch]);

  return (
    <>
      <div className="banner-image"></div>
      <MovieList />
    </>
  )
}

export default Home