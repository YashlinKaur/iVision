import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Herosection/Hero'
import About from './Components/Aboutus/About'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Components/Login/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
           <Route path="/aboutus" element={<About />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App