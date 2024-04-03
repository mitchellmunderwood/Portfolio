import React from 'react';
import './index.css';

import NavDesktop from '../NavDesktop/index';
import NavMobile from '../NavMobile/index';

const mobileScreenWidth = 400;

function Navigation() {
  return window.innerWidth > mobileScreenWidth ? <NavDesktop /> : <NavMobile />;
}

export default Navigation;
