import React, { useState } from "react";
import { airpodsProducts , cableProducts, cushionProducts } from './Airpods' 

function ProductCard({ item, addedItems, onAddToCart }) {
  const isAdded = addedItems[item.id];

  return (
    <div className="card">
      {item.badge && (
        <span className={`badge ${item.badge === "Sale" ? "sale" : ""}`}>
          {item.badge}
        </span>
      )}
      <div className="image-box">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="content">
        <span className="product-type">{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <div className="bottom">
          <div>
            <h4>{item.price}</h4>
            <small>{item.sub}</small>
          </div>
          <button
            className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
            onClick={() => onAddToCart(item.id)}
          >
            {isAdded ? "✓ Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}


function ProductSection({ title, subtitle, products, addedItems, onAddToCart }) {
  return (
    <section className="accessories-section">
      <div className="section-top">
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{subtitle}</p>
        </div>
        <button className="view-btn">View All</button>
      </div>
      <div className="cards">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            addedItems={addedItems}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

//  MAIN PAGE

function AirPodsPage() {
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (id) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <ProductSection
        title="AirPods"
        subtitle="Wireless audio, perfected by Apple."
        products={airpodsProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />

      <ProductSection
        title={`Cables <span>& Adapters</span>`}
        subtitle="Keep your AirPods charged and protected."
        products={cableProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />

      <ProductSection
        title={`Ear Tips <span>& Cushions</span>`}
        subtitle="Comfort, fit, and sound. Tailored for your AirPods."
        products={cushionProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

export default AirPodsPage;