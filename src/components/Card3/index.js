import React, { useCallback } from "react";
import "./index.css";

function Card3(props) {

    const {color, imageRef, type, title, date, description, badges, repoLink, liveLink} = props.content;

    

    return (
        <div className="col-md-4">
            <div className="card mb-1 mr-1" onClick={() => {
            props.callback(title);
            window.scrollTo(0,0);
            }}>            
                <div className="card-body">
                    <div className={"card-line line-" + color}></div>
                    <div className="d-flex justify-content-between align-items-center">
                            <h3>{title}</h3>
                            <small className="text-muted">{date}</small>                                                               
                    </div>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-img-container">
                    <img className="" src={process.env.PUBLIC_URL + "/images" + imageRef} width="100%" height="150px"  role="img" aria-label="Placeholder: Thumbnail">
                    </img>
                </div>
            </div>
        </div>
    )

}

export default Card3;