import React from 'react'
import Card from './Card';
import { useState,useEffect } from 'react';
import HomePageSearch from './HomePageSearch';

const Datafiled = (props) => {

    let firstPageData = props.firstPageData;
    let title = props.title;
    let setTitle = props.setTitle;
    const [titlechange,setTitlechange] = useState(false);
    const [changedata,setChangedata] = useState([]);
    const [clicked,setClicked] = useState(false);
    const [loading,setLoading] = useState(false);

    let api = `https://www.omdbapi.com/?t=${title}&apikey=a497dec2`;

    async function fecthApi(){
        setLoading(true);
        const response = await fetch(api);
        if(response.Response==="False"){
            console.log("Error in the api check api call");
        }
        else{
            const output = await response.json();
            setChangedata(output);
        }
        setLoading(false);
    }

    useEffect( ()=>{
        fecthApi();
    },[title])

  return (
    <div className='card-con'>

        {
            clicked? (<div>
                {/* <Search output={changedata} isInput={true} ></Search> */}
                <HomePageSearch changedata={changedata} loading={loading} title={title} fecthApi={fecthApi}></HomePageSearch>
            </div>) : (
                firstPageData.map( data =>{
                return(

                    <Card data = {data} title={title} setTitle={setTitle} titlechange={titlechange} setTitlechange={setTitlechange} changedata={changedata} setChangedata={setChangedata} clicked={clicked} setClicked={setClicked} fecthApi={fecthApi}></Card>

                )
            } )
            )
        }
    </div>
  )
}

export default Datafiled
