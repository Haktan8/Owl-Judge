import React, { useState } from 'react';
import InputField from '../components/InputField';

function SignIn() {
  // State for storing input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your logic for authentication
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="sign in container">
      <div className="sign in row">
        <div className="sign-in-column">
          <div className="sign-in-header">
            <h2>Sign In</h2>
            {/*
              <h2>{user ? user.email : 'No User'}</h2>
            */}
          </div>
          <div className="Sign in Email">
            <form onSubmit={handleSubmit}>
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
              <div className="Sign In Text">
                <button type="submit" className="Sign In Button">
                  Sign In
                </button>
              </div>
            </form>
            <div className="Forgot Password Text">
              <a href="/forgot-password">Forgot Password</a>
            </div>
            <div className="Create an Account Text">
              <a href="/signup">Create An Account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

