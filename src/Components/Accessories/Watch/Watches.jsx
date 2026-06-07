import React from "react";

const watchProducts = [
  {
    id: 1,
    badge: "New",
    category: "Watch",
    // img: watchSeries10,
    name: "Apple Watch Series 11",
    desc: "Thinnest Apple Watch ever. Bigger display, advanced health sensors, and watchOS 11.",
    price: "₹46,900",
    sub: "42mm · GPS + Cellular",
  },
  {
    id: 2,
    badge: "",
    category: "Watch",
    // img: watchSE,
    name: "Apple Watch SE — Midnight",
    desc: "The perfect entry into Apple Watch. Crash Detection, heart rate monitoring, and more.",
    price: "₹24,900",
    sub: "40mm · GPS",
  },
  {
    id: 3,
    badge: "Best Seller",
    category: "Watch",
    // img: watchUltra2,
    name: "Apple Watch Ultra 2 — Titanium",
    desc: "Built for extreme adventures. 60-hour battery, 49mm titanium case, precision dual-frequency GPS.",
    price: "₹89,900",
    sub: "49mm · GPS + Cellular",
  },
];

function Watches() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            Apple <span>Watch</span>
          </h1>
          <p>Crafted for health, fitness, and connection.</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {watchProducts.map((item) => (
          <div className="card" key={item.id}>
            {item.badge && (
              <span className={`badge ${item.badge === "Sale" ? "sale" : ""}`}>
                {item.badge}
              </span>
            )}

            <div className="image-box">
              {/* <img src={item.img} alt={item.name} /> */}
            </div>

            <div className="content">
              <span className="product-type">{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>

              <div className="bottom">
                <div>
                  <h4>{item.price}</h4>
                  <small>{item.sub}</small>
                </div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Watches;