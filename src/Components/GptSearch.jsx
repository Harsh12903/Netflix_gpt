import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { bgimage } from '../Utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img src={bgimage} alt="" />
            </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
