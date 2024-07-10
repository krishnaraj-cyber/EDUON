import React from 'react'
import { useState } from 'react'

const Register = () => {




    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
    })

    const registerUser = (e) => {
        e.preventDefault()
    }


  return (
    <>
    
    <div class="register-container">
    <div class="register-form">
      <h2 class="register-title">Register</h2>
      <form action="/register" method="post" onSubmit={registerUser}>
        <div class="input-group">
          <label for="username" class="input-label">Username</label>
          <input type="text" id="username" name="username" class="input-field" required    value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
        </div>
        <div class="input-group">
          <label for="email" class="input-label">Email</label>
          <input type="email" id="email" name="email" class="input-field" required    value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        </div>
        <div class="input-group">
          <label for="password" class="input-label">Password</label>
          <input type="password" id="password" name="password" class="input-field" required    value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        </div>
        <button type="submit" class="register-button">Register</button>
        <p class="login-link">Already have an account? <a href="/login_page">Login</a></p>
      </form>
    </div>
  </div>
    
    </>
  )
}

export default Register