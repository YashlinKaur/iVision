import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop";
import Navbar from './Components/Navbar/Navbar'
import Home from './Home'
import About from './Components/Aboutus/About'
import Login from "./Components/Login/Login";
import Register from './Components/Register/Register'
import Storemain from './Components/Store/Storemain/Storemain'

import Iphone from "./Components/Store/Iphone"
import Airpods from './Components/Store/Airpods';
import Macbook from './Components/Store/Macbook';
import Watch from './Components/Store/Watch';

import MacAccessories from './Components/Accessories/Mac/MacAccessories'
import IPhoneAccessories from './Components/Accessories/IPhone/IPhoneAccessories'
import WatchAccessories from './Components/Accessories/Watch/WatchAccessories'
import AirpodAccessories from './Components/Accessories/Airpod/AirpodAccessories'


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
           <Route path="/Watch" element={<Watch/>} />
           <Route path="/Iphone" element={<Iphone/>} />
           <Route path="/Airpods" element={<Airpods/>} />
           <Route path="/Macbook" element={<Macbook/>} />
           <Route path="/Register" element={<Register />} />

            {/* Store  */}
           <Route path="/Store" element={<Storemain/>} />

           {/* Accessories  */}
           <Route path="/macaccessories" element={<MacAccessories />} />
           <Route path="/iphoneaccessories" element={<IPhoneAccessories />} />
           <Route path="/watchaccessories" element={<WatchAccessories />} />
           <Route path="/airpodaccessories" element={<AirpodAccessories />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App