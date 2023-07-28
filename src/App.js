import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useStoreContext} from "./store/store";
import {SET_CONTENT} from "./store/actions";
import data from "./data/data";

import './App.css';

import Navigation from "./pages/Navigation/index";
import Footer from "./components/Footer/index";
import Landing from "./pages/Landing/index";
import Projects from "./pages/Projects/index";
import Project from "./pages/Project/index";
import Posts from "./pages/Posts/index";
import Post from "./pages/Post/index";
import Author from "./pages/Author/index";
import Hero from "./components/Hero/index";

const App = () => {

  const [state, dispatch] = useStoreContext();

  useEffect(()=>{
    dispatch({type: SET_CONTENT, content: data });

    console.log("state", state);

  },[]);

  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={Hero} />
          <Route path="/" component={Navigation} />
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/Projects" component={Projects}/>
            <Route exact path="/Project" component={Project}/>
            <Route exact path="/Posts" component={Posts}/>
            <Route exact path="/Post" component={Post}/>
            <Route exact path="/About" component={Author}/>
          </Switch>
          <Route path="/" component={Footer} />
        </Router>
    </div>
  );
}

export default App;
