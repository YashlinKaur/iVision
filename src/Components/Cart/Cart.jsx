import React from "react";
import "./Cart.css";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, removeItem, increaseQty, decreaseQty } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-wrap">
      <div>
        <h1 className="cart-heading">Your Cart</h1>
        <p className="cart-sub">{cartItems.length} items</p>

        {cartItems.length === 0 && (
          <p style={{ color: "#999", marginTop: "20px" }}>
            Cart is empty. Add some products!
          </p>
        )}

        {cartItems.map((item) => (
          <div className="item-card" key={item.id}>
            {/* Column 1 - Image */}
            <div className="item-img">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                "🎧"
              )}
            </div>

            {/* Column 2 - Details */}
            <div className="item-info">
              <p className="item-brand">{item.brand}</p>
              <h3 className="item-name">{item.name}</h3>
              <div className="item-meta">
                {item.tags?.map((tag, index) => (
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
                <button className="del-btn" onClick={() => removeItem(item.id)}>
                  Remove <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            {/* Column 3 - Price */}
            <div className="item-price-col">
              <p className="price-orig">
                ₹{item.originalPrice?.toLocaleString("en-IN")}
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
        <input type="text" placeholder="Coupon Code" className="coupon-input" />

        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
};

export default Cart;
