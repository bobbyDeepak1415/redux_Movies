import React from 'react'
import { useSelector } from 'react-redux'

const MoviesList = () => {

  const movies=useSelector(state=>state.movies.value)
  return (
    <div>
      {movies.map((movie)=>{

        return <li>{movie}</li>

      })}
      
    </div>
  )
}

export default MoviesList
