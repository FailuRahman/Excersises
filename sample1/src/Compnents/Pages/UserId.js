import React from 'react'
import { useParams } from 'react-router-dom'

function UserId() {

    const{Id}=useParams()
  return (
    <div>
        <h1>Your id is {Id}</h1>
    </div>
  )
}

export default UserId