import React ,{createContext, useState}from 'react'
import SubContext1 from './SubContext1';
import SubContext2 from './SubContext2';
import SubContext3 from './SubContext3';


export const userContext = createContext()

function Context() {
    const[counter,setCounter]= useState(0);
    const[counter2,setCounter2]= useState(0);
    
  return (
    <div>
        <h1>First Counter</h1>
        <userContext.Provider value={{counter,setCounter,counter2,setCounter2}}>
            <SubContext1/>
            <SubContext2/>
            <SubContext3/>

        </userContext.Provider>
    
    
    
    
    
    </div>
  )
}

export default Context