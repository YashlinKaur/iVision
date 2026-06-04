import React from 'react'
import HeroPage from './Components/Home/Hero'
import Explore from './Components/Explore/Explore'
import Timeline from "./Components/Timeline/Timeline"
import Footer from './Components/Footer/Footer' 

function Home() {
  return (
    <div> 
      <HeroPage />
      <Explore />
      <Timeline />
      <Footer />
    </div>
  )
}

export default Home