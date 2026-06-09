import React from "react";
import "../Accessories.css";
import IPhonePage from "./IPhonePage";

function IPhoneAccessories() {
  return (
    <div className="mac-accessories">

      {/* Hero Page  */}
      <section>
        <div className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">IPHONE ACCESSORIES</p>
            <h1 className="acc-hero-title">
              POWER UP YOUR
              <br />
              <span>iPHONE.</span>
            </h1>
            <p className="hero-sub">
              Premium iPhone accessories, curated and authenticated - cases,
              chargers, cables, and more. Everything your iPhone deserves.
            </p>
            <div className="hero-buttons">
              <button className="shop-btn">Shop Now</button>
              <button className="explore-btn">Explore All</button>
            </div>
          </div>
        </div>
      </section>

      {/* All Accessories  */}
      <IPhonePage />

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* Footer Page */}
      <section className="why-section">
        <p className="why-label">Designed for excellence</p>
        <h2 className="why-heading">
          Why <em>iPhone</em>
        </h2>

        <div className="why-grid">
          <div className="why-card">
            <span className="why-num">01</span>
            <div className="why-icon-row">
              <div className="why-icon">📱</div>
              <span className="why-tag">Latest</span>
            </div>
            <div className="why-divider"></div>
            <h3 className="why-title">Newest iPhone Models</h3>
            <p className="why-desc">
              Explore the latest iPhone lineup with powerful performance,
              advanced cameras and all-day battery life.
            </p>
          </div>

          <div className="why-card">
            <span className="why-num">02</span>
            <div className="why-icon-row">
              <div className="why-icon">📸</div>
              <span className="why-tag">Camera</span>
            </div>
            <div className="why-divider"></div>
            <h3 className="why-title">Pro-Level Photography</h3>
            <p className="why-desc">
              Capture stunning photos and cinematic videos with Apple's most
              advanced camera systems.
            </p>
          </div>

          <div className="why-card">
            <span className="why-num">03</span>
            <div className="why-icon-row">
              <div className="why-icon">⚡</div>
              <span className="why-tag">Performance</span>
            </div>
            <div className="why-divider"></div>
            <h3 className="why-title">Built for Speed</h3>
            <p className="why-desc">
              Experience lightning-fast performance powered by Apple's latest
              generation chips.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IPhoneAccessories;