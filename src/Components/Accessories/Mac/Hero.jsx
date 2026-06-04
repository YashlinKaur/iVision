import React from "react";
import "./Mac.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-particles" id="particles"></div>
      <div className="hero-content">
        <p className="hero-eyebrow">Mac Accessories</p>
        <h4 className="hero-title">
          Power Your
          <br />
          <span>Mac Experience.</span>
        </h4>
        <p className="hero-sub">
          Premium accessories, curated and authenticated - everything your Mac
          deserves.
        </p>
        <div className="hero-cta">
          <button
            className="btn-primary"
            onClick={() => document.querySelector('.section').scrollIntoView({behavior:'smooth'})}
          >
            Shop Now
          </button>
          <button className="btn-ghost">Explore All</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
