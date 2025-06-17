import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false, 
        gptMovies:null,
        movienames:null,
        movieResults:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const {movienames,movieResults}=action.payload;
            state.movienames=movienames;
            state.movieResults=movieResults;
        }
    }
})

export const{toggleGptSearchView,addGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;