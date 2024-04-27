import React, { useState } from 'react';
import axios from 'axios';
//import './CustomerPage/CustomerStatus.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import InventoryCheckForm from './InventoryCheckForm';

function InventoryCheck( ) {
  const [allocationStatus, setAllocationStatus] = useState('');
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');

  const handleInventoryCheck = () => {
    axios.post(`/api/v1/order/handleInventoryCheck/${orderId}`)
      .then(response => {
          // Handle successful response
          if (response.data) {
              setAllocationStatus('Materials allocated successfully.');
           } else {
               setAllocationStatus('Insufficient inventory.');
           }
       })
      .catch(error => {
          // Handle error
          console.error('Error:', error);
          setAllocationStatus('Error occurred while allocating materials.');
      });
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
            handleInventoryCheck={handleInventoryCheck}
          />
        </div>
      </div>
    </div>
  );
}

export default InventoryCheck;