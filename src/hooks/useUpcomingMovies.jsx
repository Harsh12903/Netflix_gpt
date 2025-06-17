import { useDispatch, useSelector } from "react-redux";
import { api_options } from "../Utils/constants";
import { addUpcomingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const UpcomingMovies=useSelector((store)=>store.movies.UpcomingMovies); 

    const getUpcomingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',api_options);
      const json=await data.json();
      (json.results);
      dispatch(addUpcomingMovies(json.results))
    };
    useEffect(()=>{
     !UpcomingMovies && getUpcomingMovies()
       
    },[])
};
export default useUpcomingMovies