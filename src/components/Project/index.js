import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function Project(props) {
  const { imageRef, title, date, description, badges, repoLink, liveLink } = props.content;

  return (
    <div className="col-md-12 project">
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
          <div className="badges">
            {badges.map((badge) => {
              return (
                <img
                  key={badge.name}
                  src={
                    'https://img.shields.io/badge/' +
                    badge.type +
                    '-' +
                    badge.name +
                    '-informational?style=flat&logo=' +
                    badge.name.toLowerCase() +
                    '&logoColor=white&color=white'
                  }
                />
              );
            })}
          </div>
          <button type="button" className="btn btn-primary">
            <a className="button-link" href={'https://' + liveLink}>
              Go to Live
            </a>
          </button>
          <button type="button" className="btn btn-secondary">
            <a className="button-link" href={'https://' + repoLink}>
              Go to Repo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  content: PropTypes.shape({
    imageRef: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    badges: PropTypes.array,
    repoLink: PropTypes.string,
    liveLink: PropTypes.string,
  }),
  callback: PropTypes.function,
};

export default Project;
