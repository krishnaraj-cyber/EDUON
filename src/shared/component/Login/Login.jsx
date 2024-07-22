



import React, { useState, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/api';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/apilogin`, {
        Email: email,
        Password: password,
      });

      if (response.data.token) {
        console.log('Login successful.');
        login(response.data.token);
        navigate('/updated-course-link');
      } else {
        console.log('Login failed:', response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.response?.data?.message || error.message);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className='register-title'>Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button" onClick={handleLogin}>Login</button>
        <p className="login-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

