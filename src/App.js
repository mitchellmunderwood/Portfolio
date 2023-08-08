import React, { useEffect } from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import { useStoreContext } from './store/store';
import { SET_CONTENT } from './store/actions';
import data from './data/data';

import './App.css';

import Navigation from './pages/Navigation/index';
import Footer from './components/Footer/index';
import Landing from './pages/Landing/index';
import Projects from './pages/Projects/index';
import Project from './pages/Project/index';
import Author from './pages/Author/index';

const App = () => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: SET_CONTENT, content: data });

    console.log('state', state);
  }, []);

  return (
    <div id="app" className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/Portfolio" element={<Landing />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Project" element={<Project />} />
          <Route exact path="/About" element={<Author />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
