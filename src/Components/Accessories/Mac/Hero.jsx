import React from "react";
import "./Mac.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
  <section>
    <div className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">MAC ACCESSORIES</p>

        <h1 className="acc-hero-title">
          Elevate Your
          <br />
          <span>Mac Setup.</span>
        </h1>

        <p className="hero-sub">
          Premium accessories, curated and authenticated — everything your Mac
          deserves.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">Shop Now</button>

          <button className="explore-btn">Explore All</button>
        </div>
      </div>
    </div>

    <div className="filter-bar">
      <div className="filter-inner">
        <span className="filter-label">Filter:</span>
        <Link className="filter-chip active" onClick={() => filterProducts('all', this)}>
          All
        </Link>
        <Link to="/keyboards" className="filter-chip" onClick={() => filterProducts('keyboard', this)}>
          Keyboards
        </Link>
        <Link to="/mice" className="filter-chip" onClick={() => filterProducts('mouse', this)}>
          Mice &amp; Trackpads
        </Link>
        <Link to="/hubs" className="filter-chip" onClick={() => filterProducts('hub', this)}>
          Hubs &amp; Docks
        </Link>
        <Link to="/display" className="filter-chip" onClick={() => filterProducts('display', this)}>
          Displays
        </Link>
        <Link to="/audio" className="filter-chip" onClick={() => filterProducts('audio', this)}>
          Audio
        </Link>
        <Link to="/protection" className="filter-chip" onClick={() => filterProducts('protection', this)}>
          Protection
        </Link>
      </div>
    </div>
  </section>
  );
}

export default Hero;
