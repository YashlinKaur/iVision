import React from "react";
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section>
    <div className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">APPLE WATCH</p>
        <h1 className="acc-hero-title">
          WEAR THE <span>FUTURE.</span>
        </h1>
        <p className="hero-sub">
          Every model. Every size. Authenticated Apple Watches — 
          built for health, fitness, and everything in between.
        </p>
        <div className="hero-buttons">
          <button className="shop-btn">Shop Now</button>
          <button className="explore-btn">Explore All</button>
        </div>
      </div>
    </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-inner">
          <span className="filter-label">Filter:</span>
          <Link className="filter-chip active" to="/iphone">
            All
          </Link>
          <Link to="/iphone/power-banks" className="filter-chip">
            Bands
          </Link>
          <Link to="/iphone/chargers" className="filter-chip">
            Chargers
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;