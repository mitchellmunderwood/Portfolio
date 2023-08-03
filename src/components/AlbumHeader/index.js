import React from "react";
import "./index.css";
import {NavLink, Link} from 'react-router-dom';

export default function AlbumHeader(props) {
        const {title, subtitle} = props
    return (
        <div className="album-header">
            <div className="album-header-body d-flex justify-content-between align-items-center">
                <h3 className="album-header-title">{title}</h3>
                <Link to={title} onClick={()=>{window.scrollTo(0,0)}} className="album-header-more">{subtitle}</Link>
            </div> 
        </div>
    )
}

