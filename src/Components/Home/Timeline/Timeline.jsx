import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const STEPS = [
  {
    id: "01",
    label: "Order Placed",
    sub: "Confirmed & logged",
    detail:
      "Your order is received and entered into our authenticated inventory system.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="5"
          y="8"
          width="22"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M11 8V6a5 5 0 0 1 10 0v2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M11 17h10M11 21h6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "02",
    label: "Authenticity Check",
    sub: "IMEI verified & sealed",
    detail:
      "Every device is individually IMEI-verified against Apple's registry. Box seal is inspected.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 4l10 4v8c0 5.5-4.2 10.3-10 12C6.2 26.3 2 21.5 2 16V8l10-4z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M11 16l3 3 7-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "03",
    label: "Sealed & Packed",
    sub: "Anti-tamper wrapped",
    detail:
      "Secured in our branded anti-tamper packaging. Photographed before dispatch.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4"
          y="12"
          width="24"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M4 16h24" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M12 4h8l4 8H8l4-8z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M16 16v12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>
    ),
  },
  {
    id: "04",
    label: "Delivered",
    sub: "Same-day available",
    detail:
      "White-glove delivery to your door. Same-day slots available across major cities.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 20h18V10H2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M20 14h5l5 5v4h-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="24" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 24h10" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 24H5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

const UnboxingTimeline = () => {
  const [visible, setVisible] = useState([]);
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.idx, 10);
            setVisible((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.25 },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ubt-section" ref={sectionRef}>
      {/* Background grid texture */}
      <div className="ubt-grid-bg" aria-hidden="true" />

      <div className="ubt-inner">
        {/* Header */}
        <header className="ubt-header">
          <p className="ubt-eyebrow">
            <span className="ubt-eyebrow-line" />
            Our Process
            <span className="ubt-eyebrow-line" />
          </p>
          <h2 className="ubt-title">
            Your Apple Journey
            <span>in four carefully crafted steps.</span>
          </h2>
          <p className="ubt-desc">
            Every Apple product goes through a rigorous 4-step journey before it
            reaches you.
          </p>
        </header>

        {/* Timeline */}
        <div className="ubt-timeline">
          {/* Connector line */}
          <div className="ubt-line-track">
            <div className="ubt-line-fill" />
          </div>

          {STEPS.map((step, i) => {
            const isVis = visible.includes(i);
            const isActive = active === i;
            return (
              <div
                key={step.id}
                className={`ubt-step ${isVis ? "is-visible" : ""} ${isActive ? "is-active" : ""}`}
                data-idx={i}
                ref={(el) => (stepRefs.current[i] = el)}
                style={{ "--delay": `${i * 0.14}s` }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Node */}
                <div className="ubt-node">
                  <div className="ubt-node-ring" />
                  <div className="ubt-node-core">
                    <div className="ubt-icon">{step.icon}</div>
                  </div>
                </div>

                {/* Card alternates above/below on desktop */}
                <div className="ubt-card">
                  <span className="ubt-step-id">{step.id}</span>
                  <h3 className="ubt-step-label">{step.label}</h3>
                  <p className="ubt-step-sub">{step.sub}</p>
                  <p className="ubt-step-detail">{step.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <div className="ubt-footer-strip">
          <span>100% Authentic</span>
          <span className="ubt-dot-sep">·</span>
          <span>IMEI Verified</span>
          <span className="ubt-dot-sep">·</span>
          <span>Same-Day Delivery</span>
          <span className="ubt-dot-sep">·</span>
          <span>1-Year Warranty</span>
        </div>
      </div>
    </section>
  );
};

export default UnboxingTimeline;
