import React,{useReducer} from 'react'

function Reducer() {
    const initialState ={
        count : 1,
    }


    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + action.value };
        }

    }
    
    
    
    

    function increment(){
        dispatch({type : "increment" ,value : 1})
    }



    const [state,dispatch]=useReducer(reducer,initialState)


  return (
    <div>
        <p>{state.count}</p>
        <button onClick={increment}>click +</button>



    </div>
  )
}

export default Reducer


