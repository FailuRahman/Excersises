import React ,{useEffect,useState}from 'react'

function ComB() {
    const[color,setColor]=useState("blue")
    const change=(color)=>{
        setColor(color)
    }
    useEffect(()=>{
        document.body.style.backgroundColor=color
    },[color])
  return (
    <div>Divcolor
        <button onClick={()=> change("yellow")}>Click hello</button>
        
        
    </div>
  )
}


export default ComB