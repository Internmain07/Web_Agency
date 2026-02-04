
import './types';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import TermsOfServicePage from './components/TermsOfServicePage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <TermsOfServicePage />
  </React.StrictMode>
);
