import React, { useState } from "react";
import "./Store.css";

const iphones = [
  {
    id: 1,
    model: "iPhone 17 Pro Max",
    category: "Latest Release",
    year: 2025,
    colors: ["#2C2C2E", "#E8D5B7"],
    colorNames: ["Black Titanium", "Desert Titanium"],
    description: "The most powerful iPhone ever. Titanium design with A19 Pro chip and next-gen camera system.",
    features: ["A19 Pro Chip", "6.9\" ProMotion", "5× Optical Zoom", "48MP Fusion"],
    price: "₹1,79,900",
    badge: "New",
    badgeColor: "#0071e3",
  },
  {
    id: 2,
    model: "iPhone 17 Pro",
    category: "Latest Release",
    year: 2025,
    colors: ["#4A4A4C", "#B0C4B1"],
    colorNames: ["Black Titanium", "Natural Titanium"],
    description: "Pro-level performance in a refined titanium frame. All-new camera system with Ultra Wide.",
    features: ["A19 Pro Chip", "6.3\" ProMotion", "4× Optical Zoom", "ProRes Video"],
    price: "₹1,59,900",
    badge: "New",
    badgeColor: "#0071e3",
  },
  {
    id: 3,
    model: "iPhone 16 Pro Max",
    category: "Pro Series",
    year: 2024,
    colors: ["#3A3A3C", "#F5F0E8"],
    colorNames:["Black Titanium", "White Titanium"],
    description: "A18 Pro chip with Apple Intelligence. The biggest Pro Max display ever at 6.9 inches.",
    features: ["A18 Pro Chip", "6.9\" Super Retina", "5× Optical Zoom", "Camera Control"],
    price: "₹1,59,900",
    badge: "Popular",
    badgeColor: "#1d1d1f",
  },
  {
    id: 4,
    model: "iPhone 16 Pro",
    category: "Pro Series",
    year: 2024,
    colors: ["#1C1C1E", "#D4C5A9"],
    colorNames: ["Black Titanium", "Desert Titanium"],
    description: "Camera Control, A18 Pro, and Apple Intelligence. Pro photography in a compact design.",
    features: ["A18 Pro Chip", "6.3\" Super Retina", "4× Optical Zoom", "Camera Control"],
    price: "₹1,39,900",
    badge: null,
    badgeColor: null,
  },
  {
    id: 5,
    model: "iPhone 15 Pro Max",
    category: "Pro Series",
    year: 2023,
    colors: ["#2C2C2E", "#E8E0D5"],
    colorNames: ["Black Titanium", "Natural Titanium"],
    description: "Titanium design with A17 Pro chip. Action button and 5× telephoto camera.",
    features: ["A17 Pro Chip", "6.7\" ProMotion", "5× Optical Zoom", "Action Button"],
    price: "₹1,34,900",
    badge: null,
    badgeColor: null,
  },
  {
    id: 6,
    model: "iPhone 15 Pro",
    category: "Pro Series",
    year: 2023,
    colors: ["#4A4A4C", "#C8B8A2"],
    colorNames: ["Black Titanium", "White Titanium"],
    description: "The first iPhone with titanium. A17 Pro chip and Action button built for creators.",
    features: ["A17 Pro Chip", "6.1\" ProMotion", "3× Optical Zoom", "Action Button"],
    price: "₹1,19,900",
    badge: null,
    badgeColor: null,
  },
  {
    id: 7,
    model: "iPhone 14 Pro Max",
    category: "Classic Pro",
    year: 2022,
    colors: ["#1C1C1E", "#F5F5F0"],
    colorNames: ["Space Black", "Silver"],
    description: "Dynamic Island, Always-On display and 48MP camera. The pro revolution begins.",
    features: ["A16 Bionic", "6.7\" Always-On", "48MP Camera", "Dynamic Island"],
    price: "₹99,900",
    badge: null,
    badgeColor: null,
  },
  {
    id: 8,
    model: "iPhone 13 Pro Max",
    category: "Classic Pro",
    year: 2021,
    colors: ["#1C1C1E", "#E8E8E8"],
    colorNames: ["Graphite", "Silver"],
    description: "A15 Bionic, ProMotion display and macro photography. The original Pro Max legend.",
    features: ["A15 Bionic", "6.7\" ProMotion", "Macro Camera", "Cinematic Mode"],
    price: "₹79,900",
    badge: null,
    badgeColor: null,
  },
  {
    id: 8,
    model: "iPhone 14 Pro",
    category: "Classic Pro",
    year: 2021,
    colors: ["#1C1C1E", "#E8E8E8"],
    colorNames: ["Graphite", "Silver"],
    description: "A15 Bionic, ProMotion display and macro photography. The original Pro Max legend.",
    features: ["A15 Bionic", "6.7\" ProMotion", "Macro Camera", "Cinematic Mode"],
    price: "₹79,900",
    badge: null,
    badgeColor: null,
  },
  {
    id: 8,
    model: "iPhone 14 Pro",
    category: "Classic Pro",
    year: 2021,
    colors: ["#1C1C1E", "#E8E8E8"],
    colorNames: ["Graphite", "Silver"],
    description: "A15 Bionic, ProMotion display and macro photography. The original Pro Max legend.",
    features: ["A15 Bionic", "6.7\" ProMotion", "Macro Camera", "Cinematic Mode"],
    price: "₹79,900",
    badge: null,
    badgeColor: null,
  },
  {
    id: 8,
    model: "iPhone 13 Pro Max",
    category: "Classic Pro",
    year: 2021,
    colors: ["#1C1C1E", "#E8E8E8"],
    colorNames: ["Graphite", "Silver"],
    description: "A15 Bionic, ProMotion display and macro photography. The original Pro Max legend.",
    features: ["A15 Bionic", "6.7\" ProMotion", "Macro Camera", "Cinematic Mode"],
    price: "₹79,900",
    badge: null,
    badgeColor: null,
  },
  {
    id: 8,
    model: "iPhone 13 Pro M",
    category: "Classic Pro",
    year: 2021,
    colors: ["#1C1C1E", "#E8E8E8"],
    colorNames: ["Graphite", "Silver"],
    description: "A15 Bionic, ProMotion display and macro photography. The original Pro Max legend.",
    features: ["A15 Bionic", "6.7\" ProMotion", "Macro Camera", "Cinematic Mode"],
    price: "₹79,900",
    badge: null,
    badgeColor: null,
  },
];

