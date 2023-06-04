import React from 'react'
import Datafiled from '../componets/Datafiled';
import Loader from '../assets/loader.gif';

const FirstPagecom = (props) => {
  
    let loading = props.loading;
    let firstPageData = props.firstPageData;
    let setfirstPageData = props.setfirstPageData;
    let title = props.title;
    let setTitle=props.setTitle;
    let DarkMode = props.DarkMode;

  return (
    <div className= {DarkMode? 'firstpage dark-white-2':'firstpage'}>
      {
          loading ? (
           
            <img src={Loader} alt="Loading.." className='loading'></img>
        
          ) : (
            <Datafiled firstPageData={firstPageData} setfirstPageData={setfirstPageData} title={title} setTitle={setTitle} ></Datafiled>
          )
        }
    </div>
  )
}

export default FirstPagecom
