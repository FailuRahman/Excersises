
import React from 'react'

import { useParams } from 'react-router-dom'

function UserDetails() {
    const {Id}=useParams()

  return (
    <div>

    <h1>Your {Id} </h1>
    </div>
  )
}

export default UserDetails