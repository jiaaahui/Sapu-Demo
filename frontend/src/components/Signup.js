import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../src/css/General.css";
import sideBackground from "../../src/image/LOGIN.png";

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/signup/', {
        username,
        email,
        password,
      });
      console.log('Signup successful', response.data);
      alert("Signup successfully!");
      navigate('/login');
    } catch (error) {
      console.error('Signup failed', error);
      alert("Signup failed!");
    }
  };

  return (
    <div className="login-background">
      <img alt="Side background decoration" className="login-flower-pic" src={sideBackground} />
      <form onSubmit={handleSignup} className="login-form2-container">
        <h2 className="login-title">Create Account</h2>
        <div className="login-input-container">
          <input className="login-usernameInput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="login-input-container">
          <input className="login-usernameInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="login-input-container">
          <input className="login-usernameInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="login-button-container1">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
