import React from "react";
import "./Mac.css";

const keyboardProducts = [
  {
    id: 1,
    badge: "New",
    category: "Keyboard",
    name: "Magic Keyboard with Touch ID",
    desc: "Wireless, rechargeable with secure fingerprint login.",
    price: "₹9,900",
    sub: "Free delivery",
    colors: ["#f5f5f7", "#1d1d1f", "#e8d5c0"],
  },
  {
    id: 2,
    badge: "",
    category: "Keyboard",
    name: "Magic Keyboard — Space Gray",
    desc: "Sleek dark finish with numeric keypad for power users.",
    price: "₹12,900",
    sub: "With Numeric Keypad",
    colors: ["#1d1d1f", "#3a3a3c"],
  },
  {
    id: 3,
    badge: "Sale",
    category: "Keyboard",
    name: "Magic Keyboard — Midnight",
    desc: "Deep rich color with anodized aluminum for elegant desks.",
    price: "₹8,499",
    sub: "Special Offer",
    colors: ["#2c3d6b", "#1c2951"],
  },
];

function Keyboards() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            Mac <span>Keyboards</span>
          </h1>
          <p>Designed to work seamlessly with Mac.</p>
        </div>

        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {keyboardProducts.map((item) => (
          <div className="card" key={item.id}>
            {item.badge && (
              <span
                className={`badge ${
                  item.badge === "Sale" ? "sale" : ""
                }`}
              >
                {item.badge}
              </span>
            )}

            <div className="image-box">
              <svg
                width="280"
                height="160"
                viewBox="0 0 100 60"
              >
                <rect
                  x="5"
                  y="10"
                  width="90"
                  height="40"
                  rx="8"
                  fill="#e8e8ed"
                  stroke="#c7c7cc"
                  strokeWidth="1.5"
                />

                <rect x="12" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
                <rect x="26" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
                <rect x="40" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
                <rect x="54" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
                <rect x="68" y="18" width="15" height="7" rx="2" fill="#8e8e93"/>

                <rect x="12" y="30" width="12" height="7" rx="2" fill="#8e8e93"/>
                <rect x="28" y="30" width="34" height="7" rx="2" fill="#8e8e93"/>
                <rect x="66" y="30" width="12" height="7" rx="2" fill="#007aff"/>
              </svg>
            </div>

            <div className="content">
              <span className="product-type">
                {item.category}
              </span>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                {item.colors.map((color, index) => (
                  <span
                    key={index}
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: color,
                      border: "1px solid #d2d2d7",
                    }}
                  />
                ))}
              </div>

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

export default Keyboards;