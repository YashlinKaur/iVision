import React, { useState } from "react";
import "./Store.css";

const airpods = [
  {
    id: 1,
    name: "AirPods (1st Gen)",
    desc: "Original wireless earbuds with simple one-tap pairing.",
    price: "₹12,900",
    img: "https://i.pinimg.com/236x/fd/33/9b/fd339bbb57b49255183c35085eb32974.jpg"
  },
  {
    id: 2,
    name: "AirPods (2nd Gen)",
    desc: "Improved connectivity with H1 chip and Hey Siri support.",
    price: "₹14,900",
    img: "https://i.pinimg.com/1200x/cd/1d/d1/cd1dd1c9daa980d787287b1dec02a86b.jpg"
  },
  {
    id: 3,
    name: "AirPods (3rd Gen)",
    desc: "Spatial Audio, redesigned fit, and better battery life.",
    price: "₹20,900",
    img: "https://i.pinimg.com/736x/ef/42/e9/ef42e9d23af5ab4c95e0896da9291aaf.jpg"
  },
  {
    id: 4,
    name: "AirPods 4",
    desc: "Open-ear design with H2 chip and Personalized Spatial Audio.",
    price: "₹13,900",
    img: "https://i.pinimg.com/1200x/4d/b4/58/4db4585c18e25aa1327fc7d6bfdd8d61.jpg"
  },
  {
    id: 5,
    name: "AirPods Pro (1st Gen)",
    desc: "Active Noise Cancellation with in-ear silicone tips.",
    price: "₹24,900",
    img: "https://i.pinimg.com/736x/6e/78/a7/6e78a776e6d60d7993dbbb7b0fa55efa.jpg"
  },
  {
    id: 6,
    name: "AirPods Pro (2nd Gen)",
    desc: "Best-in-class ANC with Adaptive Transparency and H2 chip.",
    price: "₹24,900",
    img: "https://i.pinimg.com/736x/31/72/f9/3172f9c273a43568fa6d185a61051763.jpg"
  },
  {
    id: 7,
    name: "AirPods Max",
    desc: "Premium over-ear headphones with high-fidelity audio and ANC.",
    price: "₹59,900",
    img: "https://i.pinimg.com/736x/cb/95/73/cb95730d4aa124ea92a3ceadfbc665e6.jpg"
  },
  {
    id: 8,
    name: "AirPods Max (2nd Gen)",
    desc: "Next-gen over-ear headphones with improved H3 chip and lossless audio support.",
    price: "₹64,900",
    img: "https://i.pinimg.com/1200x/81/0e/29/810e29e546502000b431cf1fba318797.jpg"
  }
];

// Add-to-cart button component
function AddToCartButton({ onAdd }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    onAdd();

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      className={`cart-btn${added ? " added" : ""}`}
      onClick={handleClick}
    >
      {added ? "✓ Added" : "Add to Cart"}
    </button>
  );
}

export default function AirPodsSection() {
  const [cart, setCart] = useState([]);

  return (
    <div className="store-wrapper">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Experience Sound</p>
          <h1 className="hero-title">
            AirPods<span>.</span>
          </h1>
          <p className="hero-sub">
            High-fidelity audio, effortless connectivity, and iconic design.
            Choose the perfect pair for your lifestyle.
          </p>
        </div>
      </section>

      <section className="iphone-section">
        <div className="section-heading">
          <h2>All Models</h2>
        </div>

        <div className="iphone-grid">
          {airpods.map((item) => (
            <div key={item.id} className="iphone-card">
              <div className="iphone-image-box">
                <img src={item.img} alt={item.name} className="iphone-image" />
              </div>

              <div className="iphone-info">
                <h3 className="iphone-name">{item.name}</h3>
                <p className="iphone-desc">{item.desc}</p>

                <div className="iphone-bottom">
                  <span className="iphone-price">{item.price}</span>

                  <AddToCartButton
                    onAdd={() => setCart([...cart, item.id])}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}