import axios from 'axios';
import React, { useState } from 'react';
import CardItem from './CardItem';


const Card = () => {

  const [movieInput, setMovieInput] = useState("")
  const [movies, setMovies] = useState([])

  const moviesJSX = movies.map(
    m => <CardItem titre={m.title}
              description={m.overview}
              imageUrl={"https://image.tmdb.org/t/p/w500/" + m.poster_path}
              ></CardItem>
  )

  const searchFilm = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieInput}&api_key=15ee02fd15e0126e4f2fb56a8343bb85&language=en-US&page=1&include_adult=false`)
      .then((res) => {
        setMovies(prev => res.data.results)
      });
  }


  return (
    <div className="card-component">
      <div className="containerBlancSearch">
        <h1 className='welcome'>Bienvenue,</h1><br />
        <h2 className='welcome-sub-text'>Des millions de films, émissions télévisées et artistes...</h2>
          
        <form className="form-wrapper">
          
          <input type="text" placeholder='Entrez un titre de film' 
          id='search' value={movieInput} onChange={e => setMovieInput(e.target.value)}/>
          
          <input type="button" value="Rechercher" onClick={searchFilm}/>

        </form>


      </div>
      <div className="card-container">

        {moviesJSX}

      </div>
      <div className="result"></div>
    </div>
  );
};

export default Card;