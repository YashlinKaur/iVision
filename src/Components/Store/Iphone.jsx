import { useState } from "react";
import "./Store.css";

const PRODUCTS = [
 {
  id: 1,
  category: "Pro Series",
  name: "iPhone 17 Pro Max",
  price: "₹1,34,900",
  badge: "New",
  desc: "Titanium design, advanced AI features, and Apple's most powerful camera system yet.",
  image: "https://i.pinimg.com/originals/74/ed/6a/74ed6a5afdaeac95371d6de24afcb716.png",
  tags: ["A19 Pro", "6.9″ Display", "8K Video", "Pro Camera"],
  colors: ["#c2b49a", "#2e2b28", "#e8e0d5", "#4a4e4d"],
},

{
  id: 2,
  category: "Essential",
  name: "iPhone 17e",
  price: "₹79,900",
  badge: "New",
  desc: "Modern iPhone essentials with fast performance and all-day battery life.",
  image: "https://i.pinimg.com/736x/59/f8/aa/59f8aaf221ed2404bddb14b61d47bed3.jpg",
  tags: ["A18 Chip", "Face ID", "USB-C", "5G"],
  colors: ["#3a7d7e", "#e8c9b2", "#2d2d2d", "#d4e0d4"],
},

{
  id: 3,
  category: "Everyday Choice",
  name: "iPhone 17",
  price: "₹59,900",
  badge: "Sale",
  desc: "The perfect balance of performance, camera quality, and everyday usability.",
  image: "https://i.pinimg.com/736x/5e/fa/b6/5efab697bccfddab13ec2d4d262b02ec.jpg",
  tags: ["A18 Chip", "Dynamic Island", "48MP Camera", "USB-C"],
  colors: ["#e5c94a", "#f2c0a7", "#aacabf", "#2a2a2a"],
},

{
  id: 4,
  category: "Pro Series",
  name: "iPhone 16 Pro Max",
  price: "₹1,19,900",
  badge: null,
  desc: "Pro-grade photography, titanium build, and stunning ProMotion display.",
  image: "https://i.pinimg.com/736x/9d/08/51/9d0851a1422117b18ddb1f925f75df8d.jpg",
  tags: ["A18 Pro", "120Hz ProMotion", "5× Zoom", "Titanium"],
  colors: ["#2e2b28", "#c2b49a", "#e8e0d5"],
},

{
  id: 5,
  category: "Large Screen",
  name: "iPhone 16 Plus",
  price: "₹89,900",
  badge: null,
  desc: "A massive display and incredible battery life built for entertainment.",
  image: "https://i.pinimg.com/736x/58/06/ff/5806ff82cfd27a05ebbf3d3e493f162f.jpg",
  tags: ["6.7″ OLED", "Long Battery", "48MP Camera", "Dynamic Island"],
  colors: ["#e8c0c7", "#3a7d7e", "#1a1a1a", "#eae6df"],
},

{
  id: 6,
  category: "Everyday Choice",
  name: "iPhone 16",
  price: "₹49,900",
  badge: "Best Value",
  desc: "Fast, reliable, and packed with the features most people need every day.",
  image: "https://i.pinimg.com/1200x/8c/cb/4d/8ccb4d9eb1f8f664326b2813bf607797.jpg",
  tags: ["A18 Chip", "48MP Camera", "USB-C", "5G"],
  colors: ["#e8e3d8", "#394a58", "#692929", "#1a1a1a"],
},
  {
  id: 7,
  category: "Pro Series",
  name: "iPhone 15 Pro Max",
  price: "₹89,900",
  desc: "Titanium design with powerful A17 Pro performance and advanced zoom photography.",
  image: "https://i.pinimg.com/736x/53/c3/71/53c371651b8c8a2f2b9414e2416a9f48.jpg",
  tags: ["A17 Pro", "Titanium", "5× Telephoto", "USB-C"],
  colors: ["#c4b9a7", "#3f3f41", "#f4f2ed", "#4f4f51"],
},

{
  id: 8,
  category: "Large Screen",
  name: "iPhone 15 Plus",
  price: "₹69,900",
  desc: "Big display, exceptional battery life, and a stunning 48MP camera.",
  image: "https://i.pinimg.com/736x/2b/4e/2d/2b4e2d1821f4b3f50dcf94430bbc3c0d.jpg",
  tags: ["A16 Bionic", "48MP Camera", "Dynamic Island"],
  colors: ["#f6d9d7", "#d7e5a3", "#a7c7e7", "#1f1f1f"],
},

{
  id: 9,
  category: "Everyday Choice",
  name: "iPhone 15",
  price: "₹59,900",
  desc: "Powerful everyday performance with Dynamic Island and USB-C connectivity.",
  image: "https://i.pinimg.com/736x/24/57/77/2457778e56d891f4b0cc73d498ae647a.jpg",
  tags: ["A16 Bionic", "Dynamic Island", "USB-C"],
  colors: ["#f6d9d7", "#d7e5a3", "#a7c7e7", "#1f1f1f"],
},

{
  id: 10,
  category: "Pro Series",
  name: "iPhone 14 Pro Max",
  price: "₹74,900",
  desc: "Always-On Display, Dynamic Island, and Apple's first 48MP Pro camera.",
  image: "https://i.pinimg.com/736x/77/39/83/773983dd12472a8e321cdbf74e952528.jpg",
  tags: ["A16 Bionic", "48MP Camera", "Always-On"],
  colors: ["#5c4d7d", "#d5c7b0", "#3a3a3c", "#e8e5de"],
},

{
  id: 11,
  category: "Large Screen",
  name: "iPhone 14 Plus",
  price: "₹54,900",
  desc: "A huge display paired with incredible battery life for entertainment lovers.",
  image: "https://i.pinimg.com/1200x/a5/a8/2f/a5a82f2019d448cbb900331ce726e90e.jpg",
  tags: ["A15 Bionic", "6.7″ OLED", "Long Battery"],
  colors: ["#e8e3d8", "#394a58", "#692929", "#1a1a1a"],
},

{
  id: 12,
  category: "Everyday Choice",
  name: "iPhone 14",
  price: "₹49,900",
  desc: "Reliable performance, enhanced safety features, and excellent cameras.",
  image: "https://i.pinimg.com/736x/ba/0e/f4/ba0ef4f259b71eecab1784150a994112.jpg",
  tags: ["A15 Bionic", "Crash Detection", "Satellite SOS"],
  colors: ["#e8e3d8", "#394a58", "#692929", "#1a1a1a"],
},

{
  id: 13,
  category: "Pro Series",
  name: "iPhone 13 Pro Max",
  price: "₹49,900",
  desc: "ProMotion technology, premium cameras, and outstanding battery life.",
  image: "https://i.pinimg.com/1200x/51/ad/f3/51adf327343f44f700cfdc8433cac0ab.jpg",
  tags: ["A15 Bionic", "120Hz ProMotion", "Telephoto"],
  colors: ["#d4cbb8", "#50616b", "#f5f5f0", "#1f1f1f"],
},

{
  id: 14,
  category: "Everyday Choice",
  name: "iPhone 13",
  price: "₹39,900",
  desc: "A balanced iPhone experience with great cameras and dependable performance.",
  image: "https://i.pinimg.com/1200x/73/94/cb/7394cb093abc66d681640fff65dcf30a.jpg",
  tags: ["A15 Bionic", "Dual Camera", "5G"],
  colors: ["#f6c8d3", "#bfd8b8", "#a7c7e7", "#1a1a1a"],
},

{
  id: 15,
  category: "Compact",
  name: "iPhone 13 Mini",
  price: "₹34,900",
  desc: "Small in size, big on performance with the powerful A15 Bionic chip.",
  image: "https://i.pinimg.com/736x/6f/c9/1a/6fc91a20112ccd7e584b807077f71333.jpg",
  tags: ["A15 Bionic", "Compact Design", "5G"],
  colors: ["#f6c8d3", "#bfd8b8", "#a7c7e7", "#1a1a1a"],
},
];

