import React from "react";
import "./Mac.css";

function WhyIvision() {
    return (
    <div className="why-section">
        <div className="section-header">
          <h2 className="section-title">Why <em>iVision</em></h2>
        </div>
        <div className="why-grid">
          <div className="why-card fade-up visible">
            <div className="why-icon">✓</div>
            <h4 className="why-title">100% Authentic</h4>
            <p className="why-desc">Every product is sourced directly from Apple or authorized distributors. No fakes, ever.</p>
          </div>
          <div className="why-card fade-up visible">
            <div className="why-icon">⚡</div>
            <h4 className="why-title">Fast Delivery</h4>
            <p className="why-desc">Express delivery across India. Order before 6 PM, receive by tomorrow.</p>
          </div>
          <div className="why-card fade-up visible">
            <div className="why-icon">↩</div>
            <h4 className="why-title">Easy Returns</h4>
            <p className="why-desc">15-day no-questions-asked returns. We handle everything — pickup to refund.</p>
          </div>
        </div>
    </div>
    );
}

export default WhyIvision;