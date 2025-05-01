import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="App-navbar">
      <div className="App-navbar-left">
        {/* Use the logo from the public folder */}
        <img src="/logo.png" alt="Logo" className="App-navbar-logo" />
        <span className="App-navbar-title">SolidBase Construction</span> {/* Changed to plain text */}
      </div>
      <div className="App-navbar-center">
        <Link to="/" className="App-navbar-link">Home</Link>
        <Link to="/order" className="App-navbar-link">Order Materials</Link>
        <Link to="/account" className="App-navbar-link">Account</Link>
        <Link to="/admin" className="App-navbar-link">Admin</Link>
        <Link to="/login" className="App-navbar-link">Login</Link>
      </div>
      <div className="App-navbar-right">
        {/* Cart icon link */}
        <Link to="/cart">
          <img
            src="/cart.png"
            alt="Cart"
            className="App-navbar-cart-icon"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;