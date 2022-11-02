import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style/index.css';

document.querySelector('body').className = "bg-grey font-lexend text-white w-[480px] h-[800px] m-auto";
document.querySelector('#root').className = "w-4/5 m-auto relative";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
