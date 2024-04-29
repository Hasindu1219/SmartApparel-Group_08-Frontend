import React from 'react';
import './InventoryCheckForm.css'; 

const InventoryCheckForm = ({ orderId, setOrderId, message, setMessage, handleCheckInventory }) => {
  return (
    <form className="inventory-check-form">
      {/* Input field to enter order ID */}
      <div className="form-box">
        <label>Order ID</label>
        <input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)} // Updating orderId state on change
        />
      </div>
      {/* Button to inventory check */}
      <div className="form-button-section">
        <button className="btn1" onClick={handleCheckInventory}>Check Inventory</button>
      </div>
      {/* Displaying message if available */}
      {message && <p className="task1">{message}</p>}
    </form>
  );
};

export default InventoryCheckForm;
