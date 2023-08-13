import React from 'react';
import Drawer from '@mui/material//Drawer';
import Button from '@mui/material//Button';
import List from '@mui/material//List';
import Divider from '@mui/material//Divider';
import ListItem from '@mui/material//ListItem';
import ListItemText from '@mui/material//ListItemText';

export default function TemporaryDrawer() {
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
    <div>
      <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <div role="presentation" onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}>
          <List>
            <ListItem button>
              <ListItemText primary={'this'} />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}
