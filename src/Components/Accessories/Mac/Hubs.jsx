import React from "react";
import MacHub1 from '../../../assets/MacAccessories/MacHub1.png'
import MacHub2 from '../../../assets/MacAccessories/MacHub2.png'
// import MacHub3 from '../../../assets/MacAccessories/MacHub3.png'


function Hubs() {

  const hubProducts = [
{
  id: 1,
  badge: "Popular",
  category: "Hub",
  img : MacHub1,
  name: "Belkin Connect Thunderbolt 4 Hub",
  desc: "Expand your Mac with HDMI, USB-C, Ethernet, and more.",
  price: "₹19,499",
  sub: "Compatible with all Macs",
},
{
  id: 2,
  badge: "",
  category: "Dock",
  img : MacHub2,
  name: "CalDigit TS5 Thunderbolt Dock",
  desc: "Powerful connectivity with 18 ports and fast charging.",
  price: "₹29,990",
  sub: "Pro workflow",
},
// {
//   id: 3,
//   badge: "New",
//   category: "Hub",
//   img : MacHub3,
//   name: "Space Bar USB-C Hub — Black",
//   desc: "A sleek hub that blends perfectly beneath your keyboard.",
//   price: "₹8,200",
//   sub: "Desk-friendly design",
// },
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
              <img src={item.img} alt={item.name} />
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

                <button>Add to cart</button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Hubs;