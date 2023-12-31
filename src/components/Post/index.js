import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Post(props) {
  const { imageRef, title, date, description } = props.content;

  return (
    <div className="col-md-12 post">
      <div className="card mb-1" id="no-hover-shadow">
        <h1 className="title">{title}</h1>
        <div className="card-img-container">
          <img
            className="bd-placeholder-img"
            src={process.env.PUBLIC_URL + '/images' + imageRef}
            width="100%"
            height="225"
            role="img"
            aria-label="Placeholder: Thumbnail"
          />
        </div>

        <div className="card-body">
          <small className="text-muted">{date}</small>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    imageRef: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
  }),
  callback: PropTypes.function,
};

export default Post;
