import React, { useState, useEffect } from 'react';
import { IRepository } from './interfaces';
import Repository from './components/Repository';
import api from './services/api';

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
        .catch(() => setLoading(false));
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
          <p>Repositories found: {count}</p>
          <br />
          {repositories.map((repository) => (
            <Repository key={repository.id} {...repository} />
          ))}
        </div>
      ) : (
        <p>
          <i>No repositories found for this user.</i>
        </p>
      );
    }
    return (
      <p>
        <i>Search for an user to see its repositories.</i>
      </p>
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type user name here"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <br />
      <br />
      <button onClick={handleClear}>Clear</button>
      <br />
      <br />
      {loading ? (
        <p>
          <i>Loading...</i>
        </p>
      ) : (
        renderRepositories()
      )}
    </>
  );
}

export default App;
