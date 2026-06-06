import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop";
import Navbar from './Components/Navbar/Navbar'
import Home from './Home'
import About from './Components/Aboutus/About'
import Login from "./Components/Login/Login";
import Register from './Components/Register/Register'

import Storemain from './Components/Store/Storemain/Storemain'
import Latest from './Components/Store/Latest'

import MacAccessories from './Components/Accessories/MacAccessories'
import Keyboards from './Components/Accessories/Mac/Keyboards'
import Mice from './Components/Accessories/Mac/Mice'
import Hubs from './Components/Accessories/Mac/Hubs'
import Display from './Components/Accessories/Mac/Display'
import Audio from './Components/Accessories/Mac/Audio'
import Protection from './Components/Accessories/Mac/Protection'
import Latest from "./Components/Store/Latest"
import Iphone from "./Components/Store/Iphone"
import Airpods from './Components/Store/Airpods';
import Macbook from './Components/Store/Macbook';


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
           <Route path="/Latest" element={<Latest/>} />
           <Route path="/Iphone" element={<Iphone/>} />
           <Route path="/Airpods" element={<Airpods/>} />
           <Route path="/Macbook" element={<Macbook/>} />
           <Route path="/Register" element={<Register />} />

            {/* Store  */}
           <Route path="/Store" element={<Storemain/>} />
           <Route path="/Latest" element={<Latest />} />

           {/* Accessories  */}
           <Route path="/macaccessories" element={<MacAccessories />} />
           <Route path="/keyboards" element={<Keyboards />} />
           <Route path="/mice" element={<Mice />} />
           <Route path="/hubs" element={<Hubs />} />
           <Route path="/display" element={<Display />} />
           <Route path="/audio" element={<Audio />} />
           <Route path="/protection" element={<Protection />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App