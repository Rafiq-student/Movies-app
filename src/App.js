
import { useState,useEffect } from 'react';
import './App.css';
import MoviesCard from './MoviesCard';
import searchIcon from './search.svg'


const API_URL = "http://www.omdbapi.com?apikey=dfb2c155";

function App() {
  const [movies, setMovies]=useState([])
  const[searchTerm, setSearchTerm]=useState()
  const searchMovies=async(title)=>{
    const response=await fetch (`${API_URL}&s=${title}`)
    const data=await response.json();

    setMovies(data.Search)
   
  }

  useEffect(()=>{
    searchMovies('Spiderman')
  },[])
  return (
  
    <div className="App">
      <h1>Movies Chart</h1>
      <div className="search">
        <input type="text" placeholder='Search for movies' 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}/>
        <img src={searchIcon} alt="Search" 
        onClick={()=>searchMovies(searchTerm)}/>
      </div>
      {
        movies?.length>0
        ?(
          <div className="container">
       { movies.map((movie)=>(
          <MoviesCard movie={movie}/>
        ))}
        </div>

        ):
        (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
     
    </div>
  );
}

export default App;
