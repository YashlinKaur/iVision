import React from "react";
import "./Mac.css";

function Hubs() {

  const hubProducts = [
  {
    id: 1,
    badge: "Popular",
    category: "Hub",
    name: "Thunderbolt 4 Hub — 6-in-1",
    desc: "USB-C, HDMI 4K, SD Card, ethernet in one compact hub.",
    price: "₹5,499",
    sub: "Compatible with all Macs",
  },
  {
    id: 2,
    badge: "",
    category: "Dock",
    name: "CalDigit TS4 Thunderbolt Dock",
    desc: "18 ports, 98W charging, dual 6K displays supported.",
    price: "₹29,990",
    sub: "Pro workflow",
  },
  {
    id: 3,
    badge: "New",
    category: "Hub",
    name: "Space Bar USB-C Hub — Black",
    desc: "Sits under your Magic Keyboard. Invisible power.",
    price: "₹8,200",
    sub: "Desk-friendly design",
  },
];

  return (
    <section className="keyboard-section">

      {/* HEADER (same system as keyboards) */}
      <div className="section-top">
        <div>
          <h1>
            Mac <span>Hubs & Docks</span>
          </h1>
          <p>Expand your Mac setup with powerful connectivity.</p>
        </div>

        <button className="view-btn">View All</button>
      </div>

      {/* GRID (same class as keyboards) */}
      <div className="cards">
        {hubProducts.map((item) => (
          <div className="card" key={item.id}>

            {/* badge */}
            {item.badge && (
              <span className={`badge ${item.badge === "Sale" ? "sale" : ""}`}>
                {item.badge}
              </span>
            )}

            {/* image placeholder (match keyboard system) */}
            <div className="image-box">
              <svg width="280" height="160" viewBox="0 0 100 60">
                <rect
                  x="5"
                  y="10"
                  width="90"
                  height="40"
                  rx="8"
                  fill="#e8e8ed"
                  stroke="#c7c7cc"
                />
              </svg>
            </div>

            {/* content (same structure) */}
            <div className="content">
              <span className="product-type">{item.category}</span>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              {/* price block identical system */}
              <div className="bottom">
                <div>
                  <h4>{item.price}</h4>
                  <small>{item.sub}</small>
                </div>

                <button>+</button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Hubs;