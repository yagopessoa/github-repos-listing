import React from 'react';
import { IRepository } from '../interfaces';

const Repository: React.FC<IRepository> = ({ name, description, html_url }) => {
  return (
    <div>
      <strong>{name}</strong>
      <br />
      {description ? (
        <p>{description}</p>
      ) : (
        <p>
          <i>No description.</i>
        </p>
      )}
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        View
      </a>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Repository;
