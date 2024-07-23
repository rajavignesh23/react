import React, { useState } from 'react';
import './style.css';
import QuizApp from './QuizApp';

const App = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsRegistering(false);
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div id="auth-container">
          <h2 id="auth-title">{isRegistering ? 'Register' : 'Login'}</h2>
          <form onSubmit={isRegistering ? handleRegister : handleLogin}>
            <input
              id="auth-username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              id="auth-password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button id="auth-submit" type="submit">
              {isRegistering ? 'Register' : 'Login'}
            </button>
          </form>
          <button id="toggle-auth" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Already have an account? Login' : 'New user? Register'}
          </button>
        </div>
      ) : (
        <QuizApp username={username} />
      )}
    </div>
  );
};

export default App;
