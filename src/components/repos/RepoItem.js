import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <div className="card">
        <h3>
          {repo.name}
        </h3>
        {repo.stargazers_count > 0 && <h4 style={repoStatStyle}>Stars: {repo.stargazers_count}</h4>}
        {repo.watchers_count > 0 && <h4 style={repoStatStyle}>Watchers: {repo.watchers_count}</h4>}
        {repo.forks_count > 0 && <h4 style={repoStatStyle}>Forks: {repo.forks_count}</h4>}
      </div>
    </a>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

const repoStatStyle = {
  display: 'inline',
  marginRight: '10px',
  width: '200px',
  color: '#333'
}

export default RepoItem
