import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop";
import Navbar from './Components/Navbar/Navbar'
import Home from "../src/Home"
import Hero from './Components/Home/Hero'
import About from './Components/Aboutus/About'
import Login from './Components/Login/Login'
import MacAccessories from './Components/Accessories/MacAccessories'
import Storemain from './Components/Store/Storemain/Storemain'
import Register from './Components/Register/Register'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/aboutus" element={<About />} />
           <Route path="/login" element={<Login />} />
           <Route path="/mac" element={<MacAccessories />} />
           <Route path="/Store" element={<Storemain/>} />
           <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App