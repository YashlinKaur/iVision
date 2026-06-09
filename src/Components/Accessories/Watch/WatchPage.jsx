import React, { useState } from "react";
import { watchProducts, bandProducts, chargerProducts } from "./Watch";
import { useCart } from "../../Cart/CartContext";

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
        {item.img && <img src={item.img} alt={item.name} />}
      </div>
      <div className="content">
        <span className="product-type">{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <div className="bottom">
          <div>
            <h4>{item.price}</h4>
            {item.sub && <small>{item.sub}</small>}
          </div>
          <button
            className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
            onClick={() => onAddToCart(item)}
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

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  if (typeof priceStr === "number") return priceStr;
  return Number(priceStr.replace(/[₹,]/g, "")) || 0;
}

function WatchPage() {
  const [addedItems, setAddedItems] = useState({});
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    addToCart({
      id: item.id,
      brand: item.category,
      name: item.name,
      image: item.img,
      price: parsePrice(item.price),
      originalPrice: parsePrice(item.originalPrice),
      tags: item.tags || [],
    });
  };

  return (
    <>
      <ProductSection
        title="Watch"
        subtitle="Crafted for health, fitness, and connection."
        products={watchProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="Watch <span>Bands</span>"
        subtitle="Change your look in seconds."
        products={bandProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="Charging <span>&amp; Power</span>"
        subtitle="Keep your Apple Watch powered up, always."
        products={chargerProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

export default WatchPage;