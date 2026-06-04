import React from "react";
import "./Mac.css";

function Audio() {
    return (
    <div className="section">

    {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Audio <em>for Mac</em></h2>
          <span className="see-all">See all →</span>
        </div>

    {/* Product Grid */}
        <div className="product-grid">

          <div className="product-card fade-up visible" data-cat="audio">
            <div className="card-img" style={{ background: "linear-gradient(135deg, #f0f0f5, #e8e8f0)" }}>
              <span className="card-tag new">New</span>
              <div className="card-img-inner">
                <svg className="product-svg" viewBox="0 0 100 100">
                  <ellipse cx="50" cy="40" rx="30" ry="30" fill="#e8e8ed" stroke="#c7c7cc" strokeWidth="2"/>
                  <ellipse cx="50" cy="40" rx="20" ry="20" fill="#d1d1d6"/>
                  <rect x="44" y="68" width="12" height="20" rx="3" fill="#c7c7cc"/>
                  <rect x="32" y="86" width="36" height="5" rx="2" fill="#c7c7cc"/>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <p className="card-category">Headphones</p>
              <h3 className="card-name">AirPods Max — Midnight</h3>
              <p className="card-desc">Spatial Audio, ANC, premium metal build, perfect for Mac.</p>
              <div className="color-dots">
                <span className="dot" style={{ background: "#2c3d6b" }}></span>
                <span className="dot" style={{ background: "#f5f5f7", border: "1.5px solid #c8c8c8" }}></span>
                <span className="dot" style={{ background: "#8b6563" }}></span>
                <span className="dot" style={{ background: "#3d6b3d" }}></span>
              </div>
              <div className="card-footer">
                <div><span className="card-price">₹59,900</span><span className="card-price-sub">4 colors</span></div>
                <button className="btn-add">Add →</button>
              </div>
            </div>
          </div>

          <div className="product-card fade-up visible" data-cat="audio">
            <div className="card-img" style={{ background: "#f5f5f7" }}>
              <div className="card-img-inner">
                <svg className="product-svg" viewBox="0 0 100 80">
                  <rect x="20" y="20" width="60" height="40" rx="10" fill="#e8e8ed" stroke="#c7c7cc" strokeWidth="1.5"/>
                  <circle cx="35" cy="40" r="8" fill="#c7c7cc"/>
                  <circle cx="65" cy="40" r="8" fill="#c7c7cc"/>
                  <rect x="33" y="36" width="4" height="8" rx="2" fill="#8e8e93"/>
                  <rect x="63" y="36" width="4" height="8" rx="2" fill="#8e8e93"/>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <p className="card-category">Speakers</p>
              <h3 className="card-name">HomePod mini Desk Speaker</h3>
              <p className="card-desc">360° sound with spatial audio. Perfect companion for any Mac desk.</p>
              <div className="color-dots">
                <span className="dot" style={{ background: "#f5f5f7", border: "1.5px solid #c8c8c8" }}></span>
                <span className="dot" style={{ background: "#1d1d1f" }}></span>
                <span className="dot" style={{ background: "#f5c0a8" }}></span>
              </div>
              <div className="card-footer">
                <div><span className="card-price">₹10,900</span><span className="card-price-sub">3 colors</span></div>
                <button className="btn-add">Add →</button>
              </div>
            </div>
          </div>

        </div>
    </div>
    )
}

export default Audio;