
import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
   const [password, setPassword] = useState('');
   const {token} = useParams()

     const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:3000/auth/reset-password/"+token, {
      password,
    }).then(response => {
      if(response.data.status) {
        
        navigate('/login_page')
        
      }
      console.log(response.data)
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <>
     <div className="register-container">
      <div className="register-form">
        <h2 className="register-title">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          
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
              // value={data.password}
              onChange={(e) => setPassword(e.target.value )}
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

export default ResetPassword