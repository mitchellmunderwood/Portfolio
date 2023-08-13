import React from 'react';
import './index.css';
import Button from '@mui/material//Button';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div id="thing">
          <div className="nav-left">
            <Button onClick={props.toggle('left', true)} id="toggler-btn">
              <span className="navbar-toggler-icon"></span>
            </Button>
          </div>
          <div id="nav-center" className="inner d-flex justify-content-center align-items-center">
            <nav id="toggler-nav" className="nav nav-masthead justify-content-center">
              <NavLink
                to="/Portfolio"
                id="link-project"
                className={({ isActive }) => (isActive ? 'nav-link active-blue' : 'nav-link')}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/Works"
                id="link-project"
                className={({ isActive }) => (isActive ? 'nav-link active-blue' : 'nav-link')}
              >
                Works
              </NavLink>
              <NavLink
                to="/Resume"
                id="link-about"
                className={({ isActive }) => (isActive ? 'nav-link active-green' : 'nav-link')}
              >
                Resume
              </NavLink>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  toggle: PropTypes.func,
};

export default NavBar;
