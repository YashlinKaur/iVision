import React from "react";

const magSafeProducts = [
  {
    id: 1,
    badge: "Best Seller",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD74?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=NTJadGxVMTVIZzE3TUFTdkZDTWhCd2tuVHYzMERCZURia3c5SzJFOTlPZ3hwd2F1dWM5TE1maUVxSVV1anZjQXdYczhRdkV0elVtZUJkWHRSQU9iaHc",
    category: "MagSafe",
    name: "MagSafe Charger (1m)",
    desc: "Wireless magnetic charging that snaps perfectly onto compatible iPhones.",
    price: "₹3,700",
    sub: "Up to 25W charging"
  },
  {
    id: 2,
    badge: "New",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHXF3",
    category: "MagSafe",
    name: "MagSafe Duo Charger",
    desc: "Foldable charger designed for both iPhone and Apple Watch.",
    price: "₹11,900",
    sub: "Travel-friendly design"
  },
  {
    id: 3,
    badge: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRX12?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=VU0rbnRKb2g2Q0dsSCtkV3p6Z1lUd2tuVHYzMERCZURia3c5SzJFOTlPaGhhTUhVUWNGZzIrR0JiV3ZUTnRrN2FUdVg0TWtxcXRxTE8rSHk1S3RQVUE",
    category: "MagSafe",
    name: "Belkin BoostCharge Pro 2-in-1",
    desc: "Premium magnetic charging stand for iPhone and AirPods.",
    price: "₹11,299",
    sub: "2-in-1 wireless charging"
  },
];

function MagSafe() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            iPhone <span>MagSafe</span>
          </h1>
          <p>Effortless wireless charging — just snap and charge.</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {magSafeProducts.map((item) => (
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

export default MagSafe;