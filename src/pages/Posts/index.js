import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import AlbumHeader from "../../components/AlbumHeader";
import Card3 from "../../components/Card3/index";
import {useStoreContext} from "../../store/store";
import { SET_POST } from "../../store/actions";
import { Redirect, useHistory } from "react-router-dom";

function Posts() {
    const [state, dispatch] = useStoreContext();
    const history = useHistory();

    const postCallback = (name) => {
        dispatch({type: SET_POST, post: state.posts.filter(post => post.title === name)});
        history.push("/Post");
    }

    return (<div>
        <Body>
            <Album>
            {state.posts.map(post => {
                    return <Card3 content={post} callback={postCallback}/>
                })}
            </Album>
        </Body>
    </div>
    )
}

export default Posts;