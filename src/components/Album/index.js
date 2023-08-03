import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Album(props) {
  return (
    <div className=" album pb-5">
      <div className="row">{props.children}</div>
    </div>
  );
}

Album.propTypes = {
  children: PropTypes.node,
};

export default Album;
