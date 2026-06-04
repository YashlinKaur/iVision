import React from 'react'
import Hero from './Mac/Hero'
import Filter from './Mac/Filter'
import Featured from './Mac/Featured'
import Keyboards from './Mac/Keyboards'
import Marquee from './Mac/Marquee'
import Mice from './Mac/Mice'
import Hubs from './Mac/Hubs'
import Banner from './Mac/Banner'
import Display from './Mac/Display'
import Audio from './Mac/Audio'
import Protection from './Mac/Protection'
import WhyIVision from './Mac/WhyIVision'

function MacAccessories() {
  return (
    <div className="mac-accessories">
        <Hero /> 
        <Filter /> 
        <Featured />
        <Keyboards />  
        <Marquee /> 
        <Mice />   
        <Hubs />
        <Banner />
        <Display />
        <Audio />
        <Protection />
        <WhyIVision />
    </div>
  )
}

export default MacAccessories