import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Register.css";

const Register = () => {
  return (
      <div className="register-page">
        {/* Background Circles */}
        <div className="circle circle-top"></div>
        <div className="circle circle-bottom"></div>

        {/* Left Section */}
        <div className="left-section">
          

          <h1 className="register-hero-title">
            Create <br />
            Account.
          </h1>

          <p className="register-hero-desc">
            Join iVision today and discover a premium Apple-inspired
            experience designed for innovation and simplicity.
          </p>
        </div>

        {/* Right Section */}
        <div className="register-card">
          <h2>Register</h2>

          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="Username" />

          <input type="password" placeholder="Password" />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <div className="terms">
            <input type="checkbox" />
            <span>I agree to Terms & Privacy Policy</span>
          </div>

          <button>Create Account</button>

          <p className="login-link">
            Already have an account?
            <span> Login</span>
          </p>
        </div>
      </div>
  );
};

export default Register;