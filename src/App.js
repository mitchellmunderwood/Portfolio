import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStoreContext } from './store/store';
import { SET_CONTENT } from './store/actions';
import data from './data/data';

import './App.css';

import Navigation from './navigation/NavToggle/index';
import Home from './pages/Home/index';
import Portfolio from './pages/Portfolio/index';
import Resume from './pages/Resume/index';

const App = () => {
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    dispatch({ type: SET_CONTENT, content: data });
    console.log('state', state);
  }, []);

  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navigation} />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
