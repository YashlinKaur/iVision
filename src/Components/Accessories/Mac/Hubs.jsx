import React from "react";
import "./Mac.css";

function Hubs() {
    return (
    <div className="section">

        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Hubs <em>&amp; Docks</em></h2>
          <span className="see-all">See all →</span>
        </div>

        {/* Boxes */}
        <div className="product-grid">

          <div className="product-card fade-up visible" data-cat="hub">
            <div className="card-img" style={{ background: "#f5f5f7" }}>
              <span className="card-tag">Popular</span>
              <div className="card-img-inner">
                <svg className="product-svg" viewBox="0 0 100 60">
                  <rect x="10" y="20" width="80" height="20" rx="6" fill="#e8e8ed" stroke="#c7c7cc" strokeWidth="1.5"/>
                  <rect x="16" y="27" width="8" height="6" rx="1" fill="#0071e3" opacity="0.8"/>
                  <rect x="28" y="27" width="8" height="6" rx="1" fill="#86868b"/>
                  <rect x="40" y="27" width="8" height="6" rx="1" fill="#86868b"/>
                  <rect x="52" y="27" width="8" height="6" rx="1" fill="#34c759" opacity="0.8"/>
                  <rect x="64" y="27" width="8" height="6" rx="1" fill="#86868b"/>
                  <rect x="76" y="27" width="8" height="6" rx="1" fill="#86868b"/>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <p className="card-category">Hub</p>
              <h3 className="card-name">Thunderbolt 4 Hub — 6-in-1</h3>
              <p className="card-desc">USB-C, HDMI 4K, SD Card, ethernet in one compact hub.</p>
              <div className="card-footer">
                <div><span className="card-price">₹5,499</span><span className="card-price-sub">Compatible with all Macs</span></div>
                <button className="btn-add">Add →</button>
              </div>
            </div>
          </div>

          <div className="product-card fade-up visible" data-cat="hub">
            <div className="card-img" style={{ background: "linear-gradient(135deg,#fff8f0,#fff3e8)" }}>
              <div className="card-img-inner">
                <svg className="product-svg" viewBox="0 0 100 80">
                  <rect x="20" y="10" width="60" height="60" rx="12" fill="#e8e8ed" stroke="#c7c7cc" strokeWidth="1.5"/>
                  <rect x="30" y="22" width="40" height="5" rx="2" fill="#8e8e93"/>
                  <rect x="30" y="33" width="40" height="5" rx="2" fill="#8e8e93"/>
                  <rect x="30" y="44" width="40" height="5" rx="2" fill="#0071e3" opacity="0.6"/>
                  <rect x="30" y="55" width="20" height="5" rx="2" fill="#8e8e93"/>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <p className="card-category">Dock</p>
              <h3 className="card-name">CalDigit TS4 Thunderbolt Dock</h3>
              <p className="card-desc">18 ports, 98W charging, dual 6K displays supported.</p>
              <div className="card-footer">
                <div><span className="card-price">₹29,990</span><span className="card-price-sub">Pro workflow</span></div>
                <button className="btn-add">Add →</button>
              </div>
            </div>
          </div>

          <div className="product-card fade-up visible" data-cat="hub">
            <div className="card-img" style={{ background: "#f5f5f7" }}>
              <span className="card-tag new">New</span>
              <div className="card-img-inner">
                <svg className="product-svg" viewBox="0 0 100 60">
                  <rect x="5" y="15" width="90" height="30" rx="8" fill="#1d1d1f" stroke="#333"/>
                  <rect x="14" y="23" width="7" height="14" rx="2" fill="#0071e3"/>
                  <rect x="25" y="23" width="7" height="14" rx="2" fill="#2c2c2e"/>
                  <rect x="36" y="23" width="7" height="14" rx="2" fill="#2c2c2e"/>
                  <rect x="60" y="23" width="7" height="14" rx="2" fill="#34c759" opacity="0.8"/>
                  <rect x="71" y="23" width="7" height="14" rx="2" fill="#2c2c2e"/>
                  <rect x="82" y="23" width="7" height="14" rx="2" fill="#2c2c2e"/>
                </svg>
              </div>
            </div>
            <div className="card-body">
              <p className="card-category">Hub</p>
              <h3 className="card-name">Space Bar USB-C Hub — Black</h3>
              <p className="card-desc">Sits under your Magic Keyboard. Powers all peripherals invisibly.</p>
              <div className="card-footer">
                <div><span className="card-price">₹8,200</span><span className="card-price-sub">Desk-friendly design</span></div>
                <button className="btn-add">Add →</button>
              </div>
            </div>
          </div>

        </div>
</div>
    );
}

export default Hubs;