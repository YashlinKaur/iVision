import React from "react";
import "./Accessories.css";
import Hero from "./Watch/Hero";
import Bands from "./Watch/Bands";
import Chargers from "./Watch/Chargers";

function WatchAccessories() {
  return (
    <div className="mac-accessories">
      <Hero />
      <Bands />
      <Chargers />

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <section className="why-section">
  <p className="why-label">Why choose our watches</p>
  <h2 className="why-heading">
    Why <em>iVision</em>
  </h2>

  <div className="why-grid">
    <div className="why-card">
      <span className="why-num">01</span>
      <div className="why-icon-row">
        <div className="why-icon">⌚</div>
        <span className="why-tag">Latest Models</span>
      </div>
      <div className="why-divider"></div>
      <h3 className="why-title">Newest Apple Watches</h3>
      <p className="why-desc">
        Discover the latest Apple Watch models with cutting-edge health, fitness, and connectivity features.
      </p>
    </div>

    <div className="why-card">
      <span className="why-num">02</span>
      <div className="why-icon-row">
        <div className="why-icon">⚡</div>
        <span className="why-tag">Performance</span>
      </div>
      <div className="why-divider"></div>
      <h3 className="why-title">Powerful Everyday Companion</h3>
      <p className="why-desc">
        Stay connected, track workouts, monitor health, and manage your day right from your wrist.
      </p>
    </div>

    <div className="why-card">
      <span className="why-num">03</span>
      <div className="why-icon-row">
        <div className="why-icon">🎨</div>
        <span className="why-tag">Customization</span>
      </div>
      <div className="why-divider"></div>
      <h3 className="why-title">Bands & Styles for Everyone</h3>
      <p className="why-desc">
        Choose from a wide range of bands, finishes, and colors to create a watch that's uniquely yours.
      </p>
    </div>
  </div>
</section>
    </div>
  );
}

export default WatchAccessories;