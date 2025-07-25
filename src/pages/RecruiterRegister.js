import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/recruiter.css';
import bg from '../images/signup.jpg';

function RecruiterRegister() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    code: '',
  });

  const [codeSent, setCodeSent] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const doPasswordsMatch = form.password === form.confirmPassword;

  const isFormValid =
    form.name &&
    isValidEmail(form.email) &&
    form.password &&
    form.confirmPassword &&
    form.code &&
    doPasswordsMatch;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSendCode = () => {
    if (!isValidEmail(form.email)) {
      setError('Please enter a valid email address to send the code.');
      return;
    }

    setCodeSent(true);
    alert('Verification code sent to your email!');
  };

  const handleSubmit = () => {
    if (!form.code) {
      setError('Enter the verification code before registering.');
      return;
    }

    if (!doPasswordsMatch) {
      setError('Passwords do not match.');
      return;
    }

    if (isFormValid) {
      alert('Recruiter registered successfully!');
    } else {
      setError('Please fill all fields and verify your email.');
    }
  };

  return (
    <div className="recruiter-container">
      <div className="recruiter-image" style={{ backgroundImage: `url(${bg})` }}></div>

      <div className="recruiter-form">
        <h2 className="form-title">Recruiter Register</h2>

        {/* Name */}
        <div className="input-wrapper">
          <FaUser className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Send Code Button */}
        <button className="send-code-btn" onClick={handleSendCode}>
          Send Verification Code
        </button>

        {/* Password */}
        <div className="input-wrapper">
          <FaLock className="input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <span className="toggle-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="input-wrapper">
          <FaLock className="input-icon" />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <span className="toggle-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {/* Verification Code */}
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
        <p className="note warn">You can register only after email verification.</p>
        {!doPasswordsMatch && form.confirmPassword && (
          <p className="warn">Passwords do not match.</p>
        )}
        {error && <p className="error">{error}</p>}

        <button
          className={`register-btn ${isFormValid ? 'enabled' : ''}`}
          onClick={handleSubmit}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default RecruiterRegister;
