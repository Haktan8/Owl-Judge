import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';


function App() {
  return (
    <Router>
    <Routes>
        {/* Root route */} 
        <Route path="/" element={<SignIn />} />     
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        

        {/* Add more routes if needed */}
    </Routes>
</Router>    
  );
}

export default App;
