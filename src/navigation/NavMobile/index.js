import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { useStoreContext } from '../../store/store';
import { SET_PAGE } from '../../store/actions';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavMobile() {
  const [state, dispatch] = useStoreContext();

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    dispatch({ type: 'TOGGLE_NAV_DRAWER' });
  };
  return (
    <div className="testing">
      <IconButton
        className="menu-button"
        onClick={toggleDrawer}
        size="large"
        edge="start"
        color="black"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon className="menu-icon" />
      </IconButton>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: '#FFCA69' },
        }}
        classname="drawer"
        anchor={'left'}
        open={state.navDrawer}
        onClose={toggleDrawer}
      >
        <div className="drawer-macro" role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <div className="mdc-drawer__content">
            {state.pages.map((page) => {
              if (state.page === page.title) {
                return (
                  <NavLink
                    key={page.id}
                    onClick={() => dispatch({ type: SET_PAGE, page: page.title })}
                    className="navDrawer-link navDrawer-link-underline"
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
                    className="navDrawer-link"
                    id={`nav-link-${page.id}`}
                    to={`${page.link}`}
                  >
                    {page.title}
                  </NavLink>
                );
              }
            })}
            <a
              className="navDrawer-link"
              id="nav-link-linkedin"
              href="https://www.linkedin.com/in/mitchellmunderwood"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn-&gt;
            </a>
            <a
              className="navDrawer-link"
              id="nav-link-github"
              href="https://www.github.com/mitchellmunderwood"
              target="_blank"
              rel="noreferrer"
            >
              Github-&gt;
            </a>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
