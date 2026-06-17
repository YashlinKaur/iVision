import React, { useState } from "react";
import "./CheckoutPage.css";
import { useCart } from "../Cart/CartContext";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [processing, setProcessing] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = () => {
    if (cartItems.length === 0) {
      alert("🛒 Your cart is empty. Add products before checkout.");
      navigate("/Store");
      return;
    }
    if (!fullName || !email || !phone || !cardNumber || !expiry || !cvv) {
      alert("Fill all details first");
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      clearCart();
      navigate("/payment-success");
    }, 2000);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-left">
        <h1>Secure Payment</h1>

        <p className="checkout-subtitle">
          Complete your purchase using a debit or credit card.
        </p>

        <input
          type="text"
          placeholder="Full Name (as shown on card)"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address (e.g. karan@example.com)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number (10 digits)"
          maxLength="10"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Card Number (1234 5678 9012 3456)"
          maxLength="16"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <div className="row">
          <input
            type="text"
            placeholder="Expiry Date (MM/YY) • Example: 12/28"
            maxLength="5"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />

          <input
            type="password"
            placeholder="CVV (3 digits)"
            maxLength="3"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <button
          className="pay-btn"
          onClick={handlePayment}
          disabled={processing || cartItems.length === 0}
        >
          {processing ? (
            <>
              <span className="spinner"></span>
              Processing Payment...
            </>
          ) : (
            `Complete Purchase • ₹${total.toLocaleString()}`
          )}
        </button>

        <p className="secure-text">
          🔒 Your payment information is encrypted and secure.
        </p>
      </div>

      <div className="checkout-right">
        <h2>Order Summary</h2>

        {cartItems.length === 0 && (
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#888",
            }}
          >
            🛒 Your cart is empty
          </p>
        )}

        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div className="summary-item" key={item.id}>
              <p>
                {item.name}
                {item.qty > 1 && ` × ${item.qty}`}
              </p>

              <span>₹{(item.price * item.qty).toLocaleString()}</span>
            </div>
          ))}
        <hr />

        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{total.toLocaleString()}</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="summary-row">
          <span>Taxes</span>
          <span>Included</span>
        </div>

        <hr />

        <div className="summary-total">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
