import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'



function Header() {
  return (


    <div className='header'>
      <Link to='/'><span>Home</span></Link><br/>

      <Link to='about'><span>About</span></Link><br/>
      <Link to='contact'><span>Contact</span></Link><br/>
      <Link to= ':Id'><span>User</span></Link><br/>
      
   
    </div>
  )
}

export default Header