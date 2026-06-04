// import React, { useState, useEffect } from "react";
import "./Hero.css";
import ip17 from "../../assets/ip17.png";
import macbook from "../../assets/macbook.png";
import ipad from "../../assets/ipad.png";

const images = [ip17, macbook, ipad];

const Hero = () => {
  

  return (
    <section className="hero-split">
      <div className="left-content">
        <h1>The finest<br/><span>Apple experience.</span></h1>
        <p>Every iPhone, Mac, iPad, Watch, and accessory — curated, authenticated, and delivered with white-glove care.</p>
        {/* <button className="shop-btn">Shop All Products</button> */}
      </div>

      {/* Right Side Visual */}
{/* <div className="right-visual">
  <div className="rotating-circle"></div>
  

  <div className="img-container">
    <img 
      src={images[index]} 
      alt="Product" 
      className="rotating-img fade-in" 
    />
  </div>
</div> */}
    </section>
  );
};
export default Hero;