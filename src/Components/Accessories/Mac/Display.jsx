import React from "react";
import "./Mac.css";
import MacDisplay1 from '../../../assets/MacAccessories/MacDisplay1.png'
import MacDisplay2 from '../../../assets/MacAccessories/MacDisplay2.png'

function Display() {

  const displayProducts = [
{
  id: 1,
  badge: "Premium",
  category: "Display",
  img: MacDisplay1,
  name: "Apple Studio Display",
  desc: "27-inch 5K Retina display with Nano-Texture Glass, True Tone technology, and adjustable stand for a premium Mac experience.",
  price: "₹2,79,900",
  sub: "5K Retina · Nano-Texture",
},
{
  id: 2,
  badge: "Best Seller",
  category: "Display",
  img: MacDisplay2,
  name: "LG UltraFine 4K Monitor",
  desc: "27-inch 4K UHD IPS display with HDR10, 60Hz refresh rate, anti-glare coating, and vibrant color accuracy.",
  price: "₹19,999",
  sub: "4K UHD · HDR10",
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
              <img src={item.img} alt={item.name} />
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