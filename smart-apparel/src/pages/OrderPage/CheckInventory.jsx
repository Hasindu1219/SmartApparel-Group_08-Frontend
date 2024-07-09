import React, { useState } from "react";
import axios from "axios";
import Error from "../../components/Error1/ErrorInventory";
import "./CheckInventory.css";

const CheckInventory = ({ setIsButtonDisabled }) => {
  // State variables for error handling
  const [error, setError] = useState("none");
  const [errorType, setErrorType] = useState("");

  // Function to handle the Check Inventory button click
  const handleCheckInventory = async () => {
    try {
      // Send a GET request to check inventory status
      const response = await axios.get(
        "http://localhost:8080/smart-apperal/api/order/checkinventory"
      );
      if (response.data.isInventorySufficient) {
        // If inventory is sufficient, enable the register button and display success message
        setIsButtonDisabled(false); 
        setError("block");
        setErrorType("Inventory is sufficient");
      } else {
        // If inventory is insufficient, disable the register button and display error message
        setIsButtonDisabled(true); 
        setError("block");
        setErrorType("Inventory is insufficient");
      }
    } catch (error) {
      // If there is an error in the request, disable the register button and display error message
      setIsButtonDisabled(true); 
      setError("block");
      setErrorType("Error in checking inventory");
    }
  };

  return (
    <div>
      {/* Error component for displaying error messages */}
      <Error errorDisplay={error} errorMessage={errorType} />
      <div>
        {/* Button to trigger the inventory check */}
        <button id="checkBtn" onClick={handleCheckInventory}>
          Check Inventory
        </button>
      </div>
    </div>
  );
};

export default CheckInventory;
