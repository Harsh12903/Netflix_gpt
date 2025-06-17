import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../Utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { avatar, Logo, supportedlang } from '../Utils/constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';

const Header = () => {
  const user=useSelector((store)=>store.user)
  const  navigate  = useNavigate();
  const handlesignout=()=>{
    signOut(auth).then(()=>{
    }).catch((err)=>{

    })
  }
  const gptsearch=useSelector((store)=>store.gpt.showGptSearch)
  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
        // ...
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
    
  },[]);
  const handlegpt=()=>{
    dispatch(toggleGptSearchView())
  }
  const handlelangchange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className='flex flex-col md:flex-row absolute w-screen py-2 px-8  bg-gradient-to-b from-black z-10 justify-between'>
      <img src={Logo} className='w-44 mx-auto md:mx-0' alt="" />
      {user && <div className='flex p-2'>
        {gptsearch && <select className='p-2 bg-gray-900 text-white m-2' onChange={handlelangchange}>
          {supportedlang.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button onClick={handlegpt} className={`py-2 px-4 mx-4 my-2 ${gptsearch?"bg-red-700":"bg-purple-800"}  text-white rounded-md`}>{gptsearch?"Home":"GPT Search"}</button>
        <img className='w-12 h-12 ' src={avatar} alt="usericon" />
        <button onClick={handlesignout} className='font-bold text-white'>(Sign out)</button>
      </div>}
    </div>
  )
}

export default Header
