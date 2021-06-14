import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const Toggler = () => {
  const toggler = useSelector(state => state.toggler)
  const dispatch = useDispatch()
  return (
    <>
      <h1>toggle status : {toggler}</h1>
      <button onClick={()=>{
   dispatch({type:'ONTOGGLE'})      }}>Toggle</button>
    </>
  )
}

export default Toggler
