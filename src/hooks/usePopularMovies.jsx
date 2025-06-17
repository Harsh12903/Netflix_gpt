import { useDispatch, useSelector } from "react-redux";
import { api_options } from "../Utils/constants";
import { addPopularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const PopulaMovies=useSelector((store)=>store.movies.PopulaMovies);

    const getPopularMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',api_options);
      const json=await data.json();
      (json.results);
      dispatch(addPopularMovies(json.results))
    };
    useEffect(()=>{
      !PopulaMovies && getPopularMovies()
       
    },[])
};
export default usePopularMovies