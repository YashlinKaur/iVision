import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>

      {/* Banner */}
      <div className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">IPHONE ACCESSORIES</p>

          <h1 className="acc-hero-title">
            Power Up Your
            <br />
            <span>iPhone.</span>
          </h1>

          <p className="hero-sub">
            Premium iPhone accessories, curated and authenticated — cases,
            chargers, cables, and more. Everything your iPhone deserves.
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
          <Link to="/iphone/cases" className="filter-chip">
            Cases
          </Link>
          <Link to="/iphone/chargers" className="filter-chip">
            Chargers
          </Link>
          <Link to="/iphone/cables" className="filter-chip">
            Cables
          </Link>
          <Link to="/iphone/magsafe" className="filter-chip">
            MagSafe
          </Link>
          <Link to="/iphone/screen-protectors" className="filter-chip">
            Screen Protectors
          </Link>
          <Link to="/iphone/power-banks" className="filter-chip">
            Power Banks
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Hero;