// src/pages/AccountType.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaBriefcase } from 'react-icons/fa';
import '../css/account.css'; // <-- Separate CSS file

function AccountType() {
  const navigate = useNavigate();

  const handleStudentClick = () => navigate('/student-register');
  const handleRecruiterClick = () => navigate('/recruiter-register');

  return (
    <div className="account-page">
      <div className="top-shape"></div>
      <div className="bottom-shape"></div>

      <div className="account-box">
        <h2 className="account-title">Choose Account Type</h2>
        <p className="account-subtitle">Select your role to continue</p>

        <button className="account-btn" onClick={handleStudentClick}>
          <FaUserGraduate className="btn-icon" /> I’m a Student
        </button>

        <button className="account-btn" onClick={handleRecruiterClick}>
          <FaBriefcase className="btn-icon" /> I’m a Recruiter
        </button>
      </div>
    </div>
  );
}

export default AccountType;
