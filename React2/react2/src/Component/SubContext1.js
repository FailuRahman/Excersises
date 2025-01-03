import React ,{useContext}from 'react'
import { userContext } from './Context'

function SubContext1() {
    const{counter,setCounter}=useContext(userContext);
  return (
    <div>
        <h1>Counter value : {counter}</h1>
        <button onClick={()=>setCounter((counter)=>counter + 1)}>Click Me</button>
    </div>
  )
}

export default SubContext1