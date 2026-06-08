import React, { useState } from "react";
import { caseProducts, chargerProducts, cableProducts, magSafeProducts, screenProducts, powerBankProducts } from "./IPhone";

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

function IPhonePage() {
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (id) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <ProductSection
        title="iPhone <span>Cases</span>"
        subtitle="Protection that looks as good as your iPhone."
        products={caseProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="iPhone <span>Chargers</span>"
        subtitle="Stay powered up, always."
        products={chargerProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="iPhone <span>Cables</span>"
        subtitle="Fast, durable cables built for everyday use."
        products={cableProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="iPhone <span>MagSafe</span>"
        subtitle="Effortless wireless charging — just snap and charge."
        products={magSafeProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="Screen <span>Protectors</span>"
        subtitle="Keep your display scratch-free and crystal clear."
        products={screenProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="iPhone <span>Power Banks</span>"
        subtitle="Never run out of battery, wherever you go."
        products={powerBankProducts}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

export default IPhonePage;