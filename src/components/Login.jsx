import React, { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import "../components/Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import setIsLoggedIn from "../App.jsx"
import picture from "../assets/Signup.webp"


function Login({setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successful", userCredential);
      setMessage('Login successful!');
      navigate("/"); // Redirect to hero page
      setIsLoggedIn(true)
    } catch (error) {
      console.error("Error during login:", error);
      setMessage(error.message || "Something went wrong. Please try again.");
    }
}

  return (
    <div className="login-container">
      <div className="lp">
        <img
          src={picture}
          alt="Person with laptop"
          className="login-image w-96"
        />
      </div>
      <div className="login-right-pane">
        <h2 className="login-title font-bold">Welcome Back</h2>
        <p className="login-subtitle">Login to continue your progress</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <p className="flex text-[10px] text-blue-800">Email / Username</p>
          <input 
            type="text" 
            placeholder="Email / Username" 
            className="login-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <p className="flex text-[10px] text-blue-800">Password</p>
          <input 
            type="password" 
            placeholder="Password" 
            className="login-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {message && <p className="login-message">{message}</p>}
          <div className="login-remember-forgot">
            <label className="login-remember-label">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="login-forgot-link">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-signin-button">
            Login
          </button>
        </form>
        <p className="login-or-text">OR LOGIN WITH</p>
        <div className="login-social-icons">
          <FaInstagram className="size-7" />
          <FaFacebook className="size-7" />
          <FaGoogle className="size-7" />
          <FaGithub className="size-7" />
        </div>
        <p className="login-register-text">
          Don’t have an account? <Link to="/signup">Register Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
