import './App.css';
import {Route, Routes} from 'react-router-dom'
import About from './Component/ReactRouter2/Pages/About';
import Contact from './Component/ReactRouter2/Pages/Contact';
import Home from './Component/ReactRouter2/Pages/Home';
import Header from './Component2/Header';
import UserDetails from './Component/ReactRouter2/Pages/UserDetails';





function App() {


  return (
    <div>
      <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path=':Id' element={<UserDetails/>}/>


    </Routes>
    
    </div>
   
  )
}







export default App;
