import React from 'react'
import { useSelector } from 'react-redux'

function ComponentB() {

    const {data}=useSelector((store)=>{
        return store.testReducer;
    })

  return (
    <div>
        <h1>Your Text</h1>
        <p>{data}</p>
    </div>
  )
}

export default ComponentB