import React from 'react'
import { useState,useEffect } from 'react';
import AnimeCard from '../componets/AnimeCard';
import Loader from '../assets/anime-loader.gif'
import AnimeInfo from '../componets/AnimeInfo';

const Anime = (props) => {

  const api = "https://api.jikan.moe/v4/top/anime";
  let [Data,setData] = useState([]);
  let [loading,setloading] = useState(false);
  let [Clicked,setClicked] = useState(false);
  let [ClickedData,setClickedData] = useState([]);
  let DarkMode = props.DarkMode;

  async function fecthApi(){
    setloading(true);
    const response = await fetch(api);
    const output = await response.json();
    setData(output.data);
    setloading(false)
  }
  
  useEffect(()=>{
    fecthApi();
  },[])

  return (
    <div className={DarkMode? 'anime-con dark-white-2':'anime-con'}>
      
      {

        Clicked? (
          <AnimeInfo ClickedData={ClickedData}></AnimeInfo>
        ) : (
          loading? (
          <img src={Loader} alt="Loading..." className='anime-loader'></img>
          
        ) : (
          Data.map( (data)=>{
          return(
            <AnimeCard data={data} Clicked={Clicked} setClicked={setClicked} ClickedData={ClickedData} setClickedData={setClickedData}></AnimeCard>
          )
          
        } )
        )
        )

       
      }

    </div>
  )
}

export default Anime
