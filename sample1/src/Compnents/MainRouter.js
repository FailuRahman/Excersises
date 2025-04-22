import React from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Header from './Component2/Header'
import UserId from './Pages/UserId'

function MainRouter() {
  return (
    <BrowserRouter>
    <div>
        <Header/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path=':Id' element={<UserId/>}/>
i

        </Routes>


    </div>
    </BrowserRouter>
  )
}

export default MainRouter