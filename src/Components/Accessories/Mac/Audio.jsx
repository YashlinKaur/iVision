import React from "react";
import "./Mac.css";
import MacAudio1 from '../../../assets/MacAccessories/MacAudio1.png'
import MacAudio2 from '../../../assets/MacAccessories/MacAudio2.png'

function Audio() {

  const audioProducts = [
  {
    id: 1,
    badge: "New",
    category: "Headphones",
    img : MacAudio1,
    name: "AirPods Max 2 — Midnight",
    desc: "High-fidelity audio with Active Noise Cancellation and Spatial Audio.",
    price: "₹66,900",
    // sub: "4 colors",
    // colors: ["#2c3d6b", "#f5f5f7", "#8b6563", "#3d6b3d"],
  },
  {
    id: 2,
    badge: "",
    category: "Speakers",
    img : MacAudio2,
    name: "HomePod mini — Midnight",
    desc: "Room-filling sound with intelligent audio and seamless Apple integration.",
    price: "₹9,900",
    // sub: "3 colors",
    // colors: ["#f5f5f7", "#1d1d1f", "#f5c0a8"],
  },
];


  return (
    <section className="keyboard-section">

      {/* HEADER (same system everywhere) */}
      <div className="section-top">
        <div>
          <h1>
            Mac <span>Audio</span>
          </h1>
          <p>High-fidelity sound built for Apple ecosystem.</p>
        </div>

        <button className="view-btn">View All</button>
      </div>

      {/* GRID (same reusable structure) */}
      <div className="cards">
        {audioProducts.map((item) => (
          <div className="card" key={item.id}>

            {/* badge */}
            {item.badge && (
              <span className="badge">
                {item.badge}
              </span>
            )}

            {/* image placeholder (don’t overdesign per section) */}
            <div className="image-box">
              <img src={item.img} alt={item.name} />
            </div>

            {/* content */}
            <div className="content">

              <span className="product-type">{item.category}</span>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              {/* color system (reused logic) */}
              {/* <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
                {item.colors.map((c, i) => (
                  <span
                    key={i}
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: c,
                      border: "1px solid #d2d2d7",
                    }}
                  />
                ))}
              </div> */}

              {/* footer */}
              <div className="bottom">
                <div>
                  <h4>{item.price}</h4>
                  {/* <small>{item.sub}</small> */}
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

export default Audio;