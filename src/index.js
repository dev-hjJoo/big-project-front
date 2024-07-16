import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 두 번 렌더링 되는 것 방지, 추후 수정 필요!
  // <React.StrictMode>
    <CookiesProvider>
      <HomePage />
    </CookiesProvider>
  // </React.StrictMode>
);
