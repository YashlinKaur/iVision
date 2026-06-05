import React from "react";
import "./Mac.css";

function Display() {

  const displayProducts = [
  {
    id: 1,
    badge: "New",
    category: "Display",
    name: "Apple Studio Display",
    desc: "27-inch 5K Retina, 600 nits brightness, built-in webcam and speakers.",
    price: "₹1,59,900",
    sub: "5K Retina · True Tone",
  },
  {
    id: 2,
    badge: "",
    category: "Display",
    name: "LG UltraFine 4K Display",
    desc: "24-inch 4K, USB-C one-cable solution, designed for Mac.",
    price: "₹54,900",
    sub: "4K · USB-C",
  },
];


  return (
    <section className="keyboard-section">

      {/* HEADER (standardized system) */}
      <div className="section-top">
        <div>
          <h1>
            Mac <span>Displays</span>
          </h1>
          <p>High-resolution monitors built for creative workflows.</p>
        </div>

        <button className="view-btn">View All</button>
      </div>

      {/* GRID (same reusable system) */}
      <div className="cards">
        {displayProducts.map((item) => (
          <div className="card" key={item.id}>

            {/* badge */}
            {item.badge && (
              <span className="badge">
                {item.badge}
              </span>
            )}

            {/* image placeholder (STOP custom SVG per section) */}
            <div className="image-box">
              <svg width="280" height="160" viewBox="0 0 100 80">
                <rect
                  x="8"
                  y="8"
                  width="84"
                  height="52"
                  rx="5"
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

export default Display;