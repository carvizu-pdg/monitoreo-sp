import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            ¡Hey {user.username}, ya iniciaste sesión!
          </p>
          <button onClick={signOut}>Salir</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;