import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import AccountType from './pages/AccountType';
import StudentRegister from './pages/StudentRegister';
import RecruiterRegister from './pages/RecruiterRegister';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-type" element={<AccountType />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/recruiter-register" element={<RecruiterRegister />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
