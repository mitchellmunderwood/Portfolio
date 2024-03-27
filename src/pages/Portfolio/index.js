import React from 'react';
import './index.css';
import Body from '../../components/Body/index';
import Album from '../../components/Album/index';

function Portfolio() {
  return (
    <div>
      <Body>
        <Album>
          {/* {state.projects.map((project) => {
            return <Card3 key={project.id} content={project} callback={projectCallback} />;
          })} */}
        </Album>
      </Body>
    </div>
  );
}

export default Portfolio;
