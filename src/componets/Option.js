import React from 'react'
import { MdDarkMode } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'

const Option = (props) => {
  let navigate = useNavigate();
  let setTitle = props.setTitle;
  let setpage = props.setpage;
  let filterClicked=props.filterClicked;
  let setFilterClicked = props.setFilterClicked;
  let DarkMode = props.DarkMode;

  function moviesHandler(){
    setFilterClicked(false);
    setpage("home")
    navigate('/')
  }
  function seriesHandler(){
    setFilterClicked(false);
    setpage("series")
    setTitle("");
    navigate('/series')
  }
  function animeHandler(){
    setFilterClicked(false);
    setpage("anime")
    setTitle("");
    navigate('/anime')
  }

  return (
    <div className= {DarkMode? 'options-con option-dark':'options-con'}>
      <button className={DarkMode? 'movies btn dark-btn':'movies btn'} onClick={moviesHandler}>Movies</button>
      <button className= {DarkMode? 'series btn dark-btn':'series btn'} onClick={seriesHandler}>Series</button>
      <button className={DarkMode? 'anime btn dark-btn':'anime btn'} onClick={animeHandler}>Anime</button>
    </div>
  )
}

export default Option
