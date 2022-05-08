import '../styles/App.css';
import React, { useState, useEffect } from 'react';
import { assertVariableDeclarator } from '@babel/types';


function App() {
  const [name, setname] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');


  return (
    <div className="App">
      <div className="navbar">
        Github Search
      </div>
      <div className="search">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Name'
              name='name'
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default App;
