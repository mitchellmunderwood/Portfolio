import React, {useEffect} from "react";
import "./index.css";

import NavBar from "../../components/NavBar/index";
import Drawer from '@material-ui/core/Drawer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavDrawerContents from "../../components/NavDrawerContents/index";


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
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} >
                <NavDrawerContents toggle={toggleDrawer} />
            </Drawer>
            <NavBar toggle={toggleDrawer} />
        </div>
    )

}

export default Navigation;
