import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { storeDocument } from '../redux/action';


function ComponentA() {

  const dispatch=useDispatch();

  return (
    <div>
      <input type="text" placeholder='Enter Text' onChange={(e)=>{
        dispatch(storeDocument(e.target.value))
      }}/>
    </div>
  )
}

export default ComponentA