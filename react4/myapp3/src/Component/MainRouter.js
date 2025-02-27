import React, { useContext } from 'react'
import { Link, Route, Router } from 'react-router-dom'
import Home from './pages/Home'


function MainRouter() {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
       
    </div>
  )
}

export default MainRouter