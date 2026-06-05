import React from "react";
import "./Mac.css";

function Protection() {

  const protectionProducts = [
  {
    id: 1,
    badge: "",
    category: "Case",
    name: "MacBook Sleeve — Midnight Blue",
    desc: "Premium felt with water-resistant lining. Fits 13\" and 14\".",
    price: "₹3,299",
    sub: "4 colors",
  },
  {
    id: 2,
    badge: "New",
    category: "Skin",
    name: "MacBook Crystal Clear Hardshell",
    desc: "Snap-on protection that shows Mac design completely.",
    price: "₹2,599",
    sub: "All MacBook models",
  },
  {
    id: 3,
    badge: "",
    category: "Bag",
    name: "Leather MacBook Folio — Tan",
    desc: "Full-grain leather that ages beautifully. Magnetic closure.",
    price: "₹6,990",
    sub: "Genuine leather",
  },
];

  return (
    <section className="keyboard-section">

      {/* HEADER (standardized) */}
      <div className="section-top">
        <div>
          <h1>
            Mac <span>Protection</span>
          </h1>
          <p>Premium cases and sleeves built for durability.</p>
        </div>

        <button className="view-btn">View All</button>
      </div>

      {/* GRID (same system everywhere) */}
      <div className="cards">
        {protectionProducts.map((item) => (
          <div className="card" key={item.id}>

            {/* badge */}
            {item.badge && (
              <span className="badge">
                {item.badge}
              </span>
            )}

            {/* image placeholder */}
            <div className="image-box">
              <svg width="280" height="160" viewBox="0 0 100 80">
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="55"
                  rx="6"
                  fill="#e8e8ed"
                  stroke="#c7c7cc"
                />
              </svg>
            </div>

            {/* content */}
            <div className="content">

              <span className="product-type">{item.category}</span>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              {/* footer */}
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

export default Protection;