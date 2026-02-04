
import './types';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PrivacyPolicyPage />
  </React.StrictMode>
);
