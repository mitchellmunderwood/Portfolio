import React from 'react';
import './index.css';

import NavBar from '../../components/NavBar/index';
import Drawer from '@mui/material/Drawer';
import NavDrawer from '../../components/NavDrawer/index';

function Navigation() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="NavigationParent">
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <NavDrawer toggle={toggleDrawer} />
      </Drawer>
      <NavBar toggle={toggleDrawer} />
    </div>
  );
}

export default Navigation;
