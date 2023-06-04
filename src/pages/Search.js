import React from 'react'
import searchloader from '../assets/search-loader.gif'
import notFound from '../assets/404-notfound.gif'
import darknotFound from '../assets/404.gif'
import {FaPlay} from 'react-icons/fa'



const Search = (props) => {
    
    let data = props.output; 
    let isInput = props.isInput;
    let searchloading= props.searchloading;
    let DarkMode = props.DarkMode;

  return (
    <div className={DarkMode? 'search-con dark-white-2':'search-con'}>

        {
            searchloading ? (
                <img src={searchloader} alt="Loading.." className='search-loader'></img>
            ) : (
                !isInput ? (
                <div className='not-found'>
                    <img src={DarkMode? darknotFound:notFound} alt="NOT FOUND"></img>
                </div>
            ) : (
            
                <div className='add-data'>
                    <div className='add-data-title'>{data.Title}</div>
                    <div className='search'>
                        <div className='info-con'>
                            
                            <img src={data.Poster} alt="This is poster" className='info-poster'></img>
                            <div className='info-rating'>
                                <p className='info-rating-heading'>Ratings</p>
                                <ul className='info-rating-list'>
                                    <li className='info-rating-imdb'>IMDB Rating : {data.imdbRating}</li>
                                    {
                                        data.Ratings.map( rating => 
                                            <li className='info-rating-item'>{rating.Source} : {rating.Value}</li>
                                        ) 
                                    }
                                </ul>
                            </div>
                        </div>
                        
                        <div className='data-con'>
                            <div className='data-plot'>
                                {data.Plot}
                            </div>
                            <div className='cast-con'>
                                <div className='actor-con'>
                                    <ul className='actor-list'>
                                    Actors: <br></br>
                                    {
                                        data.Actors.split(',').map( actor =>(
                                            <li>{actor}</li>
                                        ) )
                                    }
                                    </ul>
                                    <ul className='director-list'>
                                        Director: <br></br>
                                        {data.Director}
                                    </ul>
                                    <ul className='writer-list'>
                                        Writers: <br></br>
                                        {data.Writer}
                                    </ul>
                                    
                                </div>
                                <div className='release-con'>
                                    <p>Relese Date: {data.Released}</p>
                                    <p>Country: {data.Country}</p>
                                    <p>Language: {data.Language}</p>
                                    <p>Production: {data.Production}</p>
                                </div>
                            </div>
                            <div className='watch-con'>
                                    <a className='watch-text' href={'https://solarmovie.pe/search/'+data.Title.replace(/\s+/g, '-')} target='blank'>Watch Now 
                                    <FaPlay></FaPlay>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
            )
        }

    </div>
  )
}

export default Search
