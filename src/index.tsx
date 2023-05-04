import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Jogo } from './pages/jogo.page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Jogo />
  </React.StrictMode>
);
