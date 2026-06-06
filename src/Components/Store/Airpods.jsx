import React, { useState } from "react";
import "./Store.css"

const airpods = [
  {
    id: 1,
    name: "AirPods 4",
    cat: "AirPods",
    year: 2024,
    desc: "All-new open-ear design with H2 chip. Personalized Spatial Audio and machine learning–powered voice isolation.",
    tags: ["H2 Chip", "Spatial Audio", "30hr Battery", "USB-C"],
    price: "₹13,900",
    badge: "New",
    badgeColor: "#0071e3",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-select-202409?wid=400&hei=400&fmt=png-alpha",
  },
  {
    id: 2,
    name: "AirPods 4 ANC",
    cat: "AirPods",
    year: 2024,
    desc: "AirPods 4 with Active Noise Cancellation. Adaptive Audio, Transparency mode and Conversation Awareness built in.",
    tags: ["ANC", "Adaptive Audio", "H2 Chip", "USB-C"],
    price: "₹17,900",
    badge: "New",
    badgeColor: "#0071e3",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=png-alpha",
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    cat: "AirPods Pro",
    year: 2023,
    desc: "Up to 2× more Active Noise Cancellation. Adaptive Audio with a stunning new USB-C charging case.",
    tags: ["ANC 2×", "H2 Chip", "USB-C", "Lossless"],
    price: "₹24,900",
    badge: "Popular",
    badgeColor: "#1d1d1f",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXK73LL_A?wid=400&hei=400&fmt=png-alpha",
  },
  {
    id: 4,
    name: "AirPods Max",
    cat: "AirPods Max",
    year: 2024,
    desc: "Over-ear headphones with Apple-designed dynamic driver and industry-leading ANC in five stunning finishes.",
    tags: ["40hr Battery", "Spatial Audio", "H2 Chip", "USB-C"],
    price: "₹59,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=400&hei=400&fmt=png-alpha",
  },
  {
    id: 5,
    name: "AirPods 3",
    cat: "AirPods",
    year: 2021,
    desc: "Spatial Audio with dynamic head tracking. Adaptive EQ and MagSafe charging. Designed for every ear.",
    tags: ["Spatial Audio", "Adaptive EQ", "MagSafe", "IPX4"],
    price: "₹19,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73LL_A?wid=400&hei=400&fmt=png-alpha",
  },
  {
    id: 6,
    name: "AirPods Pro (1st Gen)",
    cat: "AirPods Pro",
    year: 2022,
    desc: "Active Noise Cancellation, Transparency mode, and a customisable fit with three silicone tip sizes.",
    tags: ["ANC", "Transparency", "H1 Chip", "IPX4"],
    price: "₹19,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLWK3LL_A?wid=400&hei=400&fmt=png-alpha",
  },
  {
    id: 7,
    name: "AirPods Max (Silver)",
    cat: "AirPods Max",
    year: 2024,
    desc: "Breathtaking audio in Silver. Apple-designed 40mm dynamic driver with computational audio.",
    tags: ["Silver", "40hr Battery", "Spatial Audio", "USB-C"],
    price: "₹59,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-silver?wid=400&hei=400&fmt=png-alpha",
  },
  {
    id: 8,
    name: "AirPods 2",
    cat: "AirPods",
    year: 2019,
    desc: "H1 chip delivers 2× faster connection switching. Hey Siri hands-free and optical sensors for automatic on/off.",
    tags: ["H1 Chip", "Hey Siri", "24hr Battery", "Lightning"],
    price: "₹11,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2LL_A?wid=400&hei=400&fmt=png-alpha",
  },
];

const FALLBACK_IMG =
  "https://pngimg.com/uploads/airPods/airPods_PNG19.png";

const categories = ["All", "AirPods", "AirPods Pro", "AirPods Max"];

function AirPodsCard({ pod }) {
  const [added, setAdded] = useState(false);
  const [imgSrc, setImgSrc] = useState(pod.img);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="ap-card">
      {pod.badge && (
        <span
          className="ap-card__badge"
          style={{ backgroundColor: pod.badgeColor }}
        >
          {pod.badge}
        </span>
      )}

      <div className="ap-card__vis">
        <img
          src={imgSrc}
          alt={pod.name}
          className="ap-card__img"
          onError={() => setImgSrc(FALLBACK_IMG)}
          loading="lazy"
        />
      </div>

      <div className="ap-card__body">
        <span className="ap-card__cat">{pod.cat}</span>
        <h3 className="ap-card__name">{pod.name}</h3>
        <p className="ap-card__desc">{pod.desc}</p>

        <div className="ap-card__tags">
          {pod.tags.map((t) => (
            <span key={t} className="ap-tag">
              {t}
            </span>
          ))}
        </div>

        <div className="ap-card__footer">
          <span className="ap-card__price">{pod.price}</span>
          <button
            className={`ap-btn${added ? " ap-btn--added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AirPodsSection() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? airpods : airpods.filter((p) => p.cat === filter);

  return (
    <section className="ap-section">
      <div className="ap-header">
        <div className="ap-eyebrow">Apple Audio</div>
        <h1 className="ap-title">AirPods Lineup</h1>
        <p className="ap-subtitle">
          From AirPods 4 to AirPods Max — immersive sound crafted for every
          moment in your life.
        </p>

        <div className="ap-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ap-filter-btn${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="ap-grid">
        {filtered.map((pod, i) => (
          <div
            key={pod.id}
            style={{ animationDelay: `${i * 55}ms` }}
            className="ap-card-wrapper"
          >
            <AirPodsCard pod={pod} />
          </div>
        ))}
      </div>

      <div className="ap-section-footer">
        <p>Prices include GST. EMI available from ₹999/month. Free delivery on all orders.</p>
      </div>
    </section>
  );
}