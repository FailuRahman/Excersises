import React, { useEffect, useState } from 'react'

function compA() {
    const[color,setColor]= useState("blue")
    const clickchange=(color)=>{
        setColor(color)
        
    }
    useEffect(()=>{
        
    })
  return (
    <div>compA
        <button onClick={()=> clickchange("yellow")}>Click Me</button>
    </div>
  )
}

export default compA