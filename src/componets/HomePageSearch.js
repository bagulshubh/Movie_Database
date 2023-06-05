import searchloader from '../assets/search-loader.gif'
import notFound from '../assets/404-notfound.gif'
import {FaPlay} from 'react-icons/fa'

const HomePageSearch = (props) => {
    let changedata = props.changedata;
    let loading = props.loading;
    let isInput = true;

    // let myString = changedata.Title;
    // let Title = myString.replace(/\s+/g, '-');
    
  return (
    <div className='search-con'>

        {
            changedata.Response==="False"? (
                <img src={searchloader} alt="Not found sorry" className='not-found-homepagesearch'></img>
                
            ) : (

                loading ? (
                <img src={searchloader} alt="Loading.." className='not-found-homepagesearch'></img>
                
            ) : (
                !isInput ? (
                <div className='not-found'>
                    <img src={notFound} alt="NOT FOUND"></img>
                </div>
            ) : (
            
                <div className='add-data'>
                    <div className='add-data-title'>{changedata.Title}</div>
                    <div className='search'>
                        <div className='info-con'>
                            
                            <img src={changedata.Poster} alt="This is poster" className='info-poster'></img>
                            <div className='info-rating'>
                                <p className='info-rating-heading'>Ratings</p>
                                <ul className='info-rating-list'>
                                    <li className='info-rating-imdb'>IMDB Rating : {changedata.imdbRating}</li>
                                    {
                                        changedata.Ratings.map( rating => 
                                            <li className='info-rating-item'>{rating.Source} : {rating.Value}</li>
                                        ) 
                                    }
                                </ul>
                            </div>
                        </div>
                        
                        <div className='data-con'>
                            <div className='data-plot'>
                                {changedata.Plot}
                            </div>
                            <div className='cast-con'>
                                <div className='actor-con'>
                                    <ul className='actor-list'>
                                    Actors: <br></br>
                                    {
                                        changedata.Actors.split(',').map( actor =>(
                                            <li>{actor}</li>
                                        ) )
                                    }
                                    </ul>
                                    <ul className='director-list'>
                                        Director: <br></br>
                                        {changedata.Director}
                                    </ul>
                                    <ul className='writer-list'>
                                        Writers: <br></br>
                                        {changedata.Writer}
                                    </ul>
                                    
                                </div>
                                <div className='release-con'>
                                    <p>Relese Date: {changedata.Released}</p>
                                    <p>Country: {changedata.Country}</p>
                                    <p>Language: {changedata.Language}</p>
                                    <p>Production: {changedata.Production}</p>
                                </div>
                            </div>
                            <div className='watch-con'>
                                    { <a className='watch-text' /* href={'https://solarmovie.pe/search/'+changedata.Title.replace(/\s+/g, '-')}*/ target='blank' >Watch Now 
                                    <FaPlay></FaPlay>
                                    </a>
                                    }
                            </div>
                        </div>
                    </div>
                    

                </div>
                
            )
            )

            )
            
        }

    </div>
  )
}

export default HomePageSearch
