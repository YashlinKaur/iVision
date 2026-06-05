import React from 'react'
import Hero from './Mac/Hero'
import Keyboards from './Mac/Keyboards'
import Marquee from './Mac/Marquee'
import Mice from './Mac/Mice'
import Hubs from './Mac/Hubs'
import Banner from './Mac/Banner'
import Display from './Mac/Display'
import Audio from './Mac/Audio'
import Protection from './Mac/Protection'
import WhyIvision from './Mac/WhyIvision'

function MacAccessories() {
  return (
    <div className="mac-accessories">
        <Hero /> 
        <Marquee /> 
        <Keyboards />  
        <Mice />   
        <Hubs />
        <Banner />
        <Display />
        <Audio />
        <Protection />
        <WhyIvision />
    </div>
  )
}

export default MacAccessories