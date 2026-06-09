import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      brand: "FUBS",
      image: "",
      name: "Watch",
      price: 9999,
      originalPrice: 1498,
      qty: 1,
      tags: ["Size: Medium", "Love-Note"],
    },
    {
      id: 2,
      brand: "The Wallet Store",
      image: "",
      name: "Ishq-E-Jhumka Designer Earrings Set",
      price: 949,
      originalPrice: 2199,
      qty: 1,
      tags: ["Minimalist", "Traditional"],
    },
    {
      id: 3,
      brand: "Bella Vita Luxury",
      image: "",
      name: "Perfume Gift Set for Women",
      price: 540,
      originalPrice: 849,
      qty: 1,
      tags: ["Floral", "EDP"],
    },
  ]);

  const increaseQty = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-wrap">
      <div>
        <h1 className="cart-heading">Your Cart</h1>
        <p className="cart-sub">{items.length} items</p>

        {items.map((item) => (
          <div className="item-card" key={item.id}>
            <div className="item-img">{item.image}</div>

            <div>
              <p className="item-brand">{item.brand}</p>
              <h3 className="item-name">{item.name}</h3>

              <div className="item-meta">
                {item.tags.map((tag, index) => (
                  <span key={index} className="meta-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="qty-row">
                <div className="qty-ctrl">
                  <button
                    className="qty-btn"
                    onClick={() => decreaseQty(item.id)}
                  >
                    −
                  </button>

                  <span className="qty-num">{item.qty}</span>

                  <button
                    className="qty-btn"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="del-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="item-price-col">
              <p className="price-orig">
                ₹{item.originalPrice.toLocaleString("en-IN")}
              </p>

              <p className="price-sale">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-card">
        <h2 className="summary-title">Order Summary</h2>

        <div className="summary-row total">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>

        <input
          type="text"
          placeholder="Coupon Code"
          className="coupon-input"
        />

        <button className="checkout-btn">
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
};

export default Cart;