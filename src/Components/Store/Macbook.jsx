import React, { useState } from "react";
import "./Store.css";

const macbooks = [
  // ── Latest Release ──────────────────────────────
  {
    id: 1,
    model: "MacBook Pro 14\" M4 Pro",
    category: "Latest Release",
    year: 2024,
    description:
      "The most advanced 14-inch MacBook Pro ever. M4 Pro chip with a stunning Liquid Retina XDR display and up to 24 hours of battery life.",
    features: ["M4 Pro Chip", "14\" Liquid XDR", "24hr Battery", "Space Black"],
    price: "₹2,09,900",
    badge: "New",
    badgeColor: "#0071e3",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202411?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2Y3LL_A?wid=400&hei=300&fmt=png-alpha",
  },
  {
    id: 2,
    model: "MacBook Pro 16\" M4 Pro",
    category: "Latest Release",
    year: 2024,
    description:
      "Supercharged by M4 Pro. The biggest, boldest MacBook Pro with a stunning 16-inch Liquid Retina XDR display.",
    features: ["M4 Pro Chip", "16\" Liquid XDR", "24hr Battery", "Space Black"],
    price: "₹2,49,900",
    badge: "New",
    badgeColor: "#0071e3",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202411?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2U3LL_A?wid=400&hei=300&fmt=png-alpha",
  },
  {
    id: 3,
    model: "MacBook Air 13\" M4",
    category: "Latest Release",
    year: 2025,
    description:
      "Strikingly thin. Incredibly powerful. The M4 chip, a brilliant 13-inch Liquid Retina display, and a brand-new Sky Blue color.",
    features: ["M4 Chip", "13\" Liquid Retina", "18hr Battery", "Sky Blue"],
    price: "₹1,19,900",
    badge: "New",
    badgeColor: "#0071e3",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-skyblue-select-202503?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXCU3LL_A?wid=400&hei=300&fmt=png-alpha",
  },
  {
    id: 4,
    model: "MacBook Air 15\" M4",
    category: "Latest Release",
    year: 2025,
    description:
      "Big display energy. The 15-inch MacBook Air with M4 chip and Sky Blue finish — power without compromise.",
    features: ["M4 Chip", "15\" Liquid Retina", "18hr Battery", "Sky Blue"],
    price: "₹1,39,900",
    badge: "New",
    badgeColor: "#0071e3",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-skyblue-select-202503?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXCV3LL_A?wid=400&hei=300&fmt=png-alpha",
  },

  // ── Pro Series ───────────────────────────────────
  {
    id: 5,
    model: "MacBook Pro 14\" M3 Pro",
    category: "Pro Series",
    year: 2023,
    description:
      "M3 Pro chip with a next-generation GPU architecture. Hardware-accelerated ray tracing for breathtaking visuals.",
    features: ["M3 Pro Chip", "14\" Liquid XDR", "18hr Battery", "Space Black"],
    price: "₹1,99,900",
    badge: "Popular",
    badgeColor: "#1d1d1f",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202311?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRX33LL_A?wid=400&hei=300&fmt=png-alpha",
  },
  {
    id: 6,
    model: "MacBook Pro 16\" M3 Pro",
    category: "Pro Series",
    year: 2023,
    description:
      "Breathtaking 16-inch Liquid Retina XDR display. M3 Pro chip built for the most demanding workflows.",
    features: ["M3 Pro Chip", "16\" Liquid XDR", "22hr Battery", "Space Black"],
    price: "₹2,29,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202311?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRW13LL_A?wid=400&hei=300&fmt=png-alpha",
  },
  {
    id: 7,
    model: "MacBook Air 13\" M3",
    category: "Pro Series",
    year: 2024,
    description:
      "The world's best consumer laptop, now with M3. Supports two external displays and Wi-Fi 6E.",
    features: ["M3 Chip", "13\" Liquid Retina", "18hr Battery", "Midnight"],
    price: "₹1,14,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRXW3LL_A?wid=400&hei=300&fmt=png-alpha",
  },
  {
    id: 8,
    model: "MacBook Air 15\" M3",
    category: "Pro Series",
    year: 2024,
    description:
      "The 15-inch MacBook Air with M3 chip. The thinnest, lightest 15-inch laptop ever made.",
    features: ["M3 Chip", "15\" Liquid Retina", "18hr Battery", "Midnight"],
    price: "₹1,34,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202402?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRYU3LL_A?wid=400&hei=300&fmt=png-alpha",
  },

  // ── Classic ──────────────────────────────────────
  {
    id: 9,
    model: "MacBook Pro 14\" M2 Pro",
    category: "Classic",
    year: 2023,
    description:
      "M2 Pro with up to 12-core CPU and 19-core GPU. ProMotion display with up to 120Hz refresh rate.",
    features: ["M2 Pro Chip", "14\" Liquid XDR", "18hr Battery", "Space Gray"],
    price: "₹1,89,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPHF3LL_A?wid=400&hei=300&fmt=png-alpha",
  },
  {
    id: 10,
    model: "MacBook Air 13\" M2",
    category: "Classic",
    year: 2022,
    description:
      "Redesigned from the ground up. M2 chip with MagSafe charging in the iconic fanless design.",
    features: ["M2 Chip", "13\" Liquid Retina", "18hr Battery", "Midnight"],
    price: "₹99,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202206?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLXY3LL_A?wid=400&hei=300&fmt=png-alpha",
  },
  {
    id: 11,
    model: "MacBook Pro 16\" M2 Pro",
    category: "Classic",
    year: 2023,
    description:
      "M2 Pro powers the most demanding creative tasks. A massive 16-inch Liquid Retina XDR display with a 120Hz ProMotion.",
    features: ["M2 Pro Chip", "16\" Liquid XDR", "22hr Battery", "Space Gray"],
    price: "₹2,19,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNWA3LL_A?wid=400&hei=300&fmt=png-alpha",
  },
  {
    id: 12,
    model: "MacBook Air 15\" M2",
    category: "Classic",
    year: 2023,
    description:
      "The first 15-inch MacBook Air. Big, beautiful 15.3-inch Liquid Retina display in a fanless, silent design.",
    features: ["M2 Chip", "15\" Liquid Retina", "18hr Battery", "Midnight"],
    price: "₹1,19,900",
    badge: null,
    badgeColor: null,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=400&hei=300&fmt=png-alpha",
    imgFallback: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQKX3LL_A?wid=400&hei=300&fmt=png-alpha",
  },
];

