import React,{useContext} from 'react'
import { userContext } from './Context'

function SubContext3() {
    const{counter2,setCounter2}=useContext(userContext)
  return (
    <div>

    <h1>Counter value Three : {counter2}</h1>
    <button onClick={()=>setCounter2(counter2 + 1)}>Click Me</button>
    
    </div>
  )
}

export default SubContext3