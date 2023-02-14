import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-kemsp7apehdhfnaf.us.auth0.com'
    clientId='lSuhKWVsi0wbcFvx7WU2PewETigSHcms'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <React.StrictMode>
      <GithubProvider>
        <App />
      </GithubProvider>
    </React.StrictMode>
  </Auth0Provider>
);

serviceWorker.unregister();
