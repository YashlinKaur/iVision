import React from "react";

const powerBankProducts = [
  {
    id: 1,
    badge: "Popular",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGPG4?wid=890&hei=890&fmt=jpeg&qlt=90&.v=dHhuazRnVXZiaEgxb25mbUdGV1VVWXExblZJSGFXSFVPMUE2c2RxMy8rTHI1T3Rua2ZCWEpxaXFZS01CYzFXdklaY0ZqN3p4QnhWMWFIdUloZmtPOGc",
    category: "Power Bank",
    name: "iPhone Air MagSafe Battery",
    desc: "Magnetic battery pack that attaches securely for wireless charging on the go.",
    price: "₹9,200",
    sub: "MagSafe compatible"
  },
  {
    id: 2,
    badge: "Best Seller",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRJ42?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cDNSU1FYREpsem1kdUJEcGhnd3Myd2tuVHYzMERCZURia3c5SzJFOTlPaUlVazJvME16NkpJaXpOUFdpcnFReVZYS21YSDgrYkZrSDEvbTBUWnRrbXc",
    category: "Power Bank",
    name: "ShiftCam SnapLight Magnetic LED Selfie Ring Light",
    desc: "Portable magnetic LED ring light for brighter selfies and video calls.",
    price: "₹4,999",
    sub: "Adjustable brightness"
  },
  {
    id: 3,
    badge: "New",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS482?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=bkU5VmlLcFd5UXNqVG5tTEVaSUxod2tuVHYzMERCZURia3c5SzJFOTlPaXQ5cGVvK0JTZUMxTGVKYTkxR0VkbUNodEZBSjdoUTg2NnRKeFFGWnlhSXc",
    category: "Power Bank",
    name: "ShiftCam SnapGrip Pro with Next Generation Powerbank",
    desc: "Camera-style grip with built-in battery and wireless charging support.",
    price: "₹8,199",
    sub: "Grip + Power Bank"
  },
];

function PowerBanks() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            iPhone <span>Power Banks</span>
          </h1>
          <p>Never run out of battery, wherever you go.</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {powerBankProducts.map((item) => (
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

export default PowerBanks;