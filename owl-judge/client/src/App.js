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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        

        {/* Add more routes if needed */}
    </Routes>
</Router>    
  );
}

export default App;
