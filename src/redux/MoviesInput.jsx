import React from 'react'
import { useDispatch } from 'react-redux'

const MoviesInput = () => {

    const dispatch=useDispatch()

  return (
    <div>
      <input value={()=>dispatch(set)}></input>
    </div>
  )
}

export default MoviesInput
