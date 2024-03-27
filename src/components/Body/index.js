import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Body(props) {
  return <main className="body">{props.children}</main>;
}

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;
