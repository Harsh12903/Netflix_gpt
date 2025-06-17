import React from 'react'
import { img_cdn } from '../Utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-48 pr-4'> 
      <img  alt="Movie Card"
      src={img_cdn+posterPath} />
    </div>
  )
}

export default MovieCard
