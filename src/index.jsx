import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProvidePresidents } from './context/PresidentContext';
import App from './App';

render(
  <React.StrictMode>
    <ProvidePresidents>
      <Router>
        <App />
      </Router>
    </ProvidePresidents>
  </React.StrictMode>,
  document.getElementById('root')
);
