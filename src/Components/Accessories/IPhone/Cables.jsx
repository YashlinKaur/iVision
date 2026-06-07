import React from "react";

const cableProducts = [
  {
    id: 1,
    badge: "New",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MM0A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=M1QzMm9ybmlkQ3d6ZGgvOEtLT2s2d2tuVHYzMERCZURia3c5SzJFOTlPakdhd3hTd0Z4eVU5dlRoTFZsS1dHQnF1RHVsWWtITU8zLy9oRVFmWitIakE",
    category: "Cable",
    name: "USB-C to Lightning Cable (1m)",
    desc: "Fast charging and reliable data syncing for iPhone, iPad, and AirPods.",
    price: "₹1,700",
    sub: "1 metre length",
  },
  {
    id: 2,
    badge: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQGH2?wid=890&hei=890&fmt=jpeg&qlt=90&.v=ckd1R0UvYi9WeWlzR2ZWYUZJWjBjWXExblZJSGFXSFVPMUE2c2RxMy8rS0RxVjd3UW9Sd3NhM3FVVXYvTFpQWG1ESE8xdmF2WjZTRG9sQWlPRUs2Y0E",
    category: "Cable",
    name: "USB-C to Lightning Cable (2m)",
    desc: "Extra-long cable for convenient charging and syncing from a distance.",
    price: "₹2,500",
    sub: "2 metre length"
  },
  {
    id: 3,
    badge: "Popular",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MU2G3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=MkZNbUNINEozYTU1b25iT2hXdjB4d2tuVHYzMERCZURia3c5SzJFOTlPakNpaTMzRWlORGJoUWJ0cmszMXhJV3N4ZHpOaGpXU0t2QmowajQ3VWFTenc",
    category: "Cable",
    name: "240W USB-C Charge Cable (2 m)",
    desc: "Supports ultra-fast 240W charging and high-speed data transfer.",
    price: "₹2,599",
    sub: "240W Power Delivery"
  },
];

function Cables() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            iPhone <span>Cables</span>
          </h1>
          <p>Fast, durable cables built for everyday use.</p>
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

export default Cables;