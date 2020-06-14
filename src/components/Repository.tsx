import React from 'react';
import { IRepository } from '../interfaces';
import { Card, Title, Body, Button, Caption } from './Components.styles';

const Repository: React.FC<IRepository> = ({ name, description, html_url }) => {
  const handleButtonClick = () => window.open(html_url);
  return (
    <Card>
      <Title>{name}</Title>
      {description ? (
        <Body>{description}</Body>
      ) : (
        <Caption>No description.</Caption>
      )}
      <Button onClick={handleButtonClick}>View</Button>
    </Card>
  );
};

export default Repository;
