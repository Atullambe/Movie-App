import React from "react";

const MovieDetails = ({movie}) => {


    return(
        <div className="movie-details">
                   {
                      movie !="" && (
                        <div>
                            <h1>{movie.title}</h1>
                            <p>{movie.actor}</p>
                            <p>{movie.genre}</p>
                            <p>{movie.director}</p>
                        </div>
                      )
                   }
             </div>
    )
}

export default MovieDetails;