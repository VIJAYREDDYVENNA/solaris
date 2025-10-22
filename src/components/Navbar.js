import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../components_css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();

  // Check if current route is a project page
  const isProjectActive = location.pathname.startsWith('/projects/');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProjects = () => {
    setProjectsOpen(!projectsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setProjectsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div className="container">
          {/* Brand / Logo */}
          <NavLink className="navbar-brand fw-bold fs-4 solaris-logo" to="/" onClick={closeMenu}>
            <img
              src="/logo.png" 
              alt="Logo"
              className="logo-img me-2"
            />
          </NavLink>

          <button
            className={`navbar-toggler border-0 ${isOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <span className="close-icon">✕</span>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>

          {/* Desktop Nav Links */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link navlink-darkblue">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link navlink-darkblue">
                  About
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <span className={`nav-link navlink-darkblue dropdown-text ${isProjectActive ? 'active' : ''}`}>
                  Projects 
                  <svg className="dropdown-arrow ms-1 mb-1" width="15" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <ul className="dropdown-menu dropdown-hover shadow">
                  <li>
                    <NavLink className="dropdown-item dropdown-darkblue" to="/projects/project1">
                      Project 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item dropdown-darkblue" to="/projects/project2">
                      Project 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item dropdown-darkblue" to="/projects/project3">
                      Project 3
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item dropdown-darkblue" to="/projects/project4">
                      Project 4
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/contact-us" className="nav-link navlink-darkblue">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <NavLink to="/" className="mobile-nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            
            <li className="mobile-nav-item">
              <NavLink to="/about" className="mobile-nav-link" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            <li className="mobile-nav-item">
              <div className={`mobile-nav-link mobile-nav-expandable ${isProjectActive ? 'active' : ''}`} onClick={toggleProjects}>
                Projects
                <span className={`mobile-nav-icon ${projectsOpen ? 'rotate' : ''}`}>+</span>
              </div>
            </li>

            {projectsOpen && (
              <div className="mobile-subnav-container">
                <li className="mobile-nav-item">
                  <NavLink to="/projects/project1" className="mobile-nav-link mobile-nav-sublink" onClick={closeMenu}>
                    Project 1
                  </NavLink>
                </li>

                <li className="mobile-nav-item">
                  <NavLink to="/projects/project2" className="mobile-nav-link mobile-nav-sublink" onClick={closeMenu}>
                    Project 2
                  </NavLink>
                </li>

                <li className="mobile-nav-item">
                  <NavLink to="/projects/project3" className="mobile-nav-link mobile-nav-sublink" onClick={closeMenu}>
                    Project 3
                  </NavLink>
                </li>

                <li className="mobile-nav-item">
                  <NavLink to="/projects/project4" className="mobile-nav-link mobile-nav-sublink" onClick={closeMenu}>
                    Project 4
                  </NavLink>
                </li>
              </div>
            )}

            <li className="mobile-nav-item">
              <NavLink to="/contact-us" className="mobile-nav-link" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;