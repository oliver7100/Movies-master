import logo from './logo.svg';
import React, {useEffect , useState} from 'react';
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=series"

const SEARCH_API = "curl --location --request GET 'https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas/106608168011?form=json'"

function App() {
  const [movies, setMovies] = useState([]); 
  const [moviesGenre, setMoviesGenre] = useState({});


  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.entries);
    });
  },[]);

  let genres = {}
  
  function sortGenres(movie){
    movie["plprogram$tags"].map(tag=>{

      if(!genres.hasOwnProperty(tag['plprogram$title']) )
      {
        genres[tag['plprogram$title']] = []

      }
      genres[tag['plprogram$title']].push(movie);

    })
  }
  if(Object.keys(moviesGenre).length == 0)
  {
    movies.map(sortGenres);
    setMoviesGenre(genres);

  }
  console.log(moviesGenre);

  return movies.map((movie, index) => 
    <Movie key={index} {...movie}/>
  );
};


export default App;