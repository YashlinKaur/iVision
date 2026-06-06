// StoreSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Storemain.css';

const products = [
  {
    id: 1,
    name: 'iPhone 17 Pro Max',
    price: 1099,
    tag: 'Titanium · A17 Pro · 48MP',
    description: 'The most powerful iPhone ever, forged in aerospace-grade titanium with a pro camera system.',
    isNew: true,
    accent: '#c8a97e',
    image: 'https://i.pinimg.com/1200x/51/90/98/519098cec8573e67fa9a75ccc9a968d6.jpg',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    price: 1299,
    tag: '5× Zoom · A17 Pro · Desert Titanium.',
    description: 'The ultimate iPhone. 5× telephoto zoom and the largest battery in iPhone history.',
    isNew: true,
    accent: '#d4b896',
    image: 'https://i.pinimg.com/736x/97/56/d5/9756d5dbe675deea1ce4b6564f4ccecb.jpg',
  },
  {
    id: 3,
    name: 'MacBook Pro 16"',
    price: 3499,
    tag: 'M3 Max · 128GB · 22hr',
    description: 'Supercharged by M3 Max with 128GB unified memory for workflows that demand the absolute best.',
    isNew: false,
    accent: '#a0a0a5',
    image: 'https://i.pinimg.com/736x/28/d6/34/28d634ad7e73f3ac2ccdbc53902b68cd.jpg',
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    price: 1299,
    tag: 'M2 Chip · XDR Display',
    description: 'The ultimate iPad with a Liquid Retina XDR display and M2 chip for pro-level performance.',
    isNew: false,
    accent: '#86868b',
    image: 'https://i.pinimg.com/736x/de/f2/06/def20668c55dc56cd98caa3bc1022f67.jpg',
  },
  {
    id: 5,
    name: 'AirPods Pro 2',
    price: 249,
    tag: 'ANC · Adaptive Audio',
    description: 'Personalized Spatial Audio with next-level Active Noise Cancellation and Adaptive Transparency.',
    isNew: true,
    accent: '#f5f5f7',
    image: 'https://i.pinimg.com/1200x/f6/66/21/f666218c167aa5b7629b33032f869cd9.jpg',
  },
  {
    id: 6,
    name: 'Apple Watch Ultra 2',
    price: 799,
    tag: '49mm · 100m Water Resist.',
    description: 'The most rugged and capable Apple Watch, engineered for the most extreme conditions.',
    isNew: false,
    accent: '#e8b84b',
    image: 'https://i.pinimg.com/1200x/36/d1/f7/36d1f7838eeb16e7d4c940adf5cf0838.jpg',
  },
  {
    id: 7,
    name: 'MacBook Air 15"',
    price: 1399,
    tag: 'M3 · 18hr · Featherlight',
    description: 'The world\'s best consumer laptop now with a larger 15" display and the power of M3.',
    isNew: true,
    accent: '#c4b89a',
    image: 'https://i.pinimg.com/1200x/48/b9/b5/48b9b57bf2155a29a41353f4f1ad224e.jpg',
  },
  {
    id: 8,
    name: 'iMac 24" M3',
    price: 1499,
    tag: '4.5K Retina · 6 Speakers',
    description: 'Strikingly thin with a gorgeous 4.5K Retina display and M3 chip in seven vivid colors.',
    isNew: false,
    accent: '#5e8bca',
    image: 'https://i.pinimg.com/1200x/60/fb/03/60fb0302a6714fb98db40d303ed365e9.jpg',
  },
];

function ProductCard({ product, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imgLoaded, setImgLoaded] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      ref={cardRef}
      className={`product-card ${visible ? 'card-visible' : ''}`}
      style={{
        '--delay': `${index * 75}ms`,
        '--accent': product.accent,
        transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: `transform 0.45s cubic-bezier(0.2,0,0,1), border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {product.isNew && <span className="new-badge">New</span>}

      <div className="card-image-zone">
        {!imgLoaded && <div className="img-shimmer" />}
        <img
          src={product.image}
          alt={product.name}
          className={`product-img ${imgLoaded ? 'img-ready' : ''}`}
          onLoad={() => setImgLoaded(true)}
          onError={(e) => { e.target.style.display = 'none'; }}
          loading="lazy"
        />
        <div className="image-glow" style={{ '--glow-color': product.accent }} />
      </div>

      <div className="card-body">
        <p className="product-tag">{product.tag}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        <div className="card-footer">
          <div className="price-block">
            <span className="price-main">${product.price.toLocaleString()}</span>
            <span className="price-note">or $49/mo.</span>
          </div>
          <button
            className={`cart-btn ${added ? 'cart-btn--added' : ''}`}
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="btn-label">Added</span>
              </>
            ) : (
              <>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="btn-label">Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StoreSection() {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.15 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="store-root">
      <div className="noise-overlay" />
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />

      <div className="store-wrap">

        {/* ── Header ── */}
        <header ref={headerRef} className={`store-header ${headerVisible ? 'header-in' : ''}`}>
          <div className="pill-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            ivision store
          </div>
          <h1 className="store-title">
            <span className="title-line">Premium</span>
            <span className="title-line title-accent">Apple Collection</span>
          </h1>
          <p className="store-subtitle">Curated devices. Uncompromising quality. Yours.</p>
        </header>

        {/* ── Grid ── */}
        <div className="products-grid">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* ── Footer ── */}
        <footer className="store-footer">
          <div className="footer-perks">
            {['© 2026 iVisionStore. · Demo project only.', 'Privacy Policy', '· Terms of Use', 'Shipping Policy' , '·Sitemap'].map((perk) => (
              <div key={perk} className="perk-item">
                <span className="perk-dot" />
                {perk}
              </div>
            ))}
          </div>
        </footer>

      </div>
    </section>
  );
}