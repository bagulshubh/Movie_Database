import React, { useEffect, useState } from 'react'
import FirstPagecom from './FirstPagecom';
import Nodata from '../assets/No data.gif';
import darkNodata from '../assets/not-found.gif';

const Filers = (props) => {

  let filed = props.filed;
  let title = props.title;
  let setTitle = props.setTitle;
  let [loading,setLoading] = useState(false);
  let [data,setData] = useState([]);
  let DarkMode = props.DarkMode;

  async function filterData(){
    setLoading(true);

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '84686e48ecmsh23cfdca30f8f057p16bf38jsn9c36f2169669',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    
     const response = await fetch('https://moviesdatabase.p.rapidapi.com/titles?list='+filed+'&limit=10', options);
      
     const result = await response.json();
     setData(result.results);
     setLoading(false);
  }

  useEffect( ()=>{
    filterData();
  },[filed]);

  return (
    <div className={DarkMode? 'dark-white-2 filter-main':'filter-main'}>
        {
          data? (
            <FirstPagecom loading={loading} firstPageData={data} setfirstPageData={setData} title={title} setTitle={setTitle}></FirstPagecom>
          ) : (
            <div><img src={DarkMode? darkNodata:Nodata} className='not-found-filter'></img></div>
          )
      
        }
        
      
    </div>
  )
}

export default Filers
