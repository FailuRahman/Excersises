import React, { useState,useReducer } from 'react'


function reducer(state,action){
    switch(action.type){
        case 'increament' :
            return{Count:state.Count + 1 }
        case 'decreament' :
            return{Count:state.Count - 1}
        default :
        return state;    
    } 
}

function Forms() {
    const[state,dispatch] = useReducer(reducer,{Count: 0})
    // const[Count,setCount] = useState(0);
    function Increament(){
        dispatch({type : 'increament'});
    }
    function Decreament(){
        dispatch({type : 'decreament'});
    }
  return (
    <div>
        <h1>useReducer Hooks</h1>
        <button onClick={Increament}>+</button>
        <span>{state.Count}</span>
        <button onClick={Decreament}>-</button>
    </div>
  )
}

export default Forms