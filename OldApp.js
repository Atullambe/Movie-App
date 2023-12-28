import {useState} from "react";
import "./style.css";

const moviesData = [
    {"title": "3 Idiots", "actor": "Aamir Khan", "genre": "Comedy/Drama", "director": "Rajkumar Hirani"},
    {"title": "Dangal", "actor": "Aamir Khan", "genre": "Biographical/Sports", "director": "Nitesh Tiwari"},
    {"title": "Bahubali: The Beginning", "actor": "Prabhas", "genre": "Action/Fantasy", "director": "S.S. Rajamouli"},
    {"title": "Lagaan", "actor": "Aamir Khan", "genre": "Drama/Sports", "director": "Ashutosh Gowariker"},
    {"title": "PK", "actor": "Aamir Khan", "genre": "Comedy/Drama", "director": "Rajkumar Hirani"},
    {"title": "Sholay", "actor": "Amitabh Bachchan", "genre": "Action/Adventure", "director": "Ramesh Sippy"},
    {"title": "Bajrangi Bhaijaan", "actor": "Salman Khan", "genre": "Drama/Action", "director": "Kabir Khan"},
    {"title": "Gully Boy", "actor": "Ranveer Singh", "genre": "Musical/Drama", "director": "Zoya Akhtar"},
    {"title": "Queen", "actor": "Kangana Ranaut", "genre": "Comedy/Drama", "director": "Vikas Bahl"},
    {"title": "Andhadhun", "actor": "Ayushmann Khurrana", "genre": "Thriller/Comedy", "director": "Sriram Raghavan"}
]

const OldApp = () => {
    
    const [selectedMovie, setSelectedMovie] = useState(""); 
  

    function fetchMovieDetails(movie){
          console.log(movie)
          setSelectedMovie(movie)
    }
    

    return(
        <div>
             <div className="movie-list">
                {
                   moviesData.map((value, index)=>(
                        <p onClick={()=>fetchMovieDetails(value)}>{value.title}</p>
                   ))
                }
             </div>

             <div className="movie-details">
                   {
                      selectedMovie !="" && (
                        <div>
                            <h1>{selectedMovie.title}</h1>
                            <p>{selectedMovie.actor}</p>
                            <p>{selectedMovie.genre}</p>
                            <p>{selectedMovie.director}</p>
                        </div>
                      )
                   }
             </div>
        </div>
    )
}

export default OldApp;