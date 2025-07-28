import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/student_register.css'; // 
import bg from '../images/signup.jpg';

function VerifyMail() {
  const [form, setForm] = useState({ email: '', code: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) {
      setForm((prev) => ({ ...prev, email: location.state.email }));
    }
  }, [location]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleVerify = () => {
    if (!form.email || !form.code) {
      setError('Please enter both email and code.');
      return;
    }

    alert('Email verified successfully!');
    navigate('/verify-email');
  };

  return (
    <div className="student-container">
      <div className="student-image" style={{ backgroundImage: `url(${bg})` }}></div>

      <div className="student-form">
        <h2 className="form-title">Verify Your Email</h2>

        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="input-wrapper">
          <FaLock className="input-icon" />
          <input
            type="text"
            name="code"
            placeholder="Enter Verification Code"
            value={form.code}
            onChange={handleChange}
          />
        </div>

        <p className="note">Enter the code sent to your email.</p>
        {error && <p className="error">{error}</p>}

        <button
          className={`register-btn ${form.code ? 'enabled' : ''}`}
          onClick={handleVerify}
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default VerifyMail;
