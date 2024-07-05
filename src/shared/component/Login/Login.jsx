import React from "react";
import "../../../../src/shared/component/Login/Login.css";


export default Login;


function Login() {
  return (
    <>
     




    <div class="login-container">
        <div class="login-form">
            <h2 class="login-title">Login</h2>
            <form action="/login" method="post">
                <div class="input-group">
                    <label for="username" class="input-label">Username</label>
                    <input type="text" id="username" name="username" class="input-field" required/>
                </div>
                <div class="input-group">
                    <label for="password" class="input-label">Password</label>
                    <input type="password" id="password" name="password" class="input-field" required/>
                </div>
                <button type="submit" class="login-button">Login</button>
                <p class="register-link">Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    </div>





    </>
  )
}
