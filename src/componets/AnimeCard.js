import React from 'react'

const AnimeCard = (props) => {

    let data = props.data;
    let setClicked = props.setClicked;
    let Clicked = props.Clicked;
    let setClickedData = props.setClickedData;

    function clickHandler(){
      setClickedData(data);
      setClicked(!Clicked);
    }

  return (
    <div className='anime-card' onClick={clickHandler}>
      <img src={data.images.jpg.image_url} alt='image' className='anime-img'></img>
      <p className='anime-title anime-text'>{data.title_english}</p>
      <p className='anime-epi anime-text'>Episodes: {data.episodes}</p>
      <p className='anime-status anime-text'>Status: {data.status}</p>
    </div>
  )

}

export default AnimeCard
