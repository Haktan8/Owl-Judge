import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (  
    <div>
      <nav className="navbar">
        <div className='navbar-logo'>
          <h1>Owl Judge</h1>
        </div>
        <div className="navbar-links">
          <Link to="create-event">Create Event</Link>
          <Link to="add-judges">Add Judges</Link>
          <Link to="add-projects">Add Projects</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
 
export default AdminDashboard;

