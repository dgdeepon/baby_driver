import { REQ, SUCCESS } from "./actionType"


export const storeDocument=(data)=>(dispatch)=>{
    dispatch({type:REQ});
    dispatch({type:SUCCESS,payload:data});
}