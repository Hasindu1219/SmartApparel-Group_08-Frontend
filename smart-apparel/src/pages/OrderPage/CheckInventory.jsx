import React, { useState } from "react";
import axios from "axios";
import Error from "../../components/Error1/ErrorInventory";
import "./CheckInventory.css";

const CheckInventory = ({ setIsButtonDisabled }) => {
  const [error, setError] = useState("none");
  const [errorType, setErrorType] = useState("");

  const handleCheckInventory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/smart-apperal/api/order/checkinventory"
      );
      if (response.data.isInventorySufficient) {
        setIsButtonDisabled(false); // Enable the register button
        setError("block");
        setErrorType("Inventory is sufficient");
      } else {
        setIsButtonDisabled(true); // Disable the register button
        setError("block");
        setErrorType("Inventory is insufficient");
      }
    } catch (error) {
      setIsButtonDisabled(true); // Disable the register button on error
      setError("block");
      setErrorType("Error in checking inventory");
    }
  };

  return (
    <div>
      <Error errorDisplay={error} errorMessage={errorType} />
      <div>
        <button id="checkBtn" onClick={handleCheckInventory}>
          Check Inventory
        </button>
      </div>
    </div>
  );
};

export default CheckInventory;
