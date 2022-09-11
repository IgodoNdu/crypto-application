import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Ant Design Styling
import 'antd/dist/antd.min.css'
// Routing
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);


