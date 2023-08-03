import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Body(props) {
  return (
    <main role="main">
      <div className="container">{props.children}</div>
    </main>
  );
}

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;
