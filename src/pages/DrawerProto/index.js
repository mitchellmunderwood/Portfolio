import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        <Button onClick={toggleDrawer("left", true)}>{'left'}</Button>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            <div
                role="presentation"
                onClick={toggleDrawer("left", false)}
                onKeyDown={toggleDrawer("left", false)}
                >
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