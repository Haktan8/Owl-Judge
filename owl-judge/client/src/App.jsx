import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';


import AdminDashboard from './pages/Admin';
import CreateEvent from './pages/CreateEvent';
import AddJudges from './pages/AddJudges';
import AddProjects from './pages/AddProjects';


import JudgeDashboard from './pages/Judge';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Admin Dashboard as a layout route for nested admin paths */}
        <Route path="/admin" element={<AdminDashboard/>}>
          <Route index element={<div>Welcome to Admin Dashboard</div>} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="add-judges" element={<AddJudges />} />
          <Route path="add-projects" element={<AddProjects />} />
        </Route>

        {/* Judge Dashboard as a layout route for nested judge paths */}
        <Route path="/judge" element={<JudgeDashboard/>}>
          <Route index element={<div>Welcome to Judge Panel</div>} />
          {/* <Route path="create-event" element={<CreateEvent />} />
          <Route path="add-judges" element={<AddJudges />} />
          <Route path="add-projects" element={<AddProjects />} /> */}
        </Route>
      </Routes>
    </Router>    
  );
}

export default App;
