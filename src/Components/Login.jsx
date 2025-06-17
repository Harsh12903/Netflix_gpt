import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/Validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { bgimage } from '../Utils/constants';

function Login() {
  const [signin,setsignin] =useState(true);
  const togglesignup =()=>{
    setsignin(!signin);
  }
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const [err,seterr]=useState(null);
  const dispatch=useDispatch()
  const handleclick = ()=>{
    //validate form data
    var message =checkValidData(email.current.value,password.current.value);
    seterr(message)

    if(message)return;

    // Sigin sign up logic
    
    //sign up logic here
    if(!signin){
     createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const {uid,email,displayName} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        
        // ...
      
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      seterr(error.message)
      // ...
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterr(errorCode + " - " + errorMessage)
    // ..
  });   
    }
    else{
      // sign in logic here
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterr(errorCode + " - " + errorMessage)
  });
    }
  }
  return (
    <div >
        <Header/>
        <div className='absolute'>
            
        <img src={bgimage} alt="" />
        </div>
    
    <form onSubmit={(e)=>e.preventDefault()} className='p-12 absolute bg-black bg-opacity-75 w-1/4 my-44 mx-auto left-0 right-0 text-white'>
    <h1 className='p-2 m-2 text-3xl font-semibold font-serif '>{signin?"Sign In":"Sign Up" }</h1>
    {!signin &&
        <input type="text" placeholder='Full Name' className='rounded-md p-4 my-2 w-full bg-gray-700'/>
    }
    <input ref={email} type="text" placeholder='Email Address' className='rounded-md p-4 my-2 w-full bg-gray-700'/>
    <input ref={password} type="password" placeholder='Password' className='p-4 my-2 rounded-md w-full bg-gray-700'/>
    <p className='text-red-600 font-semibold'>{err}</p>
    <button className='p-4 my-4 mt-5 w-full rounded-md bg-gradient-to-b  from-red-600 to-red-900 text-white' onClick={handleclick}>Submit</button>
    <p onClick={togglesignup} className='cursor-pointer'>{signin?"New to Netflix? Sign Up Now":"Already registerd? Sign In Now"}</p>
    </form>
    </div>    
    

  )
}

export default Login
