import { useState, useEffect, useRef } from "react";
import "./Store.css";

/* ─── Product Data ─────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: "AirTag 2",
    cat: "Accessories",
    tag: "Tracking · 2nd Gen",
    month: "Jan 2026",
    price: "$29",
    priceNote: "From / 4-pack $99",
    desc: "Second-gen UWB chip delivers 50% longer Precision Finding range, a 50% louder speaker, and extended Bluetooth reach.",
    specs: ["2nd-gen UWB", "+50% Range", "Louder Speaker", "IP68"],
    image: "https://images.unsplash.com/photo-1609592806596-b3cf64b0cf2f?w=800&q=80",
    accent: "#c8a97e",
    isNew: true,
    coming: false,
  },
  {
    id: 2,
    name: "iPhone 17e",
    cat: "iPhone",
    tag: "iPhone · A18 Chip",
    month: "Mar 2026",
    price: "$599",
    priceNote: "Starting from",
    desc: "The most capable entry-level iPhone yet — A18 chip, Apple Intelligence, and a stunning 6.1″ OLED all for $599.",
    specs: ["A18 Chip", "6.1″ OLED", "Apple Intelligence", "48MP"],
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80",
    accent: "#a0b4d4",
    isNew: true,
    coming: false,
  },
  {
    id: 3,
    name: "MacBook Neo",
    cat: "Mac",
    tag: "Mac · A18 Pro",
    month: "Mar 2026",
    price: "$599",
    priceNote: "Starting from",
    desc: "Apple's most accessible Mac laptop ever. A18 Pro chip with iPhone-class AI in Silver, Blush, Citrus, and Indigo.",
    specs: ["A18 Pro", "13-inch", "16hr Battery", "Citrus/Indigo"],
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80",
    accent: "#f0c070",
    isNew: true,
    coming: false,
  },
  {
    id: 4,
    name: "MacBook Air M5",
    cat: "Mac",
    tag: "Mac · M5 Chip",
    month: "Mar 2026",
    price: "$1,099",
    priceNote: "13-inch from",
    desc: "The world's best-selling laptop reimagined with M5 — fanless, all-day battery, and Apple Intelligence built in.",
    specs: ["M5 Chip", "13 / 15-inch", "18hr Battery", "Fanless"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    accent: "#8eb0d8",
    isNew: false,
    coming: false,
  },
  {
    id: 5,
    name: "MacBook Pro M5",
    cat: "Mac",
    tag: "Mac · M5 Pro / Max",
    month: "Mar 2026",
    price: "$1,999",
    priceNote: "14-inch M5 Pro from",
    desc: "M5 Pro and M5 Max chips with up to 128GB unified memory. The most powerful MacBook Pro ever built.",
    specs: ["M5 Pro/Max", "14 / 16-inch", "128GB RAM", "ProMotion"],
    image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&q=80",
    accent: "#c0c0c8",
    isNew: false,
    coming: false,
  },
  {
    id: 6,
    name: "iPad Air M4",
    cat: "iPad",
    tag: "iPad · M4 Chip",
    month: "Mar 2026",
    price: "$599",
    priceNote: "11-inch from",
    desc: "M4 chip, Apple Intelligence, and Pencil Pro support make the new iPad Air the most capable mid-range tablet ever.",
    specs: ["M4 Chip", "11 / 13-inch", "Apple Intelligence", "Pencil Pro"],
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    accent: "#c8a97e",
    isNew: true,
    coming: false,
  },
  {
    id: 7,
    name: "Studio Display",
    cat: "Display",
    tag: "Display · 5K Retina",
    month: "Mar 2026",
    price: "$1,599",
    priceNote: "Starting from",
    desc: "Thunderbolt 5, a sharper 12MP Center Stage webcam, and six-speaker sound system in the iconic 27-inch form factor.",
    specs: ["27-inch 5K", "Thunderbolt 5", "12MP Webcam", "6-Speaker"],
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    accent: "#a0b4d4",
    isNew: false,
    coming: false,
  },
  {
    id: 8,
    name: "Studio Display XDR",
    cat: "Display",
    tag: "Display · Mini-LED",
    month: "Mar 2026",
    price: "$2,499",
    priceNote: "Starting from",
    desc: "Mini-LED with ProMotion 120Hz, extreme dynamic range, and 10,000 nits peak brightness for creative pros.",
    specs: ["Mini-LED", "120Hz ProMotion", "10000 nits", "XDR"],
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    accent: "#d4b896",
    isNew: true,
    coming: false,
  },
  {
    id: 9,
    name: "AirPods Max 2",
    cat: "Audio",
    tag: "Audio · H2 Chip",
    month: "Mar 2026",
    price: "$549",
    priceNote: "Starting from",
    desc: "H2 chip, 1.5× stronger ANC, Adaptive Audio, Camera Remote, and Live Translation. Five stunning new colors.",
    specs: ["H2 Chip", "1.5× ANC", "Camera Remote", "5 Colors"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    accent: "#8eb0d8",
    isNew: false,
    coming: false,
  },
  {
    id: 10,
    name: "iPhone 18 Pro",
    cat: "Coming Soon",
    tag: "iPhone · Sep 2026",
    month: "Sep 2026",
    price: "TBA",
    priceNote: "Expected September",
    desc: "Major redesign with A19 Pro chip, titanium body, advanced periscope camera system, and bold new color options.",
    specs: ["A19 Pro", "Titanium", "Periscope Cam", "New Colors"],
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80",
    accent: "#c8a97e",
    isNew: false,
    coming: true,
  },
  {
    id: 11,
    name: "iPhone Fold",
    cat: "Coming Soon",
    tag: "iPhone · Late 2026",
    month: "Late 2026",
    price: "TBA",
    priceNote: "Expected late 2026",
    desc: "Apple's first foldable iPhone — clamshell titanium hinge, crease-free inner display, and ultra-thin profile.",
    specs: ["Foldable", "Titanium Hinge", "Crease-Free", "Ultra-Thin"],
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    accent: "#d4b896",
    isNew: true,
    coming: true,
  },
  {
    id: 12,
    name: "Apple Watch Series 12",
    cat: "Coming Soon",
    tag: "Watch · Sep 2026",
    month: "Sep 2026",
    price: "TBA",
    priceNote: "Expected September",
    desc: "Ultra-thin casing redesign, advanced blood-pressure monitoring, and next-generation health sensors.",
    specs: ["Ultra-Thin", "Health Sensors", "Blood Pressure", "S12 Chip"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    accent: "#8eb0d8",
    isNew: false,
    coming: true,
  },
  {
    id: 13,
    name: "iPad mini 7",
    cat: "Coming Soon",
    tag: "iPad · Late 2026",
    month: "Late 2026",
    price: "TBA",
    priceNote: "Expected late 2026",
    desc: "OLED display, A19 Pro chip, and water-resistant redesign — the biggest iPad mini upgrade in years.",
    specs: ["OLED", "A19 Pro", "Water-Resistant", "8.3-inch"],
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80",
    accent: "#c0b090",
    isNew: false,
    coming: true,
  },
  {
    id: 14,
    name: "Mac Studio M5",
    cat: "Coming Soon",
    tag: "Mac · Mid 2026",
    month: "Mid 2026",
    price: "TBA",
    priceNote: "Expected mid 2026",
    desc: "M5 Max and M5 Ultra replace the Mac Pro as Apple's most powerful desktop — insane pro-level performance.",
    specs: ["M5 Ultra", "192GB RAM", "Thunderbolt 5", "Compact"],
    image: "https://images.unsplash.com/photo-1593640408182-31c228f6a2a5?w=800&q=80",
    accent: "#a0b4d4",
    isNew: false,
    coming: true,
  },
];

const FILTERS = ["All", "iPhone", "Mac", "iPad", "Audio", "Display", "Accessories", "Coming Soon"];

const STATS = [
  { value: "12+", label: "Products launched in 2026" },
  { value: "M5", label: "Latest Apple Silicon" },
  { value: "$599", label: "Starting price (MacBook Neo)" },
  { value: "Sep", label: "Next major launch event" },
];

const TIMELINE = [
  { month: "Jan 2026", items: ["AirTag 2"] },
  { month: "Mar 2026", items: ["iPhone 17e", "MacBook Neo", "MacBook Air M5", "MacBook Pro M5", "iPad Air M4", "Studio Display", "Studio Display XDR", "AirPods Max 2"] },
  { month: "Mid 2026", items: ["Mac Studio M5"] },
  { month: "Sep 2026", items: ["iPhone 18 Pro", "iPhone 18 Pro Max", "Apple Watch Series 12"] },
  { month: "Late 2026", items: ["iPhone Fold", "iPad mini 7", "AirPods Pro 3"] },
];

/* ─── Cart Button ───────────────────────────────────────────── */
function CartBtn({ coming, name }) {
  const [added, setAdded] = useState(false);
  if (coming) return <button className="cbtn cbtn--soon" disabled>Notify Me</button>;
  return (
    <button
      className={`cbtn${added ? " cbtn--added" : ""}`}
      aria-label={`Add ${name} to cart`}
      onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1800); }}
    >
      {added ? "✓ Added" : "Add to Cart"}
    </button>
  );
}

