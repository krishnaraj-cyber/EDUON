import React, { useState } from "react";
import "../../../../src/shared/component/Login/Login.css";
import { emailValidator , passwordValidator } from "../../../components/HomePage/regexValidator";

import {useNavigate} from "react-router-dom"


export default Login;


function Login() {

    const navigate = useNavigate()


const [input, setInput] = React.useState({email:'',password:''})

const[errorMessage, seterrorMessage] = React.useState('')

const[sucessMessage, setsucessMessage] = React.useState('')

const handleChange = (e) =>{
    setInput({...input,[e.target.name]: e.target.value})
}



React.useEffect(()=>{
    if(localStorage.getItem('auth')) navigate('/allcourse_categories')
},[])

const formSubmitter = (e) => {
    e.preventDefault()

    setsucessMessage('')
    seterrorMessage('')

    if(!emailValidator(input.email)) return seterrorMessage('Please enter valid email ID')
   
    if(!passwordValidator(input.password)) return seterrorMessage('Password should have atleast 8-character with uppercase,lowercase,number and special character')

    // setsucessMessage('Sucessfully validated !')
    if(input.email !== 'user@gmail.com' || input.password !== 'User@123') return seterrorMessage('invalid email or password')

        navigate('/allcourse_categories')
        localStorage.setItem('auth' , true)
   
}


  return (
    <>
  
    <div className="login-container">
        <div className="login-form">
            <h2 className="login-title">Login</h2>
            <form action="/login" method="post" onSubmit={formSubmitter}>
{errorMessage.length > 0 && <div style={{marginBottom:"10px", color: "red"}}>{errorMessage}</div> }         
{sucessMessage.length > 0 && <div style={{marginBottom:"10px", color: "green"}}>{sucessMessage}</div> }         

                <div className="input-group">
                    <label for="username" className="input-label">Username</label>
                    <input type="text" id="username" name="email" className="input-field" required   onChange={handleChange}/>
                </div>
                <div className="input-group">
                    <label for="password" className="input-label">Password</label>
                    <input type="password" id="password" name="password" className="input-field" required   onChange={handleChange} />
                </div>
                <button type="submit" className="login-button">Login</button>
                <p className="register-link">Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    </div>





    </>
  )
}
