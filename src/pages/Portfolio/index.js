import React from 'react';
import './index.css';
import Body from '../../components/Body/index';
import Album from '../../components/Album/index';
import AlbumHeader from '../../components/AlbumHeader/index';
import MainArticle from '../../components/MainArticle/index';
import Card2 from '../../components/Card2/index';
import { useStoreContext } from '../../store/store';
// import { SET_PROJECT } from '../../store/actions';

function Portfolio() {
  const [state] = useStoreContext();

  // const projectCallback = (name) => {
  //   dispatch({ type: SET_PROJECT, project: state.projects.filter((project) => project.title === name) });
  // };

  return (
    <div>
      <Body>
        <Album>
          {state.projects.slice(0, 1).map((main) => {
            return <MainArticle key={main.id} content={main} />;
          })}
        </Album>
        <AlbumHeader title="Works" subtitle="More Works" />
        <Album>
          {state.projects.slice(1, 6).map((project) => {
            return <Card2 key={project.id} content={project} />;
          })}
        </Album>
      </Body>
    </div>
  );
}

export default Portfolio;
