import { useDispatch } from "react-redux";
import { api_options } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieid)=>{
    const dispatch=useDispatch();
    // fetch trailer video
    const getMovieVideos=async() =>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieid+ '/videos?language=en-US', api_options);
        const json=await data.json();
        const filterdata=json.results.filter((video)=>video.type==="Trailer");    
        const trailer=filterdata.length? filterdata[0]:json.results[0];    
        dispatch(addTrailerVideo(trailer));    
    }
    useEffect(()=>{
        getMovieVideos();
    },[]);
}
export default useMovieTrailer;