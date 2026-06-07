import React from "react";

const chargerProducts = [
{
  id: 1,
  badge: "",
  category: "Charger",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT0H3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=K0tKb29xaWdxVEFoa0c0dFFRY3Jld2tuVHYzMERCZURia3c5SzJFOTlPaFdPNXNCZjFUY2U4dzhjY0xjYWZIRjFydkI0djlScXlvb25UU0c3MFZZWUE",
  name: "Magnetic Fast Charger to USB-C Cable (1m)",
  desc: "Magnetic charging cable with fast-charge support for compatible Apple Watch models.",
  price: "₹2,900",
  sub: "1m Length • USB-C"
},
{
  id: 2,
  badge: "Best Seller",
  category: "Charger",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSB72?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=NHF5R2dxc00ycks0ZjhVVjgwc0Zod2tuVHYzMERCZURia3c5SzJFOTlPaFFxTVJkZ2VXSnNtRkFMN1BoUjhUL3Q3MlhBcFlYTytoSkRQNEMzcHU5aGc",
  name: "Zens USB-C to USB-C Charging Cable Pro 3 - Dark Cherry",
  desc: "Premium braided USB-C cable designed for fast charging, durability, and everyday use.",
  price: "₹8,999",
  sub: "Dark Cherry • Pro 3"
},
{
  id: 3,
  badge: "",
  category: "Charger",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRXY2_AV1?wid=532&hei=582&fmt=png-alpha&.v=RHZuSGRPNjZKbkpybTdSS2hrUXhoU3RmTlp5VEhLWFJQOFJ5QjdiWWtSb01FU2w3UktUamh4aVoyZFBVRDV3aFhBTThrcjNPcFpyNjNLSFNaWEVMWmc",
  name: "Scosche WatchIt Keychain Apple Watch Magnetic Fast Charger - White",
  desc: "Compact keychain charger with built-in magnetic charging for Watch on the go.",
  price: "₹2,900",
  sub: "Portable Design • Watch"
}
];

function Chargers() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            Charging <span>& Power</span>
          </h1>
          <p>Keep your Apple Watch powered up, always.</p>
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