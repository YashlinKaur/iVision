import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleRegister = () => {
    if (
      !fullName ||
      !email ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setShowAlert(true);

    // Clear all fields
    setFullName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

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

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="terms">
          <input type="checkbox" />
          <span>I agree to Terms & Privacy Policy</span>
        </div>

        <button onClick={handleRegister}>
          Create Account
        </button>

        <p className="login-link">
          Already have an account?
          <span> Login</span>
        </p>
      </div>

      {showAlert && (
        <div className="success-alert">
          <span>🎉</span>
          <p>Welcome to iVision! Your account has been created.</p>
        </div>
      )}
    </div>
  );
};

export default Register;