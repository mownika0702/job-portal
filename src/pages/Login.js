import React from 'react';
import '../css/login.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-page">
      {/* Decorative Shapes */}
      <div className="decorative-shape"></div>  {/* Bottom-left rectangle */}
      <div className="ellipse-shape"></div>      {/* Top-right ellipse */}

      {/* Login Box */}
      <div className="login-box">
        <h2 className="login-title">LOGIN PAGE</h2>

        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Enter the mail id" className="input-field" />
        </div>

        <div className="input-wrapper">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Password" className="input-field" />
        </div>

        <button className="login-btn">LOGIN</button>
        <p className="forgot-link">
  <Link to="/forgot-password">Forgot Password?</Link>
</p>
      </div>
    </div>
  );
}

export default Login;
