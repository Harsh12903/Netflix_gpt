import React, { useRef } from 'react'
import Lang from '../Utils/Lang'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../Utils/openai';
import { api_options } from '../Utils/constants';
import { addGptMovieResult } from '../Utils/gptSlice';

const GptSearchBar = () => {
  const langkey=useSelector(store=>store.config.lang);
  const searchtext=useRef(null);
  const dispatch=useDispatch();
// serach moovie in tmdb
  const searchMovieTmdb=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="
      +movie+"&include_adult=false&language=en-US&page=1",api_options);
    const json=await data.json()
    return json.results;
  }

  const handlegptsearchclick=async()=>{
    console.log(searchtext.current.value);

    const query="Act as a Movie Recommendation system and suggest some movies for the query"+searchtext.current.value+". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptresults=await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptresults.choices){//handling error
      }
    const gptMovies=gptresults.choices?.[0]?.message?.content.split(",");
    
    const promisearray=gptMovies.map(movie=>searchMovieTmdb(movie));
    
    const tmdbResults=await Promise.all(promisearray);

    dispatch(addGptMovieResult({movienames:gptMovies,movieResults:tmdbResults}))
  }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md' onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchtext} type="text" className='p-4 m-4 col-span-9' placeholder={Lang[langkey].placeholder}/>
        <button className='py-2 px-4 bg-red-700 m-4 text-white col-span-3 rounded-lg'
        onClick={handlegptsearchclick}>{Lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
