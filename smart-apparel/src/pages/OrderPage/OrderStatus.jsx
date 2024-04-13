import React from 'react';
import './CustomerPage/CustomerStatus.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';

export default function OrderStatus() {
  // Render OrderStatus component
  return (
    <div className="addItemContainer">
      <div>
        {/* Navbar component */}
        <Navbar />
      </div>
      <div className="formBodyContainer">
        {/* Sidebar component */}
        <Sidebar />
        <div style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100vh" }}>
          {/* Title for Order Status */}
          <h1
            style={{
              color: "black",
              marginTop: "6rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Order Status
          </h1>
        </div>
      </div>
    </div>
  );
}
