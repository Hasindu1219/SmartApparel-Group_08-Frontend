import React, { useState } from 'react';
import axios from 'axios';
import './CustomerPage/CustomerStatus.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import InventoryCheckForm from './InventoryCheckForm';

export default function InventoryCheck() {
  // Define state variables 
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle checking inventory
  const handleCheckInventory = async () => {
    try {
      // Sending a POST request to the backend API to check inventory
      const response = await axios.post('/api/inventory/check', { orderId });
      // Updating message state 
      setMessage(response.data);
    } catch (error) {
      // Handling error 
      setMessage(error.response.data);
    }
  };

  // Render InventoryCheckForm component
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
          {/* Title for Check Inventory */}
          <h1
            style={{
              color: "black",
              marginTop: "6rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Check Inventory
          </h1>
          {/* Render InventoryCheckForm component */}
          <InventoryCheckForm
            orderId={orderId}
            setOrderId={setOrderId}
            message={message}
            setMessage={setMessage}
            handleCheckInventory={handleCheckInventory}
          />
        </div>
      </div>
    </div>
  );
}
