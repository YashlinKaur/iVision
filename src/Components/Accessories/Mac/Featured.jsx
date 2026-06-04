import React from "react";
import "./Mac.css";

function Featured (){
  return (
    <div className="featured">
      <div className="featured-card fade-up visible">
        <div className="featured-text">
          <span className="badge">✦ Editor's Pick</span>
          <h2 className="featured-title">Magic Keyboard<br />with Touch ID</h2>
          <p className="featured-desc">The most advanced Mac keyboard ever. Wireless. Rechargeable. Secure fingerprint authentication built right in.</p>
          <p className="featured-price">₹9,900 <span>Free Delivery</span></p>
          <button className="btn-primary">Add to Cart →</button>
        </div>
        <div className="featured-img">
          <div className="mac-visual">
            <div className="mac-screen">
              <svg width="80" height="60" viewBox="0 0 80 60">
                <rect x="10" y="10" width="60" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
                <rect x="10" y="24" width="45" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
                <rect x="10" y="34" width="52" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
                <rect x="10" y="44" width="30" height="5" rx="2" fill="rgba(0,113,227,0.5)"/>
              </svg>
            </div>
            <div className="mac-base"></div>
            <div className="mac-stand"></div>
          </div>
        </div>
      </div>
      {console.log("FEATURED RENDER")}
    </div>
  )
}

export default Featured;