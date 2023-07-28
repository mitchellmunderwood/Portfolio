
import React from "react";
import "./index.css";

function NavDrawer() {

    return (
        <div>
            <aside className="mdc-drawer mdc-drawer--modal">
                <div className="mdc-drawer__header">
                    <h3 className="mdc-drawer__title"><a className="bland-link" href="../index.html"><strong>Mitchell</strong> Underwood</a></h3>
                </div>
                <div className="mdc-drawer__content">
                    <nav className="mdc-list">
                    
                        <a className="mdc-list-item mdc-list-item--activated" href="#" aria-selected="true">
                            <span className="mdc-list-item__text">Blog</span>
                        </a>
                        <a className="mdc-list-item" href="#">
                            <span className="mdc-list-item__text">Projects</span>
                        </a>
                        <a className="mdc-list-item" href="#">          
                            <span className="mdc-list-item__text">About</span>
                        </a>
                        <hr className="mdc-list-divider"></hr>
                        <h3 className=" gd-nav-drawer--subheader">Connect</h3>
                        <div className="drawer-connect-block">
                            <a className="mdc-list-item" href="#" aria-selected="true">
                            <span className="mdc-list-item__text">LinkedIn</span>
                            </a>
                            <a className="mdc-list-item" href="#">
                            <span className="mdc-list-item__text">Github</span>
                            </a>
                            <a className="mdc-list-item" href="#">          
                            <span className="mdc-list-item__text">Contact</span>
                            </a>
                        </div>
                        <hr className="mdc-list-divider"></hr>
                        <h3 className="gd-nav-drawer--subheader">Mitchell Underwood</h3>
                        <p className="drawer-text">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.
                        </p>
                    </nav>
                </div>
            </aside>
            <div className="mdc-drawer-scrim"></div>
        </div>   
    )

}

export default NavDrawer;