// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import '../App.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="login-container forgot-bg">
      {/* Blurred Background Shapes */}
      <div className="blur-shape-bottom-left"></div>
      <div className="ellipse-shape-top-right"></div>

      {/* Card */}
      <div className="box forgot-box">
        <h2>Forgot Password</h2>
        <p style={{ fontSize: '14px', marginBottom: '20px' }}>
          Enter your registered email to receive a reset link.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>Send Link</button>
      </div>
    </div>
  );
}

export default ForgotPassword;
