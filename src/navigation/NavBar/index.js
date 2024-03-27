import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import { StoreProvider } from '../../store/store';

function NavBar() {
  // const [state, setState] = StoreProvider();
  // const page = state.page;

  return (
    <nav className="navBar">
      <NavLink className="nav-link" activeClassName="nav-link-underline" id="nav-link-home" to="/home">
        Home
      </NavLink>
      <NavLink className="nav-link" activeClassName="nav-link-underline" id="nav-link-portfolio" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className="nav-link" activeClassName="nav-link-underline" id="nav-link-resume" to="/resume">
        Resume
      </NavLink>
      <a
        className="nav-link"
        id="nav-link-linkedin"
        href="https://www.linkedin.com/in/mitchellmunderwood"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn -&gt;
      </a>
      <a
        className="nav-link"
        id="nav-link-github"
        href="https://www.github.com/mitchellmunderwood"
        target="_blank"
        rel="noreferrer"
      >
        Github -&gt;
      </a>
    </nav>
  );
}

NavBar.propTypes = {
  toggle: PropTypes.boolean,
};

export default NavBar;