function CartButton() {
  const [added, setAdded] = useState(false);
  function handleClick() {
    if (added) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }
  return (
    <button className={`cart-btn${added ? " added" : ""}`} onClick={handleClick}>
      {added ? "✓ Added" : "Add to cart"}
    </button>
  );
}

function ProductCard({ product }) {
  const [activeColor, setActiveColor] = useState(0);

  return (
    <div className="iphone-card">
      <div className="iphone-image-box">
        {product.badge && (
          <span className="badge">{product.badge}</span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="iphone-image"
        />
      </div>

      <div className="iphone-info">
        <span className="iphone-category">
          {product.category}
        </span>

        <p className="iphone-name">{product.name}</p>

        <p className="iphone-desc">
          {product.desc}
        </p>

        <div className="color-dots">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className={
                activeColor === index
                  ? "color-dot active"
                  : "color-dot"
              }
              style={{ backgroundColor: color }}
              onClick={() => setActiveColor(index)}
            />
          ))}
        </div>

        <div className="iphone-tags">
          {product.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="iphone-bottom">
          <span className="iphone-price">
            {product.price}
          </span>

          <CartButton />
        </div>
      </div>
    </div>
  );
}

function Store() {
  return (
    <div className="store-wrapper">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">
            Summer 2025 Drop
          </p>

          <h1 className="hero-title">
            Built Different.
            <br />
            <span>Priced Right.</span>
          </h1>

          <p className="hero-sub">
            The latest iPhones. Bold colors, titanium builds,
            and a camera that outthinks the moment.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              Shop Now
            </button>

            <button className="btn btn-outline">
              Explore Models
            </button>
          </div>
        </div>
      </section>

      <section className="iphone-section">
        <div className="section-heading">
          <h2>iPhone Lineup</h2>

          <p>
            Find the model that fits your life — and your budget.
          </p>
        </div>

        <div className="iphone-grid">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Store;
