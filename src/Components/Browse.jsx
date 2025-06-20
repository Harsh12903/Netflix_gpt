import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  // Fetch data from tmdb api and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      {showGptSearch?(
        <GptSearch/>
      ):(<>
      <MainContainer/>
      <SecondaryContainer/>
      </>)}
      {/*
       MainContainer
          -Video Background
          -Video Title
       secondaryContainer
          -Movielist * n
              -moviecards * n
       */}
    </div>
  )
}

export default Browse
