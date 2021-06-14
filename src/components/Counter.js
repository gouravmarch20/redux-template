import React from 'react'
import { useSelector , useDispatch} from 'react-redux'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => {
          dispatch({type:'INCREMENT'})
        }}
      >
        Increment
      </button>
    </>
  )
}

export default Counter
