import React from "react";
import "./index.css";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink, Link } from "react-router-dom";

export default function NavDrawerContents(props) {
    return (
        <div
            className="drawer-macro"
            role="presentation"
            onClick={props.toggle("left", false)}
            onKeyDown={props.toggle("left", false)}
            > 
          <div className="mdc-drawer__content">
            <nav className="mdc-list">

              <a className="mdc-list-item"   aria-selected="true">
              <NavLink to="/"  ><h4><strong>Mitchell</strong> Underwood</h4></NavLink>
              </a>
              <a className="mdc-list-item "  aria-selected="true">
                <span className="mdc-list-item__text"><NavLink to="/Posts" >Posts</NavLink></span>
              </a>
              <a className="mdc-list-item" >
                <span className="mdc-list-item__text"><NavLink to="/Projects" >Projects</NavLink></span>
              </a>
              <a className="mdc-list-item" >          
                <span className="mdc-list-item__text"><NavLink to="/About" >About</NavLink></span>
              </a>
              <hr className="mdc-list-divider"></hr>
              
              <h3 className=" gd-nav-drawer--subheader">Connect</h3>
              <div className="drawer-connect-block">
                <a className="mdc-list-item" href="https://www.linkedin.com/in/mitchellmunderwood" aria-selected="true">
                  <span className="mdc-list-item__text">LinkedIn</span>
                </a>
                <a className="mdc-list-item" href="https://www.github.com/mitchellmunderwood">
                  <span className="mdc-list-item__text">Github</span>
                </a>
                <NavLink onClick={()=>{window.scrollTo(0,500)}} className="mdc-list-item" to="/About">          
                  <span className="mdc-list-item__text">Contact</span>
                </NavLink>
              </div>
                <hr className="mdc-list-divider"></hr>
                <h3 className="gd-nav-drawer--subheader">Mitchell Underwood</h3>
                <p className="drawer-text">Creative web developer with design and engineering passion, who wants to help you develop your next big thing.
                </p>
              
            
          
            </nav>
          </div>
            {/* <List>
                <ListItem button>
                    <ListItemText primary={'this'} />
                </ListItem>
            </List>
            <Divider /> */}
        </div>
    )
} 