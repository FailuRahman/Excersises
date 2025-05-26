import React, { useEffect,useRef} from 'react'


function Comp1() {
    const ass = useRef(null)
    useEffect(()=>{
        ass.current.focus()

    },[])
    
  return (
    <div>Comp1
        <input ref={ass}type='text'/>
    </div>
  )
}

export default Comp1