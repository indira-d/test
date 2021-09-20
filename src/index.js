import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';

 const domain = 'dev--llosfqt.us.auth0.com'
 const clientId = '5gIKIUrSf2zs6kBgSOXjzscgfJFRr3d6'

ReactDOM.render(
  <Auth0Provider 
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      >
        <Provider store={store}>
           <App />
        </Provider>
   
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
