import React,{useState} from "react";
import moviesData from "../data/moviesData";
import MovieDetails from "./MovieDetails";

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
   
   console.log(selectedMovie);

    return(
        <div>
                <div className="movie-list">
                        {
                        moviesData.map((value, index)=>(
                                <p onClick={()=>setSelectedMovie(value)}>{value.title}</p>
                        ))
                        }
                        
                </div>
                <MovieDetails movie={selectedMovie}/>
        </div>
    )
}

export default MovieList;