import React from "react";
import "./Mac.css";

function Display() {
    return (
    <div className="section">

    {/* Header */}
      <div className="section-header">
        <h2 className="section-title">Displays <em>&amp; Monitors</em></h2>
        <span className="see-all">See all →</span>
      </div>

    {/* Product Grid */}
      <div className="product-grid">

        <div className="product-card fade-up visible" data-cat="display">
          <div className="card-img" style={{ background: "linear-gradient(135deg, #e8f4ff, #d0e8ff)" }}>
            <span className="card-tag new">New</span>
            <div className="card-img-inner">
              <svg className="product-svg" viewBox="0 0 100 80">
                <rect x="5" y="5" width="90" height="55" rx="6" fill="#1d1d1f" stroke="#333"/>
                <rect x="10" y="10" width="80" height="45" rx="4" fill="linear-gradient(135deg,#1a237e,#0d47a1)"/>
                <rect x="10" y="10" width="80" height="45" rx="4" fill="#0a3d6b"/>
                <rect x="42" y="62" width="16" height="10" rx="2" fill="#2c2c2e"/>
                <rect x="30" y="72" width="40" height="4" rx="2" fill="#2c2c2e"/>
              </svg>
            </div>
          </div>
          <div className="card-body">
            <p className="card-category">Display</p>
            <h3 className="card-name">Apple Studio Display</h3>
            <p className="card-desc">27-inch 5K Retina, 600 nits brightness, built-in webcam and speakers.</p>
            <div className="card-footer">
              <div><span className="card-price">₹1,59,900</span><span className="card-price-sub">5K Retina · True Tone</span></div>
              <button className="btn-add">Add →</button>
            </div>
          </div>
        </div>

        <div className="product-card fade-up visible" data-cat="display">
          <div className="card-img" style={{ background: "#f5f5f7" }}>
            <div className="card-img-inner">
              <svg className="product-svg" viewBox="0 0 100 80">
                <rect x="8" y="8" width="84" height="52" rx="5" fill="#e8e8ed" stroke="#c7c7cc" strokeWidth="1.5"/>
                <rect x="14" y="14" width="72" height="40" rx="3" fill="#d1d1d6"/>
                <rect x="40" y="62" width="20" height="8" rx="2" fill="#c7c7cc"/>
                <rect x="28" y="70" width="44" height="4" rx="2" fill="#c7c7cc"/>
              </svg>
            </div>
          </div>
          <div className="card-body">
            <p className="card-category">Display</p>
            <h3 className="card-name">LG UltraFine 4K Display</h3>
            <p className="card-desc">24-inch 4K, USB-C one-cable solution, designed for Mac.</p>
            <div className="card-footer">
              <div><span className="card-price">₹54,900</span><span className="card-price-sub">4K · USB-C</span></div>
              <button className="btn-add">Add →</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    );
}   

export default Display;