const GENERIC_FALLBACK =
  "https://pngimg.com/uploads/macbook/macbook_PNG39.png";

const categories = ["All", "Latest Release", "Pro Series", "Classic"];

function MacBookCard({ mac }) {
  const [added, setAdded] = useState(false);
  const [imgSrc, setImgSrc] = useState(mac.img);
  const [triedFallback, setTriedFallback] = useState(false);

  const handleImgError = () => {
    if (!triedFallback) {
      setImgSrc(mac.imgFallback);
      setTriedFallback(true);
    } else {
      setImgSrc(GENERIC_FALLBACK);
    }
  };

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="mac-card">
      {mac.badge && (
        <span
          className="mac-card__badge"
          style={{ backgroundColor: mac.badgeColor }}
        >
          {mac.badge}
        </span>
      )}

      <div className="mac-card__vis">
        <img
          src={imgSrc}
          alt={mac.model}
          className="mac-card__img"
          onError={handleImgError}
          loading="lazy"
        />
      </div>

      <div className="mac-card__body">
        <span className="mac-card__cat">{mac.category}</span>
        <h3 className="mac-card__name">{mac.model}</h3>
        <p className="mac-card__year">{mac.year}</p>
        <p className="mac-card__desc">{mac.description}</p>

        <div className="mac-card__tags">
          {mac.features.map((f) => (
            <span key={f} className="mac-tag">
              {f}
            </span>
          ))}
        </div>

        <div className="mac-card__footer">
          <span className="mac-card__price">{mac.price}</span>
          <button
            className={`mac-btn${added ? " mac-btn--added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MacBookSection() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? macbooks
      : macbooks.filter((m) => m.category === filter);

  return (
    <section className="mac-section">
      <div className="mac-header">
        <div className="mac-eyebrow">Apple Silicon</div>
        <h1 className="mac-title">MacBook Lineup</h1>
        <p className="mac-subtitle">
          From the ultra-thin MacBook Air to the powerhouse MacBook Pro —
          find the Mac built for you.
        </p>

        <div className="mac-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`mac-filter-btn${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mac-grid">
        {filtered.map((mac, i) => (
          <div
            key={mac.id}
            className="mac-card-wrapper"
            style={{ animationDelay: `${i * 55}ms` }}
          >
            <MacBookCard mac={mac} />
          </div>
        ))}
      </div>

      <div className="mac-section-footer">
        <p>Prices include GST. EMI options available from ₹3,999/month. Free delivery on all orders.</p>
      </div>
    </section>
  );
}