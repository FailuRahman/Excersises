import React, { useState,useEffect } from "react";


const Test = () =>{
    useEffect(()=>{
        console.log("Runnig");
        
        return ()=>{
          console.log("Unmount");
          
        }
    
      },[]);

      return (
        <h1>Test Component</h1>
      )
}
export default Test;