import React from 'react';
import './index.css';
import Body from '../../components/Body/index';
import Album from '../../components/Album/index';
import AlbumHeader from '../../components/AlbumHeader/index';
import MainArticle from '../../components/MainArticle/index';
import Card2 from '../../components/Card2/index';
import { useStoreContext } from '../../store/store';
import { SET_PROJECT } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import Hero from '../../components/Hero/index';

function Landing() {
  const [state, dispatch] = useStoreContext();
  const navigate = useNavigate();

  const projectCallback = (name) => {
    dispatch({ type: SET_PROJECT, project: state.projects.filter((project) => project.title === name) });
    navigate('/Project');
  };

  return (
    <div>
      <Hero />
      <Body>
        <Album>
          {state.projects.slice(0, 1).map((main) => {
            return <MainArticle key={main.id} content={main} callback={projectCallback} />;
          })}
        </Album>
        <AlbumHeader title="Projects" subtitle="MORE PROJECTS" />
        <Album>
          {state.projects.slice(1, 6).map((project) => {
            return <Card2 key={project.id} content={project} callback={projectCallback} />;
          })}
        </Album>
      </Body>
    </div>
  );
}

export default Landing;
