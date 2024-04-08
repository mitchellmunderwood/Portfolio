import React, { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useStoreContext } from './store/store';
import { SET_CONTENT, SET_SKILLSET } from './store/actions';
import data from './data/data';

import './App.css';

import Navigation from './navigation/Navigation/index';
import Home from './pages/Home/index';
import Portfolio from './pages/Portfolio/index';
import Resume from './pages/Resume/index';
import { PageNotFound } from './pages/PageNotFound/index';

const App = () => {
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    dispatch({ type: SET_CONTENT, content: data });
    console.log('state', state);
    const skillSet = [];
    data.projects.forEach((project) => {
      project.tags.forEach((skill) => {
        if (!skillSet.includes(skill.name) && skill.type === 'Skill') {
          skillSet.push(skill.name);
        }
      });
    });
    dispatch({ type: SET_SKILLSET, skillSet });
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
