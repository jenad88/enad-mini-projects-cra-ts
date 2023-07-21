import React from 'react';
import './App.css';
import { PersonScore } from './chapt05/PersonScore';
import { Alert } from './Alert';

function App() {
  return (
    <div className="container">
      <Alert heading="Success">Everything is really good!</Alert>
      <div style={{ marginTop: '20px' }}>
        <PersonScore />
      </div>
    </div>
  );
}

export default App;
