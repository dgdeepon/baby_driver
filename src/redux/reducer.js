import {  REQ, SUCCESS } from "./actionType";


const init={
    data:'',
    isLoading:false,
};

export const reducer=(state=init,action)=>{
    switch(action.type){
        case REQ:
            return {
                ...state,
                data:'',
                isLoading:true,
            }
        case SUCCESS:
            return{
                ...state,
                data:action.payload,
                isLoading:false
            }    
        default:
            return state;
    }
}