function ColorDot({ color, name, active, onClick }) {
  return (
    <button
      className={`color-dot${active ? " active" : ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      title={name}
      aria-label={name}
    />    
      
  );
}

function IPhoneCard({ phone }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="iphone-card">
      {phone.badge && (
        <span
          className="card-badge"
          style={{ backgroundColor: phone.badgeColor }}
        >
          {phone.badge}
        </span>
      )}

      <div className="card-image-area">
        <div
          className="card-phone-visual"
          style={{ backgroundColor: phone.colors[selectedColor] }}
        >
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="phone-screen-glow" />
          </div>
          <div className="phone-side-btn" />
          <div className="phone-vol-btn top" />
          <div className="phone-vol-btn bottom" />
        </div>
      </div>

      <div className="card-body">
        <span className="card-category">{phone.category}</span>
        <h3 className="card-title">{phone.model}</h3>
        <p className="card-year">{phone.year}</p>
        <p className="card-desc">{phone.description}</p>

        <div className="card-features">
          {phone.features.map((f) => (
            <span key={f} className="feature-tag">{f}</span>
          ))}
        </div>

        <div className="card-colors">
          <span className="color-label">
            {phone.colorNames[selectedColor]}
          </span>
          <div className="color-dots">
            {phone.colors.map((c, i) => (
              <ColorDot
                key={i}
                color={c}
                name={phone.colorNames[i]}
                active={selectedColor === i}
                onClick={() => setSelectedColor(i)}
              />
            ))}
          </div>
        </div>

        <div className="card-footer">
          <span className="card-price">{phone.price}</span>
          <button
            className={`add-btn${added ? " added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function IPhoneSection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Latest Release", "Pro Series", "Classic Pro"];

  const filtered =
    filter === "All" ? iphones : iphones.filter((p) => p.category === filter);

  return (
    <section className="iphone-section">
      <div className="section-header">
        <div className="header-eyebrow">Apple Collection</div>
        <h1 className="section-title">iPhone Lineup</h1>
        <p className="section-subtitle">
          From the cutting-edge iPhone 17 Pro Max to the iconic 13 Pro Max —
          find your perfect iPhone.
        </p>

        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="cards-grid">
        {filtered.map((phone) => (
          <IPhoneCard key={phone.id} phone={phone} />
        ))}
      </div>

      <div className="section-footer">
        <p>Prices include GST. EMI options available from ₹3,999/month.</p>
      </div>
    </section>
  );
}