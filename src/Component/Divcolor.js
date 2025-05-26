import React, { useEffect, useState } from 'react'
import ComB from './ComB'

function Divcolor() {
    const[color,setColor]=useState("blue")
    const change=(color)=>{
        setColor(ComB)
    }
    useEffect(()=>{
        document.body.style.backgroundColor=color
    },[ComB])
  return (
    <div>Divcolor
        <button onClick={()=> change("yellow")}>Click Me</button>
        
        
    </div>
  )
}

export default Divcolor