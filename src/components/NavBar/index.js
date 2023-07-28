import React from "react";
import "./index.css";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

function NavBar(props) {

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div id="thing">
                    <div className="nav-left">
                        <Button onClick={props.toggle("left",true)} id="toggler-btn"><span className="navbar-toggler-icon"></span></Button>
                        <Route exact path="/">

                        </Route>
                        <Route exact path={["/About","/Posts","/Post","/Projects","/Project"]}>
                            <h3 id="toggler-initials" className="text-center"><NavLink to="/" ><strong>M</strong>U</NavLink></h3>
                            <h3 id="toggler-name" className="text-center"><NavLink to="/" ><strong>Mitchell</strong> Underwood</NavLink></h3> 
                        </Route>
                    </div>
                    
                    <div id="nav-center" className="inner d-flex justify-content-center align-items-center">
                        <nav id="toggler-nav" className="nav nav-masthead justify-content-center">
                                <NavLink to="/Posts" id="link-blog" className="nav-link " activeClassName="nav-link active-red">Posts</NavLink>
                                <NavLink to="/Projects" id="link-project" className="nav-link" activeClassName="nav-link active-blue">Projects</NavLink>
                                <NavLink to="/About" id="link-about" className="nav-link" activeClassName="nav-link active-green">About</NavLink>
                        </nav>
                        <h3 id="toggler-name-center" className="text-center"><a><strong>Mitchell</strong> Underwood</a></h3>
                        <h3 id="toggler-initials-center" className="text-center"><a><strong>M</strong>U</a></h3>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar;

