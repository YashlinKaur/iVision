import React from "react";
import { Link } from 'react-router-dom'

const cushionsProducts = [
{
  id: 1,
  badge: "",
  category: "Ear Tips",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGYT4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=bmpwMmloREYzTVZ6T25lNDBLQkVud2tuVHYzMERCZURia3c5SzJFOTlPZ1p3a1FSWkNyRzExM1dnU25TSHAxTm8zZXJNVUlPNEVxL2lGbWx2aS83Wnc",
  name: "AirPods Pro 3 Ear Tips - 2 sets (M)",
  desc: "Soft silicone ear tips designed for a secure and comfortable fit with AirPods Pro.",
  price: "₹850",
  sub: "2 sets • Medium size",
},
{
  id: 2,
  badge: "",
  category: "Ear Cushions",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MWU83?wid=890&hei=890&fmt=jpeg&qlt=90&.v=dmZGa3loL0ZKUldkNHhaaTVXQUpUNHExblZJSGFXSFVPMUE2c2RxMy8rSWNvSnowcHI4U2kvUVB2WHR1bzJLTm9VVThNYjVSb21YWVVyaTBoQU5ieFE",
  name: "AirPods Max Ear Cushions - Green",
  desc: "Breathable knit mesh cushions with memory foam for exceptional comfort and sound isolation.",
  price: "₹6,900",
  sub: "Green finish",
},
{
  id: 3,
  badge: "",
  category: "Ear Cushions",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MA6G4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=MmNHRVRoZFpRMzZKT2crZEVGcWNuUWtuVHYzMERCZURia3c5SzJFOTlPaTI2T1NQUWdyeTZZTEdQZGc0bm9qVFZhNWtJYXFzVFlmeUdacWNXbVR6Rmc",
  name: "AirPods Max Ear Cushions - Purple",
  desc: "Soft memory foam ear cushions wrapped in acoustic fabric for a premium listening experience.",
  price: "₹6,900",
  sub: "Purple finish",
}
];

function EarCushions() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            Ear Tips <span>& Cushions</span>
          </h1>
          <p>Comfort, fit, and sound. Tailored for your AirPods.</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {cushionsProducts.map((item) => (
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

export default EarCushions;