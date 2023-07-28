import React from "react";
import "./index.css";

function Body(props) {

    return (
        <main role="main">
            <div className="container">
                {props.children}
            </div>
        </main>
    )

}

export default Body;