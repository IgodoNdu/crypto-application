import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Ant Design Styling
import 'antd/dist/antd.min.css'
//Set the provider, (with the store as the variable)
import { Provider } from 'react-redux';
// Routing
import { BrowserRouter as Router } from 'react-router-dom';
//Import your store (i.e variable we'll provide to the provider)
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/**Having got the Provider, we wrap <App /> with the provider using the store as it's prop/variable. Now every component on the app now has access to the store variable */}
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);


