import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from "../src/Home"
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Herosection/Hero'
import About from './Components/Aboutus/About'
import Explore from './Components/Explore/Explore'
import Timeline from "./Components/Timeline/Timeline"
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
           <Route path="/aboutus" element={<About />} />
        </Routes>
        <Explore />
        <Timeline />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App