import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const DropdownMenu = ({ title, items, link }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={link} className="nav-link">
        {title}
      </Link>

      <div className={`mega-menu ${open ? "active" : ""}`}>
        <div className="mega-container">
          <div className="mega-sidebar">
            <h2>Category</h2>
            <p>
              {title}
              <br />
              <span>Collection</span>
            </p>
          </div>

          <div className="mega-grid">
            {items.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className="mega-item"
              >
                <span>{item}</span>
                <div className="line"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>

          <nav className="desktop-nav">
            <DropdownMenu
              title="Store"
              link="/store"
              items={["MacBook", "iPhone", "Watch", "AirPods"]}
            />
            <DropdownMenu
              title="Accessories"
              items={["Mac Accessories", "iPhone Accessories", "Watch Accessories", "AirPod Accessories"]}
            />
            <Link to="/aboutus" className="nav-link">About</Link>
          </nav>
          
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Log in</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </div>

          <div className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenu(true)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
    </header>

      {/* Overlay */}
      {mobileMenu && (
        <div className="overlay" onClick={() => setMobileMenu(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenu ? "open" : ""}`}>
        <div className="mobile-header">
          <h2>Menu</h2>
          <button onClick={() => setMobileMenu(false)}>×</button>
        </div>

        <div className="mobile-links">
          <Link to="/store" onClick={() => setMobileMenu(false)}>Store</Link>
          <Link to="/accessories" onClick={() => setMobileMenu(false)}>Accessories</Link>
          <Link to="/aboutus" onClick={() => setMobileMenu(false)}>About</Link>

          <hr />

          <Link to="/login" onClick={() => setMobileMenu(false)}>Log in</Link>
          <Link to="/register" className="mobile-register" onClick={() => setMobileMenu(false)}>
            Register
          </Link>
        </div>
      </div>

      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;