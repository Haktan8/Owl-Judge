import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import AdminDashboard from './pages/AdminDashboard';
import CreateEvent from './pages/CreateEvent';
import AddJudges from './pages/AddJudges'
import AddProjects from './pages/AddProjects';
function App() {
  return (
    <Router>
      <Routes>
        {/* Root route */} 
        <Route path="/" element={<SignIn />} />     
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        /* Admin routes */
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path='create-event' element={<CreateEvent />} />
          <Route path='add-judges' element={<AddJudges />} />
          <Route path='add-projects' element={<AddProjects />} />
        </Route>
        /* Add more routes if needed */
      </Routes>
    </Router>    
  );
}

export default App;
