import React, {useEffect} from "react";
import "./index.css";
import {Link, useHistory} from "react-router-dom";


function Project(props) {
    
    const {imageRef, type, title, date, description, badges, repoLink, liveLink} = props.content;

    return (
        <div className="col-md-12 post">
            <div className="card mb-1" id="no-hover-shadow">
                <h1 className="title">{title}</h1>
                <div className="card-img-container">
                    <img className="bd-placeholder-img" src={process.env.PUBLIC_URL + "/images" + imageRef} width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" />
                </div>

                <div className="card-body">
                    <small className="text-muted">{date}</small>
                    <p className="card-text">{description}</p>
                    <div className="badges">
                        {badges.map(badge => {
                           return <img src={"https://img.shields.io/badge/" + badge.type + "-" + badge.name + "-informational?style=flat&logo=" + badge.name.toLowerCase() + "&logoColor=white&color=white"} />;
                        })}
                    </div>                                            
                    <button type="button" className="btn btn-primary"><a class="button-link" href={"https://" + liveLink}>Go to Live</a></button>
                    <button type="button" className="btn btn-secondary"><a class="button-link" href={"https://" + repoLink}>Go to Repo</a></button>
                </div>
            </div>
        </div>
    )
}


export default Project;