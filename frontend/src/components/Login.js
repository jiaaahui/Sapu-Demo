import React, { useState } from 'react';
import axios from 'axios';
import "../../src/css/General.css";
import sideBackground from "../../src/image/LOGIN.png";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login/', { username, password });
      console.log(response.data);
      alert("Login successfully!");
    } catch (error) {
      alert("Login failed!");
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-background">
      <img
        alt="Side background decoration"
        className="login-flower-pic"
        src={sideBackground}
      />
      <div className="login-form-container">
        <h2 className="login-title">Login Now</h2>
        <div className="login-input-container">
          <input className="login-usernameInput"
            type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="login-input-container">
          <input className="login-usernameInput"
            type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="login-button-container1">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