/* ─── Product Card ──────────────────────────────────────────── */
function ProductCard({ product, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.07 }
    );
    if (cardRef.current) io.observe(cardRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`pcard${visible ? " pcard--vis" : ""}`}
      style={{ "--delay": `${index * 55}ms`, "--accent": product.accent }}
    >
      {product.isNew && <span className="pcard__new">New</span>}
      <span className="pcard__month">{product.month}</span>

      {/* Image */}
      <div className="pcard__img-wrap">
        {!imgLoaded && <div className="pcard__shimmer" />}
        <img
          src={product.image}
          alt={product.name}
          className={`pcard__img${imgLoaded ? " pcard__img--ready" : ""}`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
        />
        <div className="pcard__img-overlay" />
        <div className="pcard__img-glow" />
      </div>

      {/* Body */}
      <div className="pcard__body">
        <span className="pcard__tag">{product.tag}</span>
        <h3 className="pcard__name">{product.name}</h3>
        <p className="pcard__desc">{product.desc}</p>

        {/* Specs pills */}
        <ul className="pcard__specs" aria-label="Key specs">
          {product.specs.map((s) => (
            <li key={s} className="pcard__spec">{s}</li>
          ))}
        </ul>

        {/* Footer */}
        <div className="pcard__footer">
          <div className="pcard__price-block">
            <span className="pcard__price">{product.price}</span>
            <span className="pcard__price-note">{product.priceNote}</span>
          </div>
          <CartBtn coming={product.coming} name={product.name} />
        </div>
      </div>
    </article>
  );
}

