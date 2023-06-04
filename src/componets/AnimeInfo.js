import React from 'react'
import {FaPlay} from 'react-icons/fa'

const AnimeInfo = (props) => {
    let data = props.ClickedData;
    console.log(data);
  return (
    <div className='anime-info-card'> 

        <div className='anime-hero'>
            <div className='anime-basic'>
                <p className='anime-info-text heading-eng'>{data.title_english}</p>
                <p className='anime-info-text heading-jpn'>{data.title_japanese}</p>

                <img src={data.images.jpg.large_image_url} className='anime-info-img'></img>

                <p className='anime-info-text'>Season: {data.season}</p>

                <p className='anime-info-text'>Source: {data.source}</p>

                <p className='anime-info-text'>Rank: {data.rank}</p>

                <p className='anime-info-text'>Popularity: {data.popularity}</p>

                
            </div>

            <div className='syn-con'>
                <p className='background'> <span className='bold'>BackGround:</span>  {data.background}</p>

                <p className='syn'> <span className='bold'>Synopsis: </span> {data.synopsis} </p>

                <div className='rating-info-con'>

                    <div className='left-div'>
                        <p> Aired:  {data.aired.string}</p>

                        <p> Status: {data.status}</p>

                        <p> Duration: {data.duration} </p>

                        <p> Episodes: {data.episodes} </p>
                    </div>

                    <div className='right-div'>
                        <p> Broadcast: {data.broadcast.string} </p>

                        <p> Ranting: {data.rating} </p>

                        <p> Score: {data.score}  ScoredBy: {data.scored_by}</p>


                        <p> Favorites: {data.favorites}</p>

                    </div>

                </div>


            </div>
        </div>
 

        <div className='trailer-con'>
            <p className='trailer-heading'> Trailer</p>
            <a href={data.trailer.url} target='blank' className='trailer-link'>
            <img src={data.trailer.images.large_image_url} className='trailer-img'></img>
            <FaPlay className='play-icon'></FaPlay>
            </a>
        </div>

       

    </div>
  )
}

export default AnimeInfo
