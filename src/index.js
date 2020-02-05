import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import './index.css';
import App from './App';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
);
