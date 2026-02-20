import React from 'react'
import { useDispatch } from 'react-redux'

const MoviesInput = () => {

    const [newMovie,setNewMovie]

    const dispatch=useDispatch()


    const handleAddMovie=()=>{

    }

  return (
    <div>
      <input value={newMovie}></input>
      <button onClick={handleAddMovie}>Add</button>
    </div>
  )
}

export default MoviesInput
