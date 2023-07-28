import React from "react";
import "./index.css";

function Card1(props) {

    const {imageRef, title, date, description, badges, repoLink, liveLink} = props;

    return (
        <div className="col-md-10 offset-md-1" id="main-article">
            <div className="card mb-1 post">
                <h1 className="title">{title}</h1>
                <div className="card-img-container">
                    <img className="bd-placeholder-img" src={process.env.PUBLIC_URL + "/images" + imageRef} width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" />
                </div>

                <div className="card-body">
                    <small className="text-muted">{date}</small>
                    <p className="card-text">{description}</p>
                    <div className="badges">
                        <img src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=white" alt="" />
                    </div>                                            
                    <button type="button" className="btn btn-primary">Go to Live</button>
                    <button type="button" className="btn btn-secondary">Go to Repo</button>
                </div>
            </div>
        </div>
    )

}

export default Card1;