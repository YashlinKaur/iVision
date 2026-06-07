import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>

      {/* Banner */}
      <div className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">AIRPODS & AUDIO</p>

          <h1 className="acc-hero-title">
            HEAR EVERY
            <br />
            <span>DETAIL.</span>
          </h1>

          <p className="hero-sub">
            Every AirPod. Every sound. Authenticated Apple audio — built for
            clarity, comfort, and immersive listening.
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
          <Link className="filter-chip active" to="/airpods">
            All
          </Link>
          <Link to="/airpods/airpods" className="filter-chip">
            AirPods
          </Link>
          <Link to="/airpods/chargers" className="filter-chip">
            Cables
          </Link>
          <Link to="/airpods/accessories" className="filter-chip">
            Cushions
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Hero;