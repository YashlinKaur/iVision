import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
<<<<<<< Updated upstream
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Herosection/Hero'
import About from './Components/Aboutus/About'
=======
import Navbar from './Navbar'
import Home from './Home'
import Login from './Components/Login/Login'
>>>>>>> Stashed changes

const App = () => {
  return (
    <div>
      <BrowserRouter>
<<<<<<< Updated upstream
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero/>} />
           <Route path="/aboutus" element={<About />} />
=======
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App