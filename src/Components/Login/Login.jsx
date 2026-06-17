import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setShowAlert(true);

    // Clear inputs
    setEmail("");
    setPassword("");

    // Hide toast after 3 sec
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* LEFT */}
        <div className="left-content">
          <h1>
            Welcome <br /> Back.
          </h1>

          <p>
            Sign in to continue your premium Apple-inspired experience and
            discover a world of innovation.
          </p>
        </div>

        {/* RIGHT */}
        <div className="login-box">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="options">
            <label>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <span className="forgot">Forgot Password?</span>
          </div>

          <button onClick={handleLogin}>Sign In</button>

          <p className="register">
            Don't have an account? <span>Register</span>
          </p>
        </div>

        {showAlert && (
          <div className="success-alert">
            <span>👋</span>
            <p>Welcome back! You're signed in successfully.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;