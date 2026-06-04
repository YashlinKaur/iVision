import React from "react";
import "./Mac.css";

function Mice() {
  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">
          Mice <em>&amp; Trackpads</em>
        </h2>
        <span className="see-all">See all →</span>
      </div>
      <div className="product-grid">
        <div className="product-card fade-up visible" data-cat="mouse">
          <div className="card-img">
            <div className="card-img-inner">
              <svg className="product-svg" viewBox="0 0 100 100">
                <ellipse
                  cx="50"
                  cy="55"
                  rx="28"
                  ry="38"
                  fill="#e8e8ed"
                  stroke="#c7c7cc"
                  stroke-width="1.5"
                />
                <line
                  x1="50"
                  y1="28"
                  x2="50"
                  y2="78"
                  stroke="#c7c7cc"
                  strokeWidth="1"
                />
                <ellipse
                  cx="50"
                  cy="45"
                  rx="8"
                  ry="5"
                  fill="rgba(0,113,227,0.3)"
                />
              </svg>
            </div>
          </div>
          <div className="card-body">
            <p className="card-category">Mouse</p>
            <h3 className="card-name">Magic Mouse — Silver</h3>
            <p className="card-desc">
              Multi-Touch surface with smooth scrolling and gestures.
            </p>
            <div className="color-dots">
              <span
                className="dot"
                style={{ background: "#f5f5f7", border: "1.5px solid #c8c8c8" }}
              ></span>
              <span className="dot" style={{ background: "#1d1d1f" }}></span>
              <span className="dot" style={{ background: "#e8d5c0" }}></span>
            </div>
            <div className="card-footer">
              <div>
                <span className="card-price">₹7,900</span>
                <span className="card-price-sub">5 colors</span>
              </div>
              <button className="btn-add">Add →</button>
            </div>
          </div>
        </div>

        <div className="product-card fade-up visible" data-cat="mouse">
          <div className="card-img" style={{ background: "#f0f4ff" }}>
            <span className="card-tag new">New</span>
            <div className="card-img-inner">
              <svg className="product-svg" viewBox="0 0 100 70">
                <rect
                  x="15"
                  y="10"
                  width="70"
                  height="50"
                  rx="10"
                  fill="#e8e8ed"
                  stroke="#c7c7cc"
                  strokeWidth="1.5"
                />
                <rect
                  x="25"
                  y="20"
                  width="50"
                  height="30"
                  rx="6"
                  fill="#d1d1d6"
                />
                <circle cx="50" cy="35" r="8" fill="#c7c7cc" />
                <rect
                  x="30"
                  y="28"
                  width="12"
                  height="2"
                  rx="1"
                  fill="#86868b"
                />
              </svg>
            </div>
          </div>
          <div className="card-body">
            <p className="card-category">Trackpad</p>
            <h3 className="card-name">Magic Trackpad — Large</h3>
            <p className="card-desc">
              Expansive glass surface with Force Touch and haptic feedback.
            </p>
            <div className="color-dots">
              <span
                className="dot"
                style={{ background: "#f5f5f7", border: "1.5px solid #c8c8c8" }}
              ></span>
              <span className="dot" style={{ background: "#1d1d1f" }}></span>
            </div>
            <div className="card-footer">
              <div>
                <span className="card-price">₹11,900</span>
                <span className="card-price-sub">Force Touch enabled</span>
              </div>
              <button className="btn-add">Add →</button>
            </div>
          </div>
        </div>

        <div className="product-card fade-up visible" data-cat="mouse">
          <div className="card-img" style={{ background: "#fff8f0" }}>
            <div className="card-img-inner">
              <svg className="product-svg" viewBox="0 0 100 100">
                <ellipse
                  cx="50"
                  cy="55"
                  rx="28"
                  ry="38"
                  fill="#1d1d1f"
                  stroke="#333"
                />
                <line
                  x1="50"
                  y1="28"
                  x2="50"
                  y2="78"
                  stroke="#444"
                  strokeWidth="1"
                />
                <ellipse
                  cx="50"
                  cy="42"
                  rx="8"
                  ry="5"
                  fill="rgba(0,113,227,0.5)"
                />
              </svg>
            </div>
          </div>
          <div className="card-body">
            <p className="card-category">Mouse</p>
            <h3 className="card-name">Magic Mouse — Space Black</h3>
            <p className="card-desc">
              Premium anodized aluminum in a bold midnight finish.
            </p>
            <div className="color-dots">
              <span className="dot" style={{ background: "#1d1d1f" }}></span>
              <span className="dot" style={{ background: "#2c3d6b" }}></span>
            </div>
            <div className="card-footer">
              <div>
                <span className="card-price">₹8,900</span>
                <span className="card-price-sub">2 dark colors</span>
              </div>
              <button className="btn-add">Add →</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Mice;