import React, { useState } from "react";
import { keyboardProducts, miceProducts, hubProducts, displayProducts, audioProducts, protectionProducts,} from "./Mac";

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
            {item.sub && <small>{item.sub}</small>}
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

function MacPage() {
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (id) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <ProductSection
        title="Mac <span>Keyboards</span>"
        subtitle="Designed to work seamlessly with Mac."
        products={keyboardProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="Mice <span>&amp; Trackpads</span>"
        subtitle="Precision devices built for Mac."
        products={miceProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="Mac <span>Hubs &amp; Docks</span>"
        subtitle="Expand your Mac setup with powerful connectivity."
        products={hubProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="Mac <span>Displays</span>"
        subtitle="High-resolution monitors built for creative workflows."
        products={displayProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="Mac <span>Audio</span>"
        subtitle="High-fidelity sound built for Apple ecosystem."
        products={audioProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="Mac <span>Protection</span>"
        subtitle="Premium cases and sleeves built for durability."
        products={protectionProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

export default MacPage;