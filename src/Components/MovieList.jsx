import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='px-6 '>
        <h1 className='text-3xl py-6 text-white'>{title}</h1>
        <div className='flex overflow-x-auto no-scrollbar'>
            <div className='flex'>
                {movies?.map(m=><MovieCard key={movies.id} posterPath={m.poster_path}/>) }
            </div>
        </div>
    </div>
  )
}

export default MovieList
