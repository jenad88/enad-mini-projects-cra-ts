import React from 'react';
import './App.css';

import { Header } from './Header';
import Main from './Main';
import { AppProvider } from './AppContext';

export default function App() {
  return (
    <div className="mx-auto">
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </div>
  );
}
