import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import './OrderStatus.css'; 

const OrderStatus = () => {
  // State variables for managing loading state, order ID, and status
  const [loading, setLoading] = useState(false); 
  const [orderId, setOrderId] = useState(''); 
  const [status, setStatus] = useState(''); 

  // Function to handle updating order status
  const handleUpdateStatus = async (newStatus) => {
    setLoading(true); 
    try {
      // Send PUT request to update order status
      const response = await axios.put(`/api/orderstatus/updateOrderStatus/${orderId}`);
      console.log(response.data); 
    } catch (error) {
      console.error('Error updating order status:', error); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="CustomeHomePage">
      <Navbar /> {/* Render Navbar component */}
      <Sidebar /> {/* Render Sidebar component */}
      <div className="OrderStatusContainer">
        <h1 className="Task1">Order Status</h1>
        {/* Input field to enter order ID */}
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID"
        />
        {/* Buttons to update order status */}
        <div className="Botton">
          <button className="btn1" onClick={() => handleUpdateStatus('PENDING')}>Pending</button>
          <button className="btn1" onClick={() => handleUpdateStatus('CREATED')}>Created</button>
          <button className="btn1" onClick={() => handleUpdateStatus('PROCESSING')}>Processing</button>
          <button className="btn1" onClick={() => handleUpdateStatus('QUALITY_CERTIFIED')}>Quality Certified</button>
          <button className="btn1" onClick={() => handleUpdateStatus('SHIPPED')}>Shipped</button>
          <button className="btn1" onClick={() => handleUpdateStatus('DELIVERED')}>Delivered</button>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
