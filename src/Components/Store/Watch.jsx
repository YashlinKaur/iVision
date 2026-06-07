import React, { useState } from "react";
import "./Store.css";

const watches = [
  {
    id: 1,
    name: "Apple Watch Series 3",
    desc: "Classic smartwatch with fitness tracking and notifications.",
    price: "₹20,900",
    img: "https://i.pinimg.com/736x/b0/4a/8e/b04a8e5c33a582a69476bea2e0dd8cde.jpg"
  },
  {
    id: 2,
    name: "Apple Watch SE (1st Gen)",
    desc: "Essential Apple Watch experience with powerful features.",
    price: "₹29,900",
    img: "https://i.pinimg.com/1200x/b6/a1/ad/b6a1ad172a25f4805b13ce356c8f181b.jpg"
  },
  {
    id: 3,
    name: "Apple Watch Series 7",
    desc: "Larger display, fast charging, and advanced health features.",
    price: "₹41,900",
    img: "https://i.pinimg.com/236x/a8/3c/40/a83c40e97b468156e54674cbf9b14843.jpg"
  },
  {
    id: 4,
    name: "Apple Watch Series 8",
    desc: "Temperature sensing, crash detection, and fitness tracking.",
    price: "₹45,900",
    img: "https://i.pinimg.com/1200x/46/bc/fc/46bcfcb0137471943e9b3f3c1b77bc9a.jpg"
  },
  {
    id: 5,
    name: "Apple Watch Ultra",
    desc: "Built for adventure with rugged titanium design and GPS.",
    price: "₹89,900",
    img: "https://i.pinimg.com/1200x/ca/c0/9d/cac09da6986fdc78c0b1fff9479402e1.jpg"
  },
  {
    id: 6,
    name: "Apple Watch SE (2nd Gen)",
    desc: "Affordable smartwatch with fitness, safety, and connectivity.",
    price: "₹29,900",
    img: "https://i.pinimg.com/736x/8a/8e/0d/8a8e0d6f9ca1255bd51f11f0bf678a00.jpg"
  },
  {
    id: 7,
    name: "Apple Watch Series 9",
    desc: "S9 chip, brighter display, and Double Tap gesture support.",
    price: "₹41,900",
    img: "https://i.pinimg.com/1200x/47/10/94/4710943136bb9e11448350c6b8d5156c.jpg"
  },
  {
    id: 8,
    name: "Apple Watch Ultra 2",
    desc: "The most advanced Apple Watch with extreme durability and precision GPS.",
    price: "₹89,900",
    img: "https://i.pinimg.com/736x/93/d6/75/93d675db8dd7da64207826c3e6fc0618.jpg"
  }
];

// Reusable Add to Cart Button
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

export default function AppleWatchSection() {
  const [cart, setCart] = useState([]);

  return (
    <div className="store-wrapper">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Stay Connected</p>
          <h1 className="hero-title">
            Apple Watch<span>.</span>
          </h1>
          <p className="hero-sub">
            Powerful health insights, fitness tracking, and seamless
            connectivity. Find the Apple Watch that's perfect for you.
          </p>
        </div>
      </section>

      <section className="iphone-section">
        <div className="section-heading">
          <h2>All Models</h2>
        </div>

        <div className="iphone-grid">
          {watches.map((item) => (
            <div key={item.id} className="iphone-card">
              <div className="iphone-image-box">
                <img
                  src={item.img}
                  alt={item.name}
                  className="iphone-image"
                />
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