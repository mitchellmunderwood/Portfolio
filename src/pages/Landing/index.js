import React, {useEffect} from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import AlbumHeader from "../../components/AlbumHeader/index";
import MainArticle from "../../components/MainArticle/index";
import Card2 from "../../components/Card2/index";
import {useStoreContext} from "../../store/store";
import { SET_PROJECT, SET_POST } from "../../store/actions";
import { useHistory } from "react-router-dom";

function Landing() {
    const [state, dispatch] = useStoreContext();
    const history = useHistory();

    const postCallback = (name) => {
        dispatch({type: SET_POST, post: state.posts.filter(post => post.title === name)});
        history.push("/Post");
    }

    const projectCallback = (name) => {
        dispatch({type: SET_PROJECT, project: state.projects.filter(project => project.title === name)});
        history.push("/Project");
    }

    return (
        <div>
            <Body>
                <Album>
                    {
                       state.projects.slice(0,1).map(main => {
                           return <MainArticle content={main} callback={projectCallback}/>
                       }) 
                    }
                </Album>
                <AlbumHeader title="Posts" subtitle="MORE POSTS" />
                <Album>
                    {state.posts.map(post => {
                       return <Card2 content={post} callback={postCallback}/>   
                    })}
                </Album>
                <AlbumHeader title="Projects" subtitle="MORE PROJECTS" />
                <Album>
                    {state.projects.slice(1,6).map(project => {
                        return <Card2 content={project} callback={projectCallback}/>   
                    })}
                </Album>
            </Body>
        </div>
    )
}

export default Landing;