import React from 'react';
import './index.css';
import Body from '../../components/Body/index';
import Album from '../../components/Album/index';
import About from '../../components/About/index';

function Author() {
  return (
    <div>
      <Body>
        <Album>
          <About />
        </Album>
      </Body>
    </div>
  );
}

export default Author;
