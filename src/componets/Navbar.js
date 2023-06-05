import React from 'react'
import Logo from '../assets/front-logo.png';
import {BsSearch} from 'react-icons/bs';
import{MdDarkMode,MdOutlineLightMode} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {BsChevronDoubleDown} from 'react-icons/bs';

const Navbar = (props) => {

  let title = props.title;
  let setTitle = props.setTitle;
  let fecthApi = props.fecthApi;
  const navigate = useNavigate();
  let filterClicked = props.filterClicked;
  let setFilterClicked = props.setFilterClicked;
  let setFeiled = props.setFeiled;
  let DarkMode = props.DarkMode;
  let setDarkMode = props.setDarkMode;

  function changeHandler(event){
    setTitle(event.target.value);
  }
  function clickHandler(){
    setFilterClicked(false);
    fecthApi();
    navigate('/search');
  }
  function pageHandler(){
    setFilterClicked(false);
    navigate('/');
  }
  function keyHandler(event){
    if(event.key==='Enter'){
      setFilterClicked(false);
      fecthApi();
      navigate('/search');
    }
  }
  function filerHandler(){
    setFilterClicked(!filterClicked);
    navigate('/filter');
  }
  function cathandler(event){
    
    let newstr = event.target.innerHTML.toLowerCase().replaceAll(' ','_');
    setFeiled("");
    setFeiled(newstr);
  }
  function modeHandler(){
    setDarkMode(!DarkMode);
  }
  
  return (
    <div className={(DarkMode? 'nav-con dark' : 'nav-con light' )}>
        <img src={Logo} alt="This is logo" className='logo' onClick={pageHandler}></img>

        <div className={DarkMode? 'input-con-dark ':'input-con'}>
            <input placeholder='Enter Title' className={DarkMode? ' dark-violet-input':'input'} onChange={changeHandler}value={title} onKeyDown={keyHandler}></input>

            <BsSearch className={DarkMode ? 'search-btn dark-white':'search-btn'} onClick={clickHandler}></BsSearch>
        </div>
        
        <div className='filter-parent'>
        {
          filterClicked? (
            <div className='filter-con'  >
                <button className={DarkMode? 'filer-btn dark-filer dark-white':'filer-btn'} onClick={filerHandler}>Filter
                <BsChevronDoubleDown  className='flip'></BsChevronDoubleDown>
                </button>
                <div className={DarkMode? 'filter-types  dark-filter-types':'filter-types'}>
                  <button onClick={cathandler} className={DarkMode? 'normal none-dark ':'normal'}>Most Popular Movies</button>
                  <button onClick={cathandler} className={DarkMode? 'normal none-dark':'normal'}>Most Popular Series</button>
                  <button onClick={cathandler} className={DarkMode? 'normal none-dark':'normal'}>Top BoxOffice 200</button>
                  <button onClick={cathandler} className={DarkMode? 'normal none-dark':'normal'}>Top BoxOffice Last Weekend 10</button>
                  <button onClick={cathandler} className={DarkMode? 'normal none-dark':'normal'}>Top Rated 250</button>
                  <button onClick={cathandler} className={DarkMode? 'normal none-dark':'normal'}>Top Rated English 250</button>
                  <button onClick={cathandler} className={DarkMode? 'normal none-dark':'normal'}>Top Rated Lowest 100</button>
                  <button onClick={cathandler} className={DarkMode? 'normal none-dark':'normal'}>Top Rated Series 250</button>
                </div>
            </div>
          ) : (
            <button className={DarkMode? 'filer-btn dark-filer dark-white':'filer-btn'} onClick={filerHandler}>Filter
            <BsChevronDoubleDown></BsChevronDoubleDown>
            </button>
            )
        }
        
        </div>
        
        <div onClick={modeHandler}>
        {
          DarkMode? (<MdOutlineLightMode className='mode light-icon'></MdOutlineLightMode>):(<MdDarkMode className='mode'></MdDarkMode>)
        }
        </div>

    </div>
  )
}

export default Navbar
