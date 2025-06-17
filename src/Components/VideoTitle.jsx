import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { BsInfoSquare } from "react-icons/bs";
const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className='flex  '>
        <button className='hover:bg-opacity-80 bg-white p-4 px-12 text-xl  rounded-md text-black flex justify-center items-center'><FaPlay />Play</button>
        <button className='hover:bg-opacity-80 bg-gray-500 p-4 px-12 text-xl rounded-md mx-2 flex  items-center'><BsInfoSquare />More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