/* ─── Stats Bar ─────────────────────────────────────────────── */
function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Apple 2026 stats">
      {STATS.map((s) => (
        <div key={s.label} className="stats-bar__item">
          <span className="stats-bar__value">{s.value}</span>
          <span className="stats-bar__label">{s.label}</span>
        </div>
      ))}
    </section>
  );
}

/* ─── Timeline Section ──────────────────────────────────────── */
function TimelineSection() {
  return (
    <section className="timeline-section" aria-label="2026 launch timeline">
      <div className="section-header">
        <span className="section-badge">Launch Calendar</span>
        <h2 className="section-title">2026 <span className="section-title--accent">Timeline</span></h2>
        <p className="section-sub">Every Apple launch — past and upcoming — across 2026</p>
      </div>
      <div className="timeline">
        {TIMELINE.map((t, i) => (
          <div key={t.month} className="timeline__item" style={{ "--ti": i }}>
            <div className="timeline__dot" />
            <div className="timeline__card">
              <span className="timeline__month">{t.month}</span>
              <ul className="timeline__products">
                {t.items.map((item) => (
                  <li key={item} className="timeline__product">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="timeline__line" />
      </div>
    </section>
  );
}

/* ─── Hero Banner ───────────────────────────────────────────── */
function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-banner__bg" />
      <div className="hero-banner__content">
        <span className="hero-banner__eyebrow">March 2026 · Available Now</span>
        <h2 className="hero-banner__title">MacBook Neo<br /><span>starts at $599</span></h2>
        <p className="hero-banner__sub">Apple's most affordable Mac. A18 Pro chip. iPhone-class AI.</p>
        <a href="#products" className="hero-banner__cta">Shop Now →</a>
      </div>
      <div className="hero-banner__img-wrap">
        <img
          src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&q=85"
          alt="MacBook Neo"
          className="hero-banner__img"
        />
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */
export default function AppleStore2026() {
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState(0);

  const filtered = PRODUCTS.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Coming Soon") return p.cat === "Coming Soon";
    return p.cat === filter;
  });

  return (
    <div className="store-root">
      {/* Background */}
      <div className="bg-noise" />
      <div className="bg-orb bg-orb--1" />
      <div className="bg-orb bg-orb--2" />

      <div className="store-wrap">

        {/* ── Page Header ── */}
        <header className="store-header">
          <div className="store-header__badge">
            <span className="badge-pulse" />
            Curated devices. Uncommon quality.
          </div>
          <h1 className="store-header__title">
            <span>Everything</span>
            <span className="store-header__title--accent">Apple 2026</span>
          </h1>
          <p className="store-header__sub">
            Every product Apple has launched — and everything coming — in 2026
          </p>
        </header>

        {/* ── Stats ── */}
        <StatsBar />

        {/* ── Hero Banner ── */}
        <HeroBanner />

        {/* ── Products Grid ── */}
        <section className="products-section" id="products" aria-label="Apple 2026 product grid">
          <div className="section-header">
            <span className="section-badge">Full Lineup</span>
            <h2 className="section-title">Latest <span className="section-title--accent">Releases</span></h2>
            <p className="section-sub">Tap a category to filter</p>
          </div>

          {/* Filters */}
          <div className="filters" role="tablist" aria-label="Product categories">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`filter-btn${filter === f ? " filter-btn--active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="products-grid">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <TimelineSection />

        {/* ── Footer perks ── */}
        <footer className="store-footer">
          <div className="store-footer__perks">
            {[
              ["🚚", "Free shipping on all orders"],
              ["🛡️", "1-year Apple warranty included"],
              ["↩️", "14-day hassle-free returns"],
              ["💳", "Apple Card monthly installments"],
              ["🎓", "Education pricing available"],
            ].map(([icon, text]) => (
              <div key={text} className="perk">
                <span className="perk__icon">{icon}</span>
                <span className="perk__text">{text}</span>
              </div>
            ))}
          </div>
          <p className="store-footer__copy">
            © 2026 Apple Inc. All rights reserved. Prices and availability may vary.
          </p>
        </footer>

      </div>
    </div>
  );
}