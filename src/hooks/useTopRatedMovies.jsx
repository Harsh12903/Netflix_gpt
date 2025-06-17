import { useDispatch, useSelector } from "react-redux";
import { api_options } from "../Utils/constants";
import { addTopRatedMovies} from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    const TopRatedMovies=useSelector((store)=>store.movies.TopRatedMovies);

    const getTopRatedMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',api_options);
      const json=await data.json();
      (json.results);
      dispatch(addTopRatedMovies(json.results))
    };
    useEffect(()=>{
     !TopRatedMovies && getTopRatedMovies()
       
    },[])
};
export default useTopRatedMovies