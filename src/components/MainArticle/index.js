import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function MainArticle(props) {
  const { imageRef, type, title, date, description } = props.content;

  return (
    <div className="col-md-12" id="main-article">
      <div
        className="card mb-1"
        onClick={() => {
          props.callback(title);
          window.scrollTo(0, 0);
        }}
      >
        <div className="card-img-container">
          <img
            id="main-article-photo"
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

MainArticle.propTypes = {
  content: PropTypes.shape({
    imageRef: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
  }),
  callback: PropTypes.function,
};

export default MainArticle;
