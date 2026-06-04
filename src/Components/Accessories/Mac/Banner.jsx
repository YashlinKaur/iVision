import React from "react";
import "./Mac.css";

function Banner() {
  return (
    <div className="promo-grid">
      <div className="promo-card dark fade-up visible">
        <p className="promo-tag">Display</p>
        <h3 className="promo-title">
          Apple Studio
          <br />
          Display
        </h3>
        <p className="promo-sub">5K Retina. 600 nits. True Tone.</p>
        <span className="promo-link">Shop Now →</span>
      </div>
      <div className="promo-card blue fade-up visible">
        <p className="promo-tag">Audio</p>
        <h3 className="promo-title">
          AirPods Max
          <br />
          for Mac
        </h3>
        <p className="promo-sub">Spatial Audio. Active Noise Cancellation.</p>
        <span className="promo-link">Explore →</span>
      </div>
    </div>
  );
}

export default Banner;
