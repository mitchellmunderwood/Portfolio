import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavDrawer(props) {
  return (
    <div
      className="drawer-macro"
      role="presentation"
      onClick={props.toggle('left', false)}
      onKeyDown={props.toggle('left', false)}
    >
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          <a className="mdc-list-item">
            <span className="mdc-list-item__text">
              <NavLink to="/Portfolio">Portfolio</NavLink>
            </span>
          </a>
          <a className="mdc-list-item">
            <span className="mdc-list-item__text">
              <NavLink to="/Works">Works</NavLink>
            </span>
          </a>
          <a className="mdc-list-item">
            <span className="mdc-list-item__text">
              <NavLink to="/Resume">Resume</NavLink>
            </span>
          </a>
          <div className="drawer-connect-block">
            <a className="mdc-list-item" href="https://www.linkedin.com/in/mitchellmunderwood" aria-selected="true">
              <span className="mdc-list-item__text">LinkedIn</span>
            </a>
            <a className="mdc-list-item" href="https://www.github.com/mitchellmunderwood">
              <span className="mdc-list-item__text">Github</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

NavDrawer.propTypes = {
  toggle: PropTypes.func,
};
