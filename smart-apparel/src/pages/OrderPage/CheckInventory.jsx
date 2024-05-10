import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import "./CheckInventory.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function CheckInventory() {
  const [allocationStatus, setAllocationStatus] = useState("");
  const [orderId, setOrderId] = useState("");
  const [modelName, setModelName] = useState("");
  const [message, setMessage] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleCheckInventory = () => {
    // Make API call to check inventory
    axios.post(`/api/v1/order/handleInventoryCheck/${orderId}`, { modelName })
      .then(response => {
        // Handle successful response
        if (response.data) {
          setAllocationStatus('Materials allocated successfully.');
          setIsButtonDisabled(false);
        } else {
          setAllocationStatus('Insufficient inventory.');
          setIsButtonDisabled(true);
        }
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
        setAllocationStatus('Error occurred while allocating materials.');
      });
  };

  return (
    <button id="checkBtn" onClick={handleCheckInventory}>
      Check Inventory
    </button>
  );
}

export default CheckInventory;
