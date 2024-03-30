import React from 'react';
import './index.css';
import Body from '../../components/Body/index';
import Album from '../../components/Album/index';
import { useStoreContext } from '../../store/store';
import Card from '../../components/Card/index';
import { SET_PROJECT } from '../../store/actions';

function Portfolio() {
  const [state, dispatch] = useStoreContext();

  const projectCallback = (name) => {
    dispatch({ type: SET_PROJECT, project: state.projects.filter((project) => project.title === name) });
  };
  return (
    <Body>
      <h1 className="portfolio-title">Portfolio</h1>
      <Album>
        {state.projects.map((project) => {
          return <Card key={project.title} content={project} callback={projectCallback} />;
        })}
      </Album>
    </Body>
  );
}

export default Portfolio;
