import React, { useState } from 'react';
import axios from 'axios';
// import './ForgetPassword.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/forgot-password', { email });
      setMessage(response.data.message);
      console.log(response.data.message)
    } catch (error) {
      console.error('Error sending reset link:', error);
      setMessage('Error sending reset link.');
      console.log( error)
    }
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-form">
        <h2 className="forget-password-title">Forget Password</h2>
        <form onSubmit={handleSubmit}>
          {message && <div className="message">{message}</div>}
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
