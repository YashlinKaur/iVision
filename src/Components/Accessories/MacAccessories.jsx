import React from "react";
import Hero from "./Mac/Hero";
import Keyboards from "./Mac/Keyboards";
import Mice from "./Mac/Mice";
import Hubs from "./Mac/Hubs";
import Display from "./Mac/Display";
import Audio from "./Mac/Audio";
import Protection from "./Mac/Protection";
import "./Accessories.css";

function MacAccessories() {
  return (
    <div className="mac-accessories">
      <Hero />
      <Keyboards />
      <Mice />
      <Hubs />
      <Display />
      <Audio />
      <Protection />

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

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
