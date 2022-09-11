import React from "react";
// Routing
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// Ant Design
import { Layout, Typography, Space } from "antd";
//import components efficiently
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from "./components";
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>  
      <div className="main">
          <Layout>
            <div className="routes">
              <Router>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Router>
            </div>
          </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
