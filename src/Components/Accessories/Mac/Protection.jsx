import React from "react";
import "./Mac.css";

function Protection() {
  return (
    <div className="section">

    {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Protection <em>&amp; Cases</em></h2>
          <span className="see-all">See all →</span>
        </div>

    {/* Product Grid */}
        <div className="product-grid">

          <div className="product-card fade-up visible" data-cat="protection">
            <div className="card-img" style={{ background: "#f0f4ff" }}>
              <div className="card-img-inner">
                <svg className="product-svg" viewBox="0 0 100 80">
                  <rect x="10" y="10" width="80" height="55" rx="6" fill="#2c3d6b" stroke="#4a5d99" strokeWidth="1.5"/>
                  <rect x="18" y="18" width="64" height="40" rx="4" fill="#1c2951"/>
                  <rect x="35" y="67" width="30" height="6" rx="3" fill="#2c3d6b"/>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <p className="card-category">Case</p>
              <h3 className="card-name">MacBook Sleeve — Midnight Blue</h3>
              <p className="card-desc">Premium felt with water-resistant lining. Fits 13" and 14".</p>
              <div className="color-dots">
                <span className="dot" style={{ background: "#2c3d6b" }}></span>
                <span className="dot" style={{ background: "#1d1d1f" }}></span>
                <span className="dot" style={{ background: "#8b6563" }}></span>
                <span className="dot" style={{ background: "#3d6b3d" }}></span>
              </div>
              <div className="card-footer">
                <div><span className="card-price">₹3,299</span><span className="card-price-sub">4 colors</span></div>
                <button className="btn-add">Add →</button>
              </div>
            </div>
          </div>

          <div className="product-card fade-up visible" data-cat="protection">
            <div className="card-img">
              <span className="card-tag new">New</span>
              <div className="card-img-inner">
                <svg className="product-svg" viewBox="0 0 100 80">
                  <rect x="8" y="8" width="84" height="58" rx="8" fill="rgba(0,113,227,0.1)" stroke="#0071e3" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <rect x="16" y="16" width="68" height="44" rx="5" fill="#f0f6ff"/>
                  <rect x="22" y="20" width="56" height="36" rx="4" fill="#e0edff"/>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <p className="card-category">Skin</p>
              <h3 className="card-name">MacBook Crystal Clear Hardshell</h3>
              <p className="card-desc">Snap-on protection that shows off your Mac's design completely.</p>
              <div className="color-dots">
                <span className="dot" style={{ background: "rgba(200,200,200,0.5)", border: "1.5px solid #c8c8c8" }}></span>
                <span className="dot" style={{ background: "#0071e3", opacity: "0.7" }}></span>
                <span className="dot" style={{ background: "rgba(200,180,220,0.6)", border: "1.5px solid #c8c8c8" }}></span>
              </div>
              <div className="card-footer">
                <div><span className="card-price">₹2,599</span><span className="card-price-sub">All MacBook models</span></div>
                <button className="btn-add">Add →</button>
              </div>
            </div>
          </div>

          <div className="product-card fade-up visible" data-cat="protection">
            <div className="card-img" style={{ background: "linear-gradient(135deg,#fff8f0,#fff0e0)" }}>
              <div className="card-img-inner">
                <svg className="product-svg" viewBox="0 0 100 80">
                  <rect x="15" y="15" width="70" height="50" rx="10" fill="#c8a070" stroke="#b08050" strokeWidth="1.5"/>
                  <rect x="22" y="22" width="56" height="36" rx="6" fill="#b89060"/>
                  <circle cx="50" cy="72" r="4" fill="#a07040"/>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <p className="card-category">Bag</p>
              <h3 className="card-name">Leather MacBook Folio — Tan</h3>
              <p className="card-desc">Full-grain leather that ages beautifully. Magnetic closure.</p>
              <div className="color-dots">
                <span className="dot" style={{ background: "#c8a070" }}></span>
                <span className="dot" style={{ background: "#5c3a1e" }}></span>
                <span className="dot" style={{ background: "#1d1d1f" }}></span>
              </div>
              <div className="card-footer">
                <div><span className="card-price">₹6,990</span><span className="card-price-sub">Genuine leather</span></div>
                <button className="btn-add">Add →</button>
              </div>
            </div>
          </div>

        </div>
</div>
  )
}

export default Protection;