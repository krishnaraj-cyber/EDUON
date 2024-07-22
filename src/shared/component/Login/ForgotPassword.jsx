// import React, { useState } from 'react';
// import axios from 'axios';
// // import './ForgetPassword.css';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/auth/forgot-password', { email });
//       setMessage(response.data.message);
//       console.log(response.data.message)
//     } catch (error) {
//       console.error('Error sending reset link:', error);
//       setMessage('Error sending reset link.');
//       console.log( error)
//     }
//   };

//   return (
//     <div className="forget-password-container">
//       <div className="forget-password-form">
//         <h2 className="forget-password-title">Forget Password</h2>
//         <form onSubmit={handleSubmit}>
//           {message && <div className="message">{message}</div>}
//           <div className="input-group">
//             <label htmlFor="email" className="input-label">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="input-field"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="submit-button">Send Reset Link</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {


  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:3000/auth/forgot-password", {
      email,
    }).then(response => {
      if(response.data.status) {
        alert("Check your email for reset password link")
        navigate('/login_page')
       }
       
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <>
     <div className="register-container">
      <div className="register-form">
        <h2 className="register-title">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              required
              // value={data.email}
              onChange={(e) => setEmail(e.target.value )}
            />
          </div>
          
          <button type="submit" className="register-button">
            Send
          </button>
          {/* {error && <p className="error-message">{error}</p>} */}
          <p className="login-link">
            Already have an account? <Link to="/login_page">Login</Link>
          </p>
        </form>
       
      </div>
    </div></>
  )
}

export default ForgotPassword