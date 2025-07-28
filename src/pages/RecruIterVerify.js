import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../css/recruiter.css';
import bg from '../images/signup.jpg';

function RecruiterVerify() {
  const [form, setForm] = useState({
    email: '',
    code: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('recruiter-register'));
    if (saved?.email) {
      setForm((prev) => ({ ...prev, email: saved.email }));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleVerify = () => {
    if (!form.code) {
      setError('Enter the verification code.');
      return;
    }

    // Simulated verification logic
    alert('Email verified successfully!');
    navigate('/recruiter-dashboard'); // or whatever next page
  };

  return (
    <div className="recruiter-container">
     <div className="recruiter-image" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="recruiter-form">
        <h2 className="form-title">Verify Your Email</h2>

        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
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

        <p className="note">Check your inbox for the verification code.</p>

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

export default RecruiterVerify;
