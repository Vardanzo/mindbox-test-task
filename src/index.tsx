import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToDoList } from './components/ToDoList/ToDoList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);

reportWebVitals();
