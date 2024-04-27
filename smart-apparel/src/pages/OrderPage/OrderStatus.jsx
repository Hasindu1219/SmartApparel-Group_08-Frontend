import React, { useState } from 'react';
import axios from 'axios';
//import './CustomerPage/CustomerStatus.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';

const OrderStatus = ( ) => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(''); // State to hold the orderId entered by the user
  const [status, setStatus] = useState('');

  const handleUpdateStatus = async () => {
    setLoading(true);
    try {
      // Call the backend API to update order status and perform quality certification
      const response = await axios.put(`/api/orderstatus/updateOrderStatus/${orderId}`);
      // Handle success response
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error('Error updating order status:', error);
    } finally {
      setLoading(false);
    }
  };

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
          {/* Order ID input */}
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID"
          />
          {/* Order Status Page */}
          <div className="OrderStatusPage">
            <div className="Botton">
              <button onClick={() => handleUpdateStatus('CREATED')}>Created</button>
              <button onClick={() => handleUpdateStatus('PROCESSING')}>Processing</button>
              <button onClick={() => handleUpdateStatus('QUALITY_CERTIFIED')}>Quality Certified</button>
              <button onClick={() => handleUpdateStatus('SHIPPED')}>Shipped</button>
              <button onClick={() => handleUpdateStatus('DELIVERED')}>Delivered</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;