import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <HomePage />
    </CookiesProvider>
  </React.StrictMode>
);
