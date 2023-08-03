import React, {useEffect} from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import Card3 from "../../components/Card3/index";
import {useStoreContext} from "../../store/store";
import { SET_PROJECT } from "../../store/actions";
import { useHistory } from "react-router-dom";

function Projects() {
    const [state, dispatch] = useStoreContext();
    const history = useHistory();

    const projectCallback = (name) => {
        dispatch({type: SET_PROJECT, project: state.projects.filter(project => project.title === name)});
        history.push("/Project");
    }

    return (<div>
        <Body>
            <Album>
                {state.projects.map(project => {
                    return <Card3 content={project} callback={projectCallback}/>
                })}
            </Album>
        </Body>
    </div>
    )
}

export default Projects;