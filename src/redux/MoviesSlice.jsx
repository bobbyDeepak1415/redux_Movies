import { createSlice } from "@reduxjs/toolkit"


const initialState={}

const MoviesSlice=createSlice({
    name:"MoviesApp",
    initialState,
    reducers:{
addMovie:()=>{

}
    }

})


export const {addMovie}=MoviesSlice.reducer