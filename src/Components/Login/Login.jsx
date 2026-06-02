import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">

      <nav className="navbar">
        <h2>iPhone</h2>
        <ul>
          <li>Store</li>
          <li>iPhone</li>
          <li>Support</li>
        </ul>
      </nav>

      <div className="login-container">

        <div className="left-content">
          <h1>Welcome Back.</h1>
          <p>
            Sign in to continue your Apple-inspired experience.
          </p>
        </div>

        <div className="login-box">
          <h2>Login</h2>

          <input type="email" placeholder="Email Address" />

          <input type="password" placeholder="Password" />

          <button>Sign In</button>

          <p>
            Don't have an account? <span>Register</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;