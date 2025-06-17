import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { Route, Routes} from 'react-router-dom'


const Body = () => {
  return (
    <>
    <div>
      
    </div>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/browse' element={<Browse/>}/>
    </Routes>
    </>
  )
}

export default Body
