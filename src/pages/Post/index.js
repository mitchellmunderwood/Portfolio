import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import PostCard from "../../components/Post/index";
import {useStoreContext} from "../../store/store";
import {Redirect} from "react-router-dom";

function Post() {
  
    const [state, dispatch] = useStoreContext();

    console.log("Post Page", state.post)

    return (<div>
        <Body>
            <Album>
                {(state.post[0] === undefined) ?  
                <Redirect to="/Posts" /> :
                <PostCard content={state.post[0]}/> 
                }
            </Album>
        </Body>
    </div>
    )
}

export default Post;