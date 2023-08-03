import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import ProjectCard from "../../components/Project/index";
import {useStoreContext} from "../../store/store";
import {Redirect} from "react-router-dom";

function Project() {

    const [state, dispatch] = useStoreContext();

    console.log("Project Page", state.project[0] === undefined)

    return (<div>
        <Body>
            <Album>
            {(state.project[0] === undefined) ? 
                <Redirect to="/Projects" /> :
                <ProjectCard content={state.project[0]}/> 
            }
            </Album>
        </Body>
    </div>
    )
}

export default Project;