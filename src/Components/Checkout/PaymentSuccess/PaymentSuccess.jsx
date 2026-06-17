import React from "react";
import { Link } from "react-router-dom";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  const orderId =
    "IV-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <h1>Payment Successful</h1>

        <p className="success-subtitle">
          Thank you for your purchase. Your order has
          been placed successfully.
        </p>

        <div className="order-details">
          <div className="detail-row">
            <span>Order ID</span>
            <strong>{orderId}</strong>
          </div>

          <div className="detail-row">
            <span>Payment Status</span>
            <strong className="paid">
              Paid Successfully
            </strong>
          </div>

          <div className="detail-row">
            <span>Payment Method</span>
            <strong>Visa •••• 3456</strong>
          </div>

          <div className="detail-row">
            <span>Estimated Delivery</span>
            <strong>3-5 Business Days</strong>
          </div>
        </div>

        <Link to="/store">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;