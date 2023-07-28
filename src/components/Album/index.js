import React from "react";
import "./index.css";

function Album(props) {

    return (
        <div className=" album pb-5">
            <div className="row">
                {props.children}
            </div>
        </div>
    )

}

export default Album;