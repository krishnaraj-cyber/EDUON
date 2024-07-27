import  { useState, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../../../shared/component/utils/api';
import { AuthContext } from '../../../shared/component/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAdminLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/apilogin`, {
        Email: email,
        Password: password,
      });

      if (response.data.token && response.data.isAdmin) {
        console.log('Admin login successful.');
        login(response.data.token);
        navigate('/Admin/admin-dashboard');
      } else {
        console.log('Admin login failed:', response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during admin login:', error.response?.data?.message || error.message);
      alert('An error occurred during admin login');
    }
  };

  return (
    <div className="admin-login-container">
    <div className="admin-login-form">
      <h2 className="admin-login-title">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="admin-login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="admin-login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="admin-login-button" onClick={handleAdminLogin}>
        Login
      </button>
    </div>
  </div>
  );
};

export default AdminLogin;