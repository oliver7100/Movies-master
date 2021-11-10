import React from "react";

// desired thumbnail dimensions
const IMG_API = "orig-93x165";
const RATING = 1;

const Movie = ({plprogram$titleLocalized, plprogram$thumbnails, description, title, guid, plprogram$ratings}) => {
    // try to grab movie thumbnail url. Default to null if desired dimensions is not defined

      //Normal if statement, but for more readable purposes I made an if statement for a better example. 
    const thumbnail = plprogram$thumbnails[IMG_API] 
    ? plprogram$thumbnails[IMG_API]['plprogram$url'] 
    : null;

    console.log(plprogram$ratings.length);
    const movieRatings = plprogram$ratings.length > 0
    ?  plprogram$ratings[0]['plprogram$rating'] : "This Movie hasn't been rated yet." ;
    
    
    let movieTitle = title;

    if (plprogram$titleLocalized.da)
    {
        movieTitle = plprogram$titleLocalized.da
    }

    return <div className="movie">
      <img src={thumbnail} alt={movieTitle}/>
        <div className="movie-info">
            <h3>{movieTitle}</h3>
          <p>{movieRatings}</p>
        </div>

      <div className="movie-over">
        <h2>Overview</h2>
        <p>{description}</p>
      </div>
    </div>
};

export default Movie;