import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {
const gpt=useSelector(store=>store.gpt);
const {movieResults,movienames}=gpt;
if(!movienames)return null;
  return (
    <div className='p-4 m-4 bg-black bg-opacity-90 text-white'>
      <div>
        {movienames.map((movie,index)=> <MovieList key={movie} title={movie} movies={movieResults[index]} /> )}
      </div>
    </div>
  )
}

export default GptMovieSuggestions
