import React, { useState, useEffect } from 'react';
import './CustomerStatus.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';

export default function CustomerStatus() {

  return (
    <div className="addItemContainer">
      <div>
        <Navbar />
      </div>
      <div className="formBodyContainer">
        <Sidebar />
        <div style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100vh" }}>
          <h1
            style={{
              color: "black",
              marginTop: "6rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Customer Status
          </h1>
        </div>
      </div>
    </div>
  );
}