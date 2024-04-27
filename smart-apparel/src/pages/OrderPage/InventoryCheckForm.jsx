import React from 'react';

const InventoryCheckForm = ({ orderId, setOrderId, message, setMessage, handleCheckInventory }) => {
  return (
    <div>
      {/* Input field to enter order ID */}
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)} // Updating orderId state on change
      />
      {/* Button to inventory check */}
      <button onClick={handleCheckInventory}>Check Inventory</button>
      {/* Displaying message if available */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default InventoryCheckForm;