import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Welcome() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to Job Portal</h1>
        <p style={styles.subtitle}>Find the right job that suits your skills</p>
        <div style={styles.actions}>
          <Link to="/login" style={styles.loginBtn}>Log In</Link>
          <span style={{ margin: '0 12px', color: '#999' }}>or</span>
          <Link to="/account-type" style={styles.signupBtn}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    //background: 'linear-gradient(to bottom right, #1c1c2d, #3f51b5)',
    background: 'linear-gradient(90deg, rgba(163, 99, 179, 1) 0%, rgba(120, 152, 176, 1) 44%, rgba(183, 171, 240, 1) 100%)',
 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Segoe UI", sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    padding: '50px 40px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    maxWidth: '420px',
    width: '100%',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '30px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  loginBtn: {
    backgroundColor: '#3f51b5',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(63, 81, 181, 0.3)',
  },
  signupBtn: {
    backgroundColor: '#2196f3',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(33, 150, 243, 0.3)',
  }
};

export default Welcome;
