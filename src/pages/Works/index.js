import React from 'react';
import './index.css';
import Body from '../../components/Body/index';
import Album from '../../components/Album/index';
import Card3 from '../../components/Card3/index';
import { useStoreContext } from '../../store/store';

function Works() {
  const [state] = useStoreContext();

  return (
    <div>
      <Body>
        <Album>
          {state.projects.map((project) => {
            return <Card3 key={project.id} content={project} />;
          })}
        </Album>
      </Body>
    </div>
  );
}

export default Works;
