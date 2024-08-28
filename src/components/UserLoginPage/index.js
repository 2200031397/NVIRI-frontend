import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import './index.css';

function UserLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        // Send POST request to loginUser API
        const response = await axios.post('http://localhost:3000/api/login', { email, password });

        if (response.status === 200) {
          // Redirect to LandPage on success
          navigate('/'); // Adjust the path to your actual LandPage route
        }
      } catch (error) {
        if (error.response) {
          // Handle specific error responses
          setErrors({ api: error.response.data.error || 'An error occurred' });
        } else {
          // Handle general errors
          setErrors({ api: 'An error occurred' });
        }
      }
    }
  };

  return (
    <div className="login-page">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {errors.api && <p className="error">{errors.api}</p>} {/* Display API error */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLoginPage;
