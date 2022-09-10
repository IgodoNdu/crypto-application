import React from "react";
// Routing
import { Switch, Route, Link } from 'react-router-dom';
// Ant Design
import { Layout, Typography, Space } from "antd";
//import components efficiently
import { Navbar } from "./components";
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>  
      <div className="main">
          <h1>Hello</h1>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
