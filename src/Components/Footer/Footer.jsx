import React, { useState } from "react";
import "./Footer.css";

const NAV = [
  {
    heading: "Shop",
    links: ["iPhone", "MacBook", "iPad", "Apple Watch", "AirPods", "Accessories"],
  },
  {
    heading: "Company",
    links: ["About Us", "Our Promise", "Authenticity", "Careers", "Press"],
  },
  {
    heading: "Support",
    links: ["Track Order", "Returns & Exchange", "Warranty", "Contact Us", "FAQs"],
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="4"/>
        <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        <path d="M8.5 9.5s.5-1 1.5-1 2 1 2 1 .5 2-1 3.5S8 15 8 15s-1-1-1-2 1.5-3.5 1.5-3.5z"/>
      </svg>
    ),
  },
];

const BADGES = [
  { label: "100% Authentic", icon: "✦" },
  { label: "IMEI Verified", icon: "✦" },
  { label: "Same-Day Delivery", icon: "✦" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="ft-footer">
      <div className="ft-wordmark-bg" aria-hidden="true">
        <span>IVISION</span>
      </div>

      <div className="ft-inner">

        {/* ── TOP BAND ── */}
        <div className="ft-top">

          {/* Brand col */}
          <div className="ft-brand-col">
            <div className="ft-logo">
              <div className="ft-logo-mark">
                <svg viewBox="0 0 28 28" fill="none">
                  <rect x="1" y="1" width="26" height="26" rx="6" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M9 20c1.5-2 2.5-4 5-4s3.5 2 5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <circle cx="14" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              </div>
              <span className="ft-logo-name">ivision<em>Store</em></span>
            </div>

            <p className="ft-brand-desc">
              India's most trusted Apple reseller. Every device authenticated, every order handled with care.
            </p>

            <div className="ft-badges">
              {BADGES.map((b) => (
                <span key={b.label} className="ft-badge">
                  <span className="ft-badge-dot">{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>

            <div className="ft-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href="#" className="ft-social-btn" aria-label={s.label} onClick={e => e.preventDefault()}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV.map((col) => (
            <div key={col.heading} className="ft-nav-col">
              <h4 className="ft-nav-heading">{col.heading}</h4>
              <ul className="ft-nav-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="ft-nav-link" onClick={e => e.preventDefault()}>
                      <span className="ft-link-arrow">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter col */}
          <div className="ft-newsletter-col">
            <h4 className="ft-nav-heading">Stay in the loop</h4>
            <p className="ft-newsletter-desc">
              Flash deals, new arrivals, and exclusive offers — straight to your inbox.
            </p>

            {subscribed ? (
              <div className="ft-subscribed">
                <span className="ft-subscribed-icon">✓</span>
                <span>You're in. Watch your inbox.</span>
              </div>
            ) : (
              <form className="ft-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className="ft-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="ft-submit">
                  Subscribe
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}

            <div className="ft-contact-block">
              <span className="ft-contact-line">
                <svg viewBox="0 0 20 20" fill="none" width="14" height="14">
                  <path d="M3 4a1 1 0 0 1 1-1h3l1.5 4L7 9s1.5 3 4 4l2-1.5 4 1.5v3a1 1 0 0 1-1 1C7.163 17 3 12.837 3 7.5V4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
                +91 12345 67890
              </span>
              <span className="ft-contact-line">
                <svg viewBox="0 0 20 20" fill="none" width="14" height="14">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                hello@ivision.in
              </span>
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="ft-divider" />

        {/* ── BOTTOM BAR ── */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © {new Date().getFullYear()} iVisionStore.  · Demo project only.
          </p>
          <div className="ft-legal-links">
            <a href="#" onClick={e => e.preventDefault()}>Privacy Policy</a>
            <span>·</span>
            <a href="#" onClick={e => e.preventDefault()}>Terms of Use</a>
            <span>·</span>
            <a href="#" onClick={e => e.preventDefault()}>Shipping Policy</a>
            <span>·</span>
            <a href="#" onClick={e => e.preventDefault()}>Sitemap</a>
          </div>
          <div className="ft-made">
            Crafted with precision in India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;