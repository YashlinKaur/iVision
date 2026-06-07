import React from "react";

const chargerProducts = [
  {
    id: 1,
    badge: "Popular",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MWVV3?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=ZGMwamVQM3NMNFF3dllBOFdrb0RHV2orYzFkTG5HaE9wejd5WUxYZjRMK0xZRW05UENvR2I1ditwQTlTUkJwZHVBYVpQODZ2VDA1a1lBSm83UHYrTWc",
    category: "Charger",
    name: "Apple 20W USB‑C Power Adapter",
    desc: "Compact fast charger for iPhone, iPad, and AirPods.",
    price: "₹1,900",
    sub: "20W USB-C output"
  },
  {
    id: 2,
    badge: "New",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MW2H3?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=UlZyZUlvS3NXK3R0SnlWcldDblQwV2orYzFkTG5HaE9wejd5WUxYZjRMOTBpYTU5MTRmTXNvZjlHZDhhSEpTMy80TnNnWi9hNmZjN2pQdWp3NWxCRVE",
    category: "Charger",
    name: "Apple 35W Dual USB‑C Adapter",
    desc: "Charge two devices simultaneously with intelligent power distribution.",
    price: "₹3,500",
    sub: "Dual USB-C ports"
  },
  {
    id: 3,
    badge: "",
    img: "https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A2663111-Anker_715_Charger_Nano_II_65W_1600x.png?v=1767756360",
    category: "Charger",
    name: "Anker 65W GaN USB-C Charger",
    desc: "Powerful GaN technology delivers fast charging in a compact design.",
    price: "₹2,499",
    sub: "65W fast charging"  },
];

function Chargers() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            iPhone <span>Chargers</span>
          </h1>
          <p>Stay powered up, always.</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {chargerProducts.map((item) => (
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