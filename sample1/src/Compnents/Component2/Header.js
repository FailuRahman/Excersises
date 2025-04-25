import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
  return (
    <div className='header'>
        <Link to='/' ><span>Home</span></Link>
        <Link to='about' ><span>About</span></Link>
        <Link to='contact' ><span>Contact</span></Link>
        <Link to=':Id' ><span>UserId</span></Link>




    </div>
  )
}

export default Header