// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link , useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const registerUser = async (e) => {
//     e.preventDefault();
//     try {
//        const response = await axios.post('http://localhost:8080/auth/apiregister', {
//         Username: data.name,
//         Email: data.email,
//         Password: data.password,
//       });
//       console.log(response.data); // Log the response from the server
      
//       navigate('/login_page');

//     } catch (error) {
//       console.error('Registration failed:', error);
//       // Handle error (e.g., show error message to user)
//     }
//   };

//   return (
//     <>
//       <div className="register-container">
//         <div className="register-form">
//           <h2 className="register-title">Register</h2>
//           <form action="/register" method="post" onSubmit={registerUser}>
//             <div className="input-group">
//               <label htmlFor="username" className="input-label">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 className="input-field"
//                 required
//                 value={data.name}
//                 onChange={(e) => setData({ ...data, name: e.target.value })}
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="email" className="input-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="input-field"
//                 required
//                 value={data.email}
//                 onChange={(e) => setData({ ...data, email: e.target.value })}
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="password" className="input-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="input-field"
//                 required
//                 value={data.password}
//                 onChange={(e) => setData({ ...data, password: e.target.value })}
//               />
//             </div>
//             <button type="submit" className="register-button">
//               Register
//             </button>
//             <p className="login-link">
//               Already have an account? <Link to="/login_page">Login</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;








// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [otp, setOtp] = useState('');
//   const [showOtpInput, setShowOtpInput] = useState(false);
//   const navigate = useNavigate();

//   const sendOtp = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/auth/apiregister', {
//         Username: data.name,
//         Email: data.email,
//         Password: data.password,
//       });
//       console.log(response.data); // Log the response from the server
//       setShowOtpInput(true);
//     } catch (error) {
//       console.error('Registration failed:', error);
//       // Handle error (e.g., show error message to user)
//     }
//   };

//   const verifyOtp = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/auth/verifyOtp', {
//         Email: data.email,
//         Otp: otp,
//         Username: data.name,
//         Password: data.password,
//       });
//       console.log(response.data); // Log the response from the server
//       navigate('/login_page');
//     } catch (error) {
//       console.error('OTP verification failed:', error);
//       // Handle error (e.g., show error message to user)
//     }
//   };

//   return (
//     <>
//       <div className="register-container">
//         <div className="register-form">
//           <h2 className="register-title">Register</h2>
//           <form onSubmit={showOtpInput ? verifyOtp : sendOtp}>
//             <div className="input-group">
//               <label htmlFor="username" className="input-label">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 className="input-field"
//                 required
//                 value={data.name}
//                 onChange={(e) => setData({ ...data, name: e.target.value })}
//                 disabled={showOtpInput}
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="email" className="input-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="input-field"
//                 required
//                 value={data.email}
//                 onChange={(e) => setData({ ...data, email: e.target.value })}
//                 disabled={showOtpInput}
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="password" className="input-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="input-field"
//                 required
//                 value={data.password}
//                 onChange={(e) => setData({ ...data, password: e.target.value })}
//                 disabled={showOtpInput}
//               />
//             </div>
//             {showOtpInput && (
//               <div className="input-group">
//                 <label htmlFor="otp" className="input-label">
//                   OTP
//                 </label>
//                 <input
//                   type="text"
//                   id="otp"
//                   name="otp"
//                   className="input-field"
//                   required
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />
//               </div>
//             )}
//             <button type="submit" className="register-button">
//               {showOtpInput ? 'Verify OTP' : 'Send OTP'}
//             </button>
//             <p className="login-link">
//               Already have an account? <Link to="/login_page">Login</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;





import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/apiregister', {
        Username: data.name,
        Email: data.email,
        Password: data.password,
      });
      console.log(response.data); // Log the response from the server
      setShowOtpInput(true);
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/verifyOtp', {
        Email: data.email,
        Otp: otp,
        Username: data.name,
        Password: data.password,
      });
      console.log(response.data); // Log the response from the server
      navigate('/login_page');
    } catch (error) {
      console.error('OTP verification failed:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <>
      <div className="register-container">
        <div className="register-form">
          <h2 className="register-title">Register</h2>
          <form onSubmit={registerUser}>
            <div className="input-group">
              <label htmlFor="username" className="input-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="input-field"
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
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
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input-field"
                required
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <button type="submit" className="register-button">
              Register
            </button>
            <p className="login-link">
              Already have an account? <Link to="/login_page">Login</Link>
            </p>
          </form>
          {showOtpInput && (
            <form onSubmit={verifyOtp}>
              <div className="input-group">
                <label htmlFor="otp" className="input-label">
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  className="input-field"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <button type="submit" className="register-button">
                Verify OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
