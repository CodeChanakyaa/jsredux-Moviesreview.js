import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  }

  const changeHandler = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  }

  return (
    <div className="header">
      <div className="logo"><Link to="/">UI</Link></div>
      <div className="search-box">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder='Search movies or shows' value={term} onChange={changeHandler}/>
          <button type='submit'> <i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="user" />
      </div>
    </div>
  )
}

export default Header