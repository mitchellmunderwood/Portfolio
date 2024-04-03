/* eslint-disable react/jsx-key */
import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { useStoreContext } from '../../store/store';
import { SET_PAGE } from '../../store/actions';

function NavDesktop() {
  const [state, dispatch] = useStoreContext();

  return (
    <nav className="navDesktop">
      {state.pages.map((page) => {
        if (state.page === page.title) {
          return (
            <NavLink
              key={page.id}
              onClick={() => dispatch({ type: SET_PAGE, page: page.title })}
              className="nav-link nav-link-underline"
              id={`nav-link-${page.id}`}
              to={`${page.link}`}
            >
              {page.title}
            </NavLink>
          );
        } else {
          return (
            <NavLink
              key={page.id}
              onClick={() => dispatch({ type: SET_PAGE, page: page.title })}
              className="nav-link"
              id={`nav-link-${page.id}`}
              to={`${page.link}`}
            >
              {page.title}
            </NavLink>
          );
        }
      })}
      <a
        className="nav-link"
        id="nav-link-linkedin"
        href="https://www.linkedin.com/in/mitchellmunderwood"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn-&gt;
      </a>
      <a
        className="nav-link"
        id="nav-link-github"
        href="https://www.github.com/mitchellmunderwood"
        target="_blank"
        rel="noreferrer"
      >
        Github-&gt;
      </a>
    </nav>
  );
}

export default NavDesktop;
