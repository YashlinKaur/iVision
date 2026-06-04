// StoreSection.jsx
import React from 'react';
import './Storemain.css';

const StoreSection = () => {
  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 1099,
      description: 'Titanium. A17 Pro chip. 48MP main camera.',
      isNew: true,
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      price: 1299,
      description: '8-core GPU. 5x optical zoom. Battery all day.',
      isNew: true,
    },
    {
      id: 3,
      name: 'MacBook Pro 16" M3 Max',
      price: 3499,
      description: '128GB unified memory. 22-hour battery.',
      isNew: false,
    },
    {
      id: 4,
      name: 'iPad Pro 12.9"',
      price: 1299,
      description: 'M2 chip. Liquid Retina XDR. Apple Pencil hover.',
      isNew: false,
    },
    {
      id: 5,
      name: 'AirPods Pro (2nd gen)',
      price: 249,
      description: 'Active Noise Cancellation. Adaptive Audio.',
      isNew: true,
    },
    {
      id: 6,
      name: 'Apple Watch Ultra 2',
      price: 799,
      description: '49mm titanium case. 100m water resistance.',
      isNew: false,
    },
    {
      id: 7,
      name: 'MacBook Air 15" M3',
      price: 1399,
      description: 'Lightweight. 18-hour battery. Silent design.',
      isNew: true,
    },
    {
      id: 8,
      name: 'iMac 24" M3',
      price: 1499,
      description: '4.5K Retina display. Six speakers. 1080p camera.',
      isNew: false,
    },
  ];

  const handleAddToCart = (productName) => {
    alert(`✨ ${productName} added to your cart — experience the premium difference.`);
  };

  return (
    <section className="store-section">
      <div className="store-container">
        {/* Header with ivisoon branding */}
        <div className="store-header">
          <div className="brand-badge">
            <span className="brand-icon">⌘</span>
            <span className="brand-name">ivisoon</span>
          </div>
          <h1 className="store-title">Premium Apple Collection</h1>
          <p className="store-subtitle">
            Engineered for excellence. Crafted in black & white.
            <span className="accent-dot">●</span> Limited availability
          </p>
          <div className="header-divider"></div>
        </div>

        {/* Product grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Image placeholder with product name (premium minimal style) */}
              <div className="product-image-wrapper">
                <div className="product-image-placeholder">
                  <div className="image-overlay"></div>
                  <div className="product-icon">⌘</div>
                  <div className="product-name-on-image">{product.name}</div>
                </div>
                {product.isNew && <span className="new-badge">New</span>}
              </div>

              <div className="product-details">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="price-row">
                  <span className="product-price">${product.price.toLocaleString()}</span>
                  <span className="price-sub">or $49/mo</span>
                </div>
                <button 
                  className="buy-button"
                  onClick={() => handleAddToCart(product.name)}
                >
                  <span>Add to Cart</span>
                  <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium footer note */}
        <div className="store-footer">
          <div className="footer-line"></div>
          <p className="footer-text">Complimentary shipping • 2-year warranty • 30-day returns</p>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;