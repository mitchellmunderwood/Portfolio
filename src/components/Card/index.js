import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Card(props) {
  const { title, date, description, repoLink, badges } = props.content;

  return (
    <div className="col-md-4">
      <a href={repoLink} className="a-clear" target="_blank" rel="noreferrer">
        <div className="card mb-1 mr-1">
          <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <small className="project-date">{date}</small>
            <p className="project-desc">{description}</p>
            {badges.map((badge) => {
              return (
                <p className="skill-badge" key={badge.name}>
                  {badge.name}
                </p>
              );
            })}
          </div>
        </div>
      </a>
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    repoLink: PropTypes.string,
    badges: PropTypes.array,
  }),
  callback: PropTypes.function,
};

export default Card;
