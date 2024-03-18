import React, { useState } from 'react';
import InputField from '../components/InputField';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../index';
import { useNavigate } from 'react-router-dom';



import './SignIn.css'; 

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can implement your logic for authentication
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed in
      const user = userCredential.user;
      navigate('../Admin');
      console.log("User signed in: " + user.email)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + " " + errorMessage);
    });
    
    
    // Authentication logic goes here
    //console.log('Email:', email);
    //console.log('Password:', password);
  
    setEmail('');
    setPassword('');
    
  };

  return (
    <div className="signin-container">
      <div className="signin-row">
        <div className="signin-column">
          <div className="signin-header">
            <h2>Sign In</h2>
          </div>
          <form onSubmit={handleSubmit} className="signin-form">
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          <div className="signin-footer">
            <a href="/forgot-password" className="forgot-password-link">Forgot Password</a>
            <a href="/signup" className="create-account-link">Create An Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
