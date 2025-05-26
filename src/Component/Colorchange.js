import React, { useState } from 'react';

function Colorchange() {
const [first , setFirst] = useState(true);
const handleCol=()=>{
    setFirst(!first)
}
  return (
    <div>
        <div onClick={handleCol} style={first? {backgroundColor:"red",width:"60px",height:"30px"}: {backgroundColor:"blue",width:"60px",height:"30px"} } >{first?<p>failu</p>:<p>1</p>}</div>
        <div onClick={handleCol} style={first? {backgroundColor:"blue",width:"60px",height:"30px"}: {backgroundColor:"red",width:"60px",height:"30px"}}>{first?<p>1</p>:<p>failu</p>}</div>
    </div>
  )
}

export default Colorchange; 

