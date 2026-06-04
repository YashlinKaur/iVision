import React from "react";
import "./Mac.css";

function Keyboards() {
  return (
  <div className="section" id="products">
    <div className="section-header">
      <h2 className="section-title">Mac <em>Keyboards</em></h2>
      <span className="see-all">See all →</span>
    </div>
    <div className="product-grid">
    
      <div className="product-card fade-up visible" data-cat="keyboard">
        <div className="card-img">
          <span className="card-tag new">New</span>
          <div className="card-img-inner">
            <svg className="product-svg" viewBox="0 0 100 60">
              <rect x="5" y="10" width="90" height="40" rx="8" fill="#e8e8ed" stroke="#c7c7cc" strokeWidth="1.5"/>
              <rect x="12" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
              <rect x="26" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
              <rect x="40" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
              <rect x="54" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
              <rect x="68" y="18" width="15" height="7" rx="2" fill="#8e8e93"/>
              <rect x="12" y="30" width="12" height="7" rx="2" fill="#8e8e93"/>
              <rect x="28" y="30" width="34" height="7" rx="2" fill="#8e8e93"/>
              <rect x="66" y="30" width="12" height="7" rx="2" fill="#007aff" opacity="0.8"/>
            </svg>
          </div>
        </div>
        <div className="card-body">
          <p className="card-category">Keyboard</p>
          <h3 className="card-name">Magic Keyboard with Touch ID</h3>
          <p className="card-desc">Wireless, rechargeable with secure fingerprint login.</p>
          <div className="color-dots">
            <span className="dot" style={{ background: "#f5f5f7", border: "1.5px solid #c8c8c8" }}></span>
            <span className="dot" style={{ background: "#1d1d1f" }}></span>
            <span className="dot" style={{ background: "#e8d5c0" }}></span>
          </div>
          <div className="card-footer">
            <div><span className="card-price">₹9,900</span><span className="card-price-sub">Free delivery</span></div>
            <button className="btn-add">Add →</button>
          </div>
        </div>
      </div>
    
      <div className="product-card fade-up visible" data-cat="keyboard">
        <div className="card-img" style={{ background: "#f5f5f7" }}>
          <div className="card-img-inner">
            <svg className="product-svg" viewBox="0 0 100 60">
              <rect x="5" y="8" width="90" height="42" rx="8" fill="#1d1d1f" stroke="#333" strokeWidth="1.5"/>
              <rect x="12" y="16" width="10" height="8" rx="2" fill="#2c2c2e"/>
              <rect x="26" y="16" width="10" height="8" rx="2" fill="#2c2c2e"/>
              <rect x="40" y="16" width="10" height="8" rx="2" fill="#2c2c2e"/>
              <rect x="54" y="16" width="10" height="8" rx="2" fill="#2c2c2e"/>
              <rect x="68" y="16" width="15" height="8" rx="2" fill="#2c2c2e"/>
              <rect x="12" y="29" width="10" height="8" rx="2" fill="#2c2c2e"/>
              <rect x="26" y="29" width="40" height="8" rx="2" fill="#2c2c2e"/>
              <rect x="70" y="29" width="12" height="8" rx="2" fill="#0a84ff" opacity="0.9"/>
            </svg>
          </div>
        </div>
        <div className="card-body">
          <p className="card-category">Keyboard</p>
          <h3 className="card-name">Magic Keyboard — Space Gray</h3>
          <p className="card-desc">Sleek dark finish with numeric keypad for power users.</p>
          <div className="color-dots">
            <span className="dot" style={{ background: "#1d1d1f" }}></span>
            <span className="dot" style={{ background: "#3a3a3c" }}></span>
          </div>
          <div className="card-footer">
            <div><span className="card-price">₹12,900</span><span className="card-price-sub">With Numeric Keypad</span></div>
            <button className="btn-add">Add →</button>
          </div>
        </div>
      </div>
    
      <div className="product-card fade-up visible" data-cat="keyboard">
        <div className="card-img" style={{ background: "linear-gradient(135deg,#f0f4ff,#e8eeff)" }}>
          <span className="card-tag sale">Sale</span>
          <div className="card-img-inner">
            <svg className="product-svg" viewBox="0 0 100 60">
              <rect x="5" y="10" width="90" height="40" rx="8" fill="#e0e5ff" stroke="#c5cdff" strokeWidth="1.5"/>
              <rect x="12" y="18" width="10" height="7" rx="2" fill="#8896cc"/>
              <rect x="26" y="18" width="10" height="7" rx="2" fill="#8896cc"/>
              <rect x="40" y="18" width="10" height="7" rx="2" fill="#8896cc"/>
              <rect x="54" y="18" width="10" height="7" rx="2" fill="#8896cc"/>
              <rect x="12" y="30" width="62" height="7" rx="2" fill="#8896cc"/>
            </svg>
          </div>
        </div>
        <div className="card-body">
          <p className="card-category">Keyboard</p>
          <h3 className="card-name">Magic Keyboard — Midnight</h3>
          <p className="card-desc">Deep rich color with anodized aluminum for elegant desks.</p>
          <div className="color-dots">
            <span className="dot" style={{ background: "#2c3d6b" }}></span>
            <span className="dot" style={{ background: "#1c2951" }}></span>
          </div>
          <div className="card-footer">
            <div><span className="card-price">₹8,499 <del style={{ fontSize: "12px", color: "#86868b", fontWeight: "400" }}>₹9,900</del></span></div>
            <button className="btn-add">Add →</button>
          </div>
        </div>
      </div>
    
    </div>
</div>
   );
}

export default Keyboards;