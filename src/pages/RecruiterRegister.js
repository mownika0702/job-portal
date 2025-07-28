import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../css/recruiter.css';
import bg from '../images/signup.jpg';

function RecruiterRegister() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const doPasswordsMatch = form.password === form.confirmPassword;

  const isFormValid =
    form.name &&
    isValidEmail(form.email) &&
    form.password &&
    form.confirmPassword &&
    doPasswordsMatch;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = () => {
    if (!doPasswordsMatch) {
      setError('Passwords do not match.');
      return;
    }

    if (isFormValid) {
      // Optionally store data in localStorage or context
      localStorage.setItem('recruiter-register', JSON.stringify(form));
      navigate('/recruiter-verify');
    } else {
      setError('Please fill all fields correctly.');
    }
  };

  return (
    <div className="recruiter-container">
      <div className="recruiter-image" style={{ backgroundImage: `url(${bg})` }}></div>

      <div className="recruiter-form">
        <h2 className="form-title">Recruiter Register</h2>

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
            placeholder="Company Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

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

        {!doPasswordsMatch && form.confirmPassword && (
          <p className="warn">Passwords do not match.</p>
        )}
        {error && <p className="error">{error}</p>}

        <button
          className={`register-btn ${isFormValid ? 'enabled' : ''}`}
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RecruiterRegister;
