import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import InventoryCheckForm from './InventoryCheckForm'; 
import './InventoryCheck.css'; 

function InventoryCheck() {
  // State variables for allocation status, order ID, and message
  const [allocationStatus, setAllocationStatus] = useState(''); 
  const [orderId, setOrderId] = useState(''); 
  const [message, setMessage] = useState(''); 

  // Function to handle inventory check
  const handleInventoryCheck = () => {
    axios.post(`/api/v1/order/handleInventoryCheck/${orderId}`)
      .then(response => {
        if (response.data) {  // Set allocation status 
          setAllocationStatus('Materials allocated successfully.'); 
        } else {
          setAllocationStatus('Insufficient inventory.'); 
        }
      })
      .catch(error => {
        console.error('Error:', error); // Log error if API call fails
        setAllocationStatus('Error occurred while allocating materials.'); // Set allocation status in case of error
      });
  };

  return (
    <div className="CustomeHomePage">
      <Navbar /> {/* Render Navbar component */}
      <Sidebar /> {/* Render Sidebar component */}
      <div className="InventoryCheckContainer">
        <h1 className="Task1">Check Inventory</h1>
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
  );
}

export default InventoryCheck;
