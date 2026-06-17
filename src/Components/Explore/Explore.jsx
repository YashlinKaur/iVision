import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";

const categories = [
  {
    id: 1,
    name: "iPhone",
    tagline: "Supercharged by Apple Intelligence.",
    badge: "New",
    products: ["iPhone 17 Pro", "iPhone 17", "iPhone 16"],
    startingPrice: "₹79,900",
    number: "01",
  },
  {
    id: 2,
    name: "Mac",
    tagline: "Power meets portability.",
    badge: "M4 Chip",
    products: ["MacBook Air", "MacBook Pro", "Mac mini", "iMac"],
    startingPrice: "₹92,900",
    number: "02",
  },
  {
    id: 3,
    name: "iPad",
    tagline: "Your next computer is not a computer.",
    badge: "M4",
    products: ["iPad Pro", "iPad Air", "iPad mini", "iPad"],
    startingPrice: "₹35,900",
    number: "03",
  },
  {
    id: 4,
    name: "Apple Watch",
    tagline: "The ultimate health companion.",
    badge: "Series 10",
    products: ["Watch Series 10", "Watch Ultra 2", "Watch SE"],
    startingPrice: "₹41,900",
    number: "04",
  },
  {
    id: 5,
    name: "AirPods",
    tagline: "Hear everything. Feel everything.",
    badge: "Best Seller",
    products: ["AirPods Pro 2", "AirPods 4", "AirPods Max"],
    startingPrice: "₹19,900",
    number: "05",
  },
  {
    id: 6,
    name: "Accessories",
    tagline: "Complete your Apple ecosystem.",
    badge: "500+ Items",
    products: ["MagSafe", "Cases", "Cables", "Apple Pencil"],
    startingPrice: "₹1,900",
    number: "06",
  },
];

const Explore = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    switch (category) {
      case "iPhone":
        navigate("/iphone");
        break;

      case "Mac":
        navigate("/macbook");
        break;

      case "iPad":
        navigate("/Store");
        break;

      case "Apple Watch":
        navigate("/watch");
        break;

      case "AirPods":
        navigate("/airpods");
        break;

      case "Accessories":
        navigate("/accessories");
        break;

      default:
        navigate("/Store");
    }
  };

  return (
    <section className="explore-section">
      <div className="explore-header">
        <p className="explore-eyebrow">
          <span className="eyebrow-line" />
          Our Collection
          <span className="eyebrow-line" />
        </p>
        <h2 className="explore-title">
          Explore by <em>category</em>
        </h2>
        <p className="explore-subtitle">
          Every Apple product, every category — authenticated and delivered with
          white-glove care.
        </p>
      </div>

      <div className="explore-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`explore-card${hovered === cat.id ? " is-hovered" : ""}`}
            onMouseEnter={() => setHovered(cat.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="card-hover-bg" />

            <div className="card-number">{cat.number}</div>
            <div className="card-badge">{cat.badge}</div>

            <div className="card-body">
              <h3 className="card-name">{cat.name}</h3>
              <p className="card-tagline">{cat.tagline}</p>
            </div>

            <div className="card-divider" />

            <div className="card-footer">
              <div className="card-products">
                {cat.products.slice(0, 3).map((p, i) => (
                  <span key={i} className="product-chip">
                    {p}
                  </span>
                ))}
                {cat.products.length > 3 && (
                  <span className="product-chip chip-more">
                    +{cat.products.length - 3}
                  </span>
                )}
              </div>
              <div className="card-cta">
                <span className="starting-from">
                  From <strong>{cat.startingPrice}</strong>
                </span>
                <button
                  className="explore-btn"
                  onClick={() => handleNavigation(cat.name)}
                  aria-label={`Shop ${cat.name}`}
                >
                  <span>Shop</span>
                  <svg
                    className="btn-arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 7h8M8 3.5l4 3.5-4 3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
