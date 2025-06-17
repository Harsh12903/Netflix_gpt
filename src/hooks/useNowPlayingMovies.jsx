import { useDispatch, useSelector } from "react-redux";
import { api_options } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);
    const getNowPlayingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',api_options);
      const json=await data.json();
      (json.results);
      dispatch(addNowPlayingMovies(json.results))
    };
    useEffect(()=>{
      !nowPlayingMovies && getNowPlayingMovies()
       
    },[])
};
export default useNowPlayingMovies