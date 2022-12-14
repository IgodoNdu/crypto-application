import React from "react";
// Routing
import { Route, Routes, Link } from 'react-router-dom';
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
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            AmaCrypto <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to={<Exchanges />}>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
