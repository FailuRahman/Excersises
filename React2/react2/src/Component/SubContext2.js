import React,{useContext} from 'react'
import { userContext } from './Context'

function SubContext2() {
    const{counter}=useContext(userContext)
  return (
    <div>
        <h1>Counter value Two :{counter}</h1>
    </div>
  )
}

export default SubContext2