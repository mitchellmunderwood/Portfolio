import React from 'react';
import './index.css';

import NavBar from '../NavBar/index';
// import Drawer from '@material-ui/core/Drawer';
// import NavDrawerContents from '../NavDrawerContents/index';

function Navigation() {
  // const [state, setState] = React.useState({
  //   left: false,
  // });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setState({ ...state, [anchor]: open });
  // };

  return (
    <div>
      {/* <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <NavDrawerContents toggle={toggleDrawer} />
      </Drawer> */}
      {/* <NavBar toggle={toggleDrawer} /> */}
      <NavBar />
    </div>
  );
}

export default Navigation;
