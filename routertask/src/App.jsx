// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';


const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Courses
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/full-stack">
                  Full Stack Development
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data-science">
                  Data Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cyber-security">
                  Cyber Security
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career">
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<h2>All Courses</h2>} />
          <Route path="/full-stack" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<h2>Career Courses</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
