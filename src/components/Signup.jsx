import React, { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import "../components/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import setIsLoggedIn from "../App.jsx"
import picture from "../assets/Signup.webp"

function Signup({setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created", userCredential);
      setMessage('Account created successfully!');
      navigate("/"); // Redirect to hero page
      setIsLoggedIn(true)
    } catch (error) {
      console.error("Error during account creation:", error);
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  };

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
        <h2 className="login-title font-bold">Welcome</h2>
        <p className="login-subtitle">Sign up to start your journey</p>
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
          {message && <p className="signup-message">{message}</p>}
          <div className="login-remember-forgot">
            <label className="login-remember-label">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="login-forgot-link">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-signin-button">
            Sign Up
          </button>
        </form>
        <p className="login-or-text">OR SIGN UP WITH</p>
        <div className="login-social-icons">
          <FaInstagram className="size-7" />
          <FaFacebook className="size-7" />
          <FaGoogle className="size-7" />
          <FaGithub className="size-7" />
        </div>
        <p className="login-register-text">
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
