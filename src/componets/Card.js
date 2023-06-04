import React from 'react'

const Card = (props) => {
    let data = props.data;
    let setTitle = props.setTitle;
    let setClicked = props.setClicked;

    function clickHandler(){
        setTitle(data.titleText.text);
        setClicked(true);
    }

  return (

        <div className='card' onClick={clickHandler}>
    {
        data.primaryImage!==null ? (
            <img src={data.primaryImage.url} alt="Loading image not found" className='card-img'></img> 
            ) : (<div>Image is not present</div>)
    }

        <div className='text-con'>

            <div className='card-heading'>
                {data.titleText.text}
            </div>

            <div className='card-date'>

            {
                data.releaseDate===null ? (
                    <span>NO DATE</span>
                ) : (

                    <div>

                    Date-: 
                {
                    data.releaseDate.day===null ? (
                        <span>NULL</span>
                    ) : (<span>{data.releaseDate.day}/</span>)
                }

                {
                    data.releaseDate.month===null ? (
                        <span>NULL</span>
                    ) : (<span>{data.releaseDate.month}/</span>)
                }

                {
                    data.releaseDate.year===null ? (
                        <span>NULL</span>
                    ) : (<span>{data.releaseDate.year}/</span>)
                }
                 

                    </div>

                       
                )
            }

            
            </div>

            <div className='card-rating'>
                Position: <span>{data.position}</span>
            </div>

            <div className='card-id'>
                IMDB id: {data.id}
            </div>
       

        </div>

        
        </div>
  )
}

export default Card
