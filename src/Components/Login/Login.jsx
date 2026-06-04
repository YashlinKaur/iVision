import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">

        {/* LEFT */}
        <div className="left-content">
          <div className="tag">✨ iVision Inspired Experience</div>

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

          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <div className="options">
            <label>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <span className="forgot">Forgot Password?</span>
          </div>

          <button>Sign In</button>

          <p className="register">
            Don't have an account? <span>Register</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;