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
    name: "Apple Watch",
    tagline: "The ultimate health companion.",
    badge: "Series 10",
    products: ["Watch Series 10", "Watch Ultra 2", "Watch SE"],
    startingPrice: "₹41,900",
    number: "03",
  },
  {
    id: 4,
    name: "AirPods",
    tagline: "Hear everything. Feel everything.",
    badge: "Best Seller",
    products: ["AirPods Pro 2", "AirPods 4", "AirPods Max"],
    startingPrice: "₹19,900",
    number: "04",
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

      case "Apple Watch":
        navigate("/watch");
        break;

      case "AirPods":
        navigate("/airpods");
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

      <div className="explore-showcase">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="showcase-card"
            onClick={() => handleNavigation(cat.name)}
          >
            <div className="showcase-left">
              <span className="showcase-number">{cat.number}</span>

              <h2>{cat.name}</h2>

              <p>{cat.tagline}</p>

              <div className="showcase-products">
                {cat.products.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>

            <div className="showcase-right">
              <div className="price-box">
                <small>Starting at</small>
                <h3>{cat.startingPrice}</h3>
              </div>

              <button>
                Explore
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
