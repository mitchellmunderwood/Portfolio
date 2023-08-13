import React, { useEffect } from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import { useStoreContext } from './store/store';
import { SET_CONTENT } from './store/actions';
import data from './data/data';

import './App.css';

import Navigation from './pages/Navigation/index';
import Portfolio from './pages/Portfolio/index';
import Works from './pages/Works/index';
import Resume from './pages/Resume/index';

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
          <Route exact path="/Portfolio" element={<Portfolio />} />
          <Route exact path="/Works" element={<Works />} />
          <Route exact path="/Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
