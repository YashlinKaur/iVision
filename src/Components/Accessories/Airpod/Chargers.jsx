import React from "react";

const cableProducts = [
{
  id: 1,
  badge: "",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDGE4?wid=1144&hei=1144&fmt=jpeg&qlt=90",
  category: "Cable",
  name: "Beats USB-C to USB-C Woven Cable (1.5 m / 5 ft) – Nitro Navy",
  desc: "Durable woven charging cable designed for fast charging, syncing, and everyday use.",
  price: "₹1,700",
  sub: "1.5 m • Nitro Navy",
},
{
  id: 2,
  badge: "",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MW2H3?wid=532&hei=582&fmt=png-alpha",
  category: "Power Adapter",
  name: "35W Dual USB-C Port Compact Power Adapter",
  desc: "Compact dual-port power adapter for efficient charging of Apple devices at home or on the go.",
  price: "₹5,399",
  sub: "35W • Dual USB-C Ports",
},
{
  id: 3,
  badge: "",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MEQ94?wid=1144&hei=1144&fmt=jpeg&qlt=90",
  category: "Cable",
  name: "Beats USB-C to USB-C Woven Short Cable (20 cm / 8 in.) – Bolt Black",
  desc: "Ultra-portable woven USB-C cable ideal for charging and syncing devices on the move.",
  price: "₹1,699",
  sub: "20 cm • Bolt Black",
},
];

function Chargers() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            Cables <span>& Adaptar</span>
          </h1>
          <p>Keep your AirPods charged and protected.</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {cableProducts.map((item) => (
          <div className="card" key={item.id}>
            {item.badge && (
              <span className={`badge ${item.badge === "Sale" ? "sale" : ""}`}>
                {item.badge}
              </span>
            )}
            <div className="image-box">
              <img src={item.img} alt={item.name} />
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

export default Chargers;