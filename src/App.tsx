import React, { useState, useEffect } from 'react';
import { IRepository } from './interfaces';
import Repository from './components/Repository';
import api from './services/api';
import {
  Button,
  TextInput,
  Caption,
  Body,
  GlobalStyle,
  Row,
  Footer,
} from './components/Components.styles';

const PROFILE_URL = 'https://github.com/yagopessoa';
const UI_URL =
  'https://www.figma.com/file/ahJvzfQCeiN6EA3nqFdrY0/Toxin-UI-Kit?node-id=1%3A259';

const WAIT_INTERVAL = 400;

function App() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>('');
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    if (user) {
      setLoading(true);
      api
        .get<IRepository[]>(`users/${user}/repos`)
        .then((response) => {
          setRepositories(response.data);
          setLoading(false);
        })
        .catch(() => {
          setRepositories([]);
          setLoading(false);
        });
    }
  }, [user]);

  useEffect(() => {
    const inputTimeout = setTimeout(() => setUser(userInput), WAIT_INTERVAL);
    return () => clearTimeout(inputTimeout);
  }, [userInput]);

  const handleClear = () => {
    setUserInput('');
    setUser('');
    setRepositories([]);
  };

  const renderRepositories = () => {
    const count = repositories.length;
    if (user) {
      return count > 0 ? (
        <div>
          <br />
          <Body>
            Repositories found: <b>{count}</b>
          </Body>
          <br />
          {repositories.map((repository) => (
            <Repository key={repository.id} {...repository} />
          ))}
        </div>
      ) : (
        <>
          <br />
          <Caption>No repositories found for this user.</Caption>
        </>
      );
    }
    return (
      <>
        <br />
        <Caption>Search for an user to see its repositories.</Caption>
      </>
    );
  };

  return (
    <>
      <GlobalStyle />
      <h1>Github Repos Listing</h1>
      <Row>
        <TextInput
          type="text"
          placeholder="Type username here"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <Button onClick={handleClear}>Clear</Button>
      </Row>
      {loading ? (
        <>
          <br />
          <Caption>Loading...</Caption>
        </>
      ) : (
        renderRepositories()
      )}
      <Footer>
        Coded by{' '}
        <a href={PROFILE_URL} target="_blank">
          Yago Pessoa
        </a>
        .
        <br />
        UI components inspired by{' '}
        <a href={UI_URL} target="_blank">
          Toxin UI Kit
        </a>
        .
      </Footer>
    </>
  );
}

export default App;
