import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/student_register.css';
import bg from '../images/signup.jpg';

function StudentRegister() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    code: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [error, setError] = useState('');

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
      alert('Student registered successfully!');
    } else {
      setError('Please fill all fields and verify your email.');
    }
  };

  return (
    <div className="student-container">
      <div className="student-image" style={{ backgroundImage: `url(${bg})` }}></div>

      <div className="student-form">
        <h2 className="form-title">Student Register</h2>

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

        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <button className="send-code-btn" onClick={handleSendCode}>
          Send Verification Code
        </button>

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

        {form.confirmPassword && !doPasswordsMatch && (
          <p className="warn">Passwords do not match</p>
        )}

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

export default StudentRegister;
