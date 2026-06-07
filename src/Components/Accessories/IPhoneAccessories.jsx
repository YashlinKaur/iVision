import React from "react";
import Hero from "./IPhone/Hero";
import Cases from "./IPhone/Cases";
import Chargers from "./IPhone/Chargers";
import Cables from "./IPhone/Cables";
import MagSafe from "./IPhone/MagSafe";
import ScreenProtectors from "./IPhone/ScreenProtectors";
import PowerBanks from "./IPhone/PowerBanks";
import "./Accessories.css";

function IPhoneAccessories() {
  return (
    <main>
      <Hero />
      <Cases />
      <Chargers />
      <Cables />
      <MagSafe />
      <ScreenProtectors />
      <PowerBanks />

      {/* WHY SECTION */}
      <section classNameName="why-section">
        <p className="why-label">Designed for excellence</p>
        <h2 className="why-heading">
          Why <em>iPhone</em>
        </h2>

        <div classNameName="why-grid">
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
    </main>
  );
}

export default IPhoneAccessories;
