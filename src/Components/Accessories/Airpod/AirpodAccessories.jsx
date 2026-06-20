import React from "react";
import "../Accessories.css";
import AirPodsPage from "./AirpodPage";

function AirpodAccessories() {
  return (
    <div className="mac-accessories">
      {/* Hero Page  */}
      <section>
        <div className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">AIRPODS & AUDIO</p>
            <h1 className="acc-hero-title">
              HEAR EVERY
              <br />
              <span>DETAIL.</span>
            </h1>
            <p className="hero-sub">
              Every AirPod. Every sound. Authenticated Apple audio - built for
              clarity, comfort, and immersive listening.
            </p>
          </div>
        </div>
      </section>

      {/* All Accessories  */}
      <AirPodsPage />

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* Footer  */}

      <section className="why-section">
        <p className="why-label">Pure wireless freedom</p>
        <h2 className="why-heading">
          Why <em>AirPods</em>
        </h2>

        <div className="why-grid">
          <div className="why-card">
            <span className="why-num">01</span>
            <div className="why-icon-row">
              <div className="why-icon">🎧</div>
              <span className="why-tag">Audio</span>
            </div>
            <div className="why-divider"></div>
            <h3 className="why-title">Immersive Sound</h3>
            <p className="why-desc">
              Enjoy rich, detailed audio with powerful bass and crystal-clear
              sound for music, movies and calls.
            </p>
          </div>

          <div className="why-card">
            <span className="why-num">02</span>
            <div className="why-icon-row">
              <div className="why-icon">🔇</div>
              <span className="why-tag">Noise Control</span>
            </div>
            <div className="why-divider"></div>
            <h3 className="why-title">Active Noise Cancellation</h3>
            <p className="why-desc">
              Block unwanted noise and stay focused with advanced noise
              cancellation and Transparency mode.
            </p>
          </div>

          <div className="why-card">
            <span className="why-num">03</span>
            <div className="why-icon-row">
              <div className="why-icon">⚡</div>
              <span className="why-tag">Seamless</span>
            </div>
            <div className="why-divider"></div>
            <h3 className="why-title">Instant Apple Pairing</h3>
            <p className="why-desc">
              Connect effortlessly across your Apple devices and switch between
              them with ease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AirpodAccessories;