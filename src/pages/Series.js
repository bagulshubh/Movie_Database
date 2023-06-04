import React from 'react'
import Datafiled from '../componets/Datafiled';
import Loader from '../assets/loader.gif';
import { useState,useEffect } from 'react';

const Series = (props) => {

    let [loading,setloading] = useState(false);
    let title = props.title;
    let setTitle=props.setTitle;
    let [data,setData]= useState([]);
    let DarkMode = props.DarkMode;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '84686e48ecmsh23cfdca30f8f057p16bf38jsn9c36f2169669',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    async function fecthApi(){
        setloading(true);
        const response = await fetch('https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_series_250', options);
        const output = await response.json();
        setData(output.results);
        setloading(false);
    
    }

    
    
    useEffect( ()=>{
        fecthApi();
    },[])
    

  return (
    <div className={DarkMode? 'firstpage dark-white-2':'firstpage'}>
      { 
          loading ? (
           
            <img src={Loader} alt="Loading.." className='loading'></img>
        
          ) : (
            <Datafiled firstPageData={data} setfirstPageData={setData} title={title} setTitle={setTitle}></Datafiled>
          )
        }
    </div>
  )
}

export default Series
