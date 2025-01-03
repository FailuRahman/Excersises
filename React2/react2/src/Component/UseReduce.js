import React,{useReducer} from 'react'

function UseReduce() {
    const initialState={
        countOne :0,
        countTwo :5,
        
    }
    function reducrer(state,action){
        switch(action.type){
        case "increament":
            return {...state,countOne: state.countOne + action.value};
        case "decreament":
                return {...state,countOne : state.countOne - action.value};
        case "increamentby5":
                return {...state,countOne: state.countOne + action.value};
               
        case "decreamentby5":
                return {...state,countOne : state.countOne - action.value};
               
        case "increamentc2":
                return {...state,countTwo :state.countTwo + action.value};
        case "decreamentc2":
                return {...state,countTwo : state.countTwo - action.value};
        case "increamentc2by5":
                return {...state,countTwo: state.countTwo + action.value};
                       
        case "decreamentc2by5":
                return {...state,countTwo : state.countTwo - action.value};
        case "reset":
                return initialState;
        default :
                return state;  

            
        }
        
    }
    function increament(){
        dispatch({type : "increament" , value : 1})
    }
    function decreament(){
        dispatch({type : "decreament" , value : 1})
    }
    function increamentby5(){
        dispatch({type : "increamentby5" , value : 5})
    }
    function decreamentby5(){
        dispatch({type : "decreamentby5" , value : 5})
    }
    function increamentc2(){
        dispatch({type : "increamentc2" , value : 1})
    }
    function decreamentc2(){
        dispatch({type : "decreamentc2" , value : 1})
    }
    function increamentc2by5(){
        dispatch({type : "increamentc2by5" , value : 5})
    }
    function decreamentc2by5(){
        dispatch({type : "decreamentc2by5" , value : 5})
    }
    function reset(){
        dispatch({type : "reset"})
    }
    
    
    
    const[state,dispatch]=useReducer(reducrer,initialState)
  return (

    <div>
        <h1>Counters</h1>
        <p>CountOne : {state.countOne} 
           
        </p>
        <div>
        <button onClick={increament}>Increament</button >
        <button onClick={decreament}>Decreament</button>
        </div>
        <button onClick={increamentby5}>+5</button>
        <button onClick={decreamentby5}>-5</button>
        <p>CountTwo: {state.countTwo} </p>
        <div>
        <button onClick={increamentc2}>Increament</button>
        <button onClick={decreamentc2}>Decreament</button>
        </div>
        <button onClick={increamentc2by5}>+5</button>
        <button onClick={decreamentc2by5}>-5</button>
        <p><button onClick={reset}>Reset</button></p>
        
    </div>
  )
}

export default UseReduce