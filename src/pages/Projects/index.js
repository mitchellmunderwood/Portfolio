import React from 'react';
import './index.css';
import Body from '../../components/Body/index';
import Album from '../../components/Album/index';
import Card3 from '../../components/Card3/index';
import { useStoreContext } from '../../store/store';
import { SET_PROJECT } from '../../store/actions';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const [state, dispatch] = useStoreContext();
  const navigate = useNavigate();

  const projectCallback = (name) => {
    dispatch({ type: SET_PROJECT, project: state.projects.filter((project) => project.title === name) });
    navigate('/Project');
  };

  return (
    <div>
      <Body>
        <Album>
          {state.projects.map((project) => {
            return <Card3 key={project.id} content={project} callback={projectCallback} />;
          })}
        </Album>
      </Body>
    </div>
  );
}

export default Projects;
