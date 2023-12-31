import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Card2(props) {
  const { imageRef, type, title, date, description } = props.content;

  return (
    <div className="col-md-6">
      <div
        className="card mb-1 mr-1"
        onClick={() => {
          props.callback(title);
          window.scrollTo(0, 0);
        }}
      >
        <div className="card-img-container">
          <img
            className="bd-placeholder-img"
            src={process.env.PUBLIC_URL + '/images' + imageRef}
            width="100%"
            height="225"
            role="img"
            aria-label="Placeholder: Thumbnail"
          ></img>
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small>{type}</small>
            <small className="text-muted">{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

Card2.propTypes = {
  content: PropTypes.shape({
    imageRef: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
  }),
  callback: PropTypes.function,
};

export default Card2;
