import React from 'react'
import HeroPage from './Components/Home/Hero/Hero'
import Explore from './Components/Home/Explore/Explore'
import Timeline from "./Components/Home/Timeline/Timeline"
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