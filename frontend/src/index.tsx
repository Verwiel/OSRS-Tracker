import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';
import { App } from './App';
import { CharacterProvider } from "./context/CharacterProvider";
import { QuestProvider } from './context/QuestProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <CharacterProvider>
      <QuestProvider>
        <App />
      </QuestProvider>
    </CharacterProvider>
  // </React.StrictMode>
);
