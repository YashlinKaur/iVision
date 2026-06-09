import React from "react";
import "../Accessories.css";
import MacPage from "./MacPage";

function MacAccessories() {
  return (
    <div className="mac-accessories">

      {/* Hero Page  */}
      <section>
        <div className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">MAC ACCESSORIES</p>
            <h1 className="acc-hero-title">
              ELEVATE YOUR
              <br />
              <span>MAC SETUP.</span>
            </h1>
            <p className="hero-sub">
              Premium accessories, curated and authenticated - everything your
              Mac deserves.
            </p>
            <div className="hero-buttons">
              <button className="shop-btn">Shop Now</button>
              <button className="explore-btn">Explore All</button>
            </div>
          </div>
        </div>
      </section>

      {/* All Accessories  */}
        <MacPage />

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* Footer Page  */}
      <section className="why-section">
        <p className="why-label">Built for professionals</p>
        <h2 className="why-heading">
          Why <em>Mac</em>
        </h2>
        <div className="why-grid">
          <div className="why-card">
            <span className="why-num">01</span>
            <div className="why-icon-row">
              <div className="why-icon">💻</div>
              <span className="why-tag">Power</span>
            </div>
            <div className="why-divider"></div>
            <h3 className="why-title">Apple Silicon Performance</h3>
            <p className="why-desc">
              Powered by Apple's M-series chips, delivering incredible speed and
              efficiency for every task.
            </p>
          </div>
          <div className="why-card">
            <span className="why-num">02</span>
            <div className="why-icon-row">
              <div className="why-icon">🔋</div>
              <span className="why-tag">Battery</span>
            </div>
            <div className="why-divider"></div>
            <h3 className="why-title">All-Day Battery Life</h3>
            <p className="why-desc">
              Work, create and stream for hours with exceptional battery
              performance on every Mac.
            </p>
          </div>
          <div className="why-card">
            <span className="why-num">03</span>
            <div className="why-icon-row">
              <div className="why-icon">✨</div>
              <span className="why-tag">Design</span>
            </div>
            <div className="why-divider"></div>
            <h3 className="why-title">Beautifully Crafted</h3>
            <p className="why-desc">
              Premium aluminum design, brilliant displays and a seamless macOS
              experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MacAccessories;