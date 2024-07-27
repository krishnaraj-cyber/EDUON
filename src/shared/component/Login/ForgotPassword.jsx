

// import React, { useState } from 'react';
// import Axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const ForgotPassword = () => {


//   const [email, setEmail] = useState('')

//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     Axios.post("http://localhost:3000/auth/forgot-password", {
//       email,
//     }).then(response => {
//       if(response.data.status) {
//         alert("Check your email for reset password link")
//         navigate('/login_page')
//        }
       
//     }).catch(err => {
//       console.log(err)
//     })
//   };

//   return (
//     <>
//      <div className="register-container">
//       <div className="register-form">
//         <h2 className="register-title">Forgot Password</h2>
//         <form onSubmit={handleSubmit}>
          
//           <div className="input-group">
//             <label htmlFor="email" className="input-label">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="input-field"
//               required
//               // value={data.email}
//               onChange={(e) => setEmail(e.target.value )}
//             />
//           </div>
          
//           <button type="submit" className="register-button">
//             Send
//           </button>
//           {/* {error && <p className="error-message">{error}</p>} */}
//           <p className="login-link">
//             Already have an account? <Link to="/login_page">Login</Link>
//           </p>
//         </form>
       
//       </div>
//     </div></>
//   )
// }

// export default ForgotPassword




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import { API_URL } from '../utils/api';
import './Login.css'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // To manage the steps (1: Request OTP, 2: Verify OTP and set new password)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRequestOtp = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/apisendforgotpasswordOTP`, {
        Email: email,
      });
      setSuccess(response.data.message);
      setStep(2);
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError(error.response?.data?.message || 'An error occurred while sending OTP.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/apiverifyforgotpasswordOTP`, {
        Email: email,
        OTP: otp,
      });
      setSuccess(response.data.message);
      // Proceed to update the password
      await handleUpdatePassword();
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError(error.response?.data?.message || 'Invalid OTP.');
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/apiupdatepassword`, {
        Email: email,
        Password: newPassword,
      });
      setSuccess(response.data.message);
      setTimeout(() => {
        navigate('/login_page'); // Redirect to login after successful password update
      }, 2000);
    } catch (error) {
      console.error('Error updating password:', error);
      setError(error.response?.data?.message || 'An error occurred while updating password.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="register-form">
      <h2 className="register-title">Forgot Password</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      {step === 1 && (
        <div className="otp-request">
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="register-button" onClick={handleRequestOtp}>
            Send OTP
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="otp-verification">
          <input
            type="text"
            placeholder="Enter OTP"
            className="input-field"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter new password"
            className="input-field"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className="register-button" onClick={handleVerifyOtp}>
            Verify OTP and Update Password
          </button>
        </div>
      )}


<div>
   
  
    <p className="login-link">
    Don't have an account? <Link to="/register">Register</Link></p>
      
    </div>
    </div>
   
    </div>
  );
};

export default ForgotPassword;