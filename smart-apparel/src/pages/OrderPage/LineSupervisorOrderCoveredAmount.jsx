import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar.js";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error1/ErrorId";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./LineSupervisorOrderCoveredAmount.css";

export default function LineSupervisorOrderCoveredAmount() {
  // State variables
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [isOrderValid, setIsOrderValid] = useState(false);

  // State variables for error
  const [error, setError] = useState(null);
  const errorMsg = ["Invalid Order ID"];

  // Handle input change and update the orderId state
  const handleSearchBtn = (event) => {
    setOrderId(event.target.value);
  };

  const fetchOrderId = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:8080/order/viewOrder/${orderId}`
      );
      // Assuming the response indicates a valid order ID
      if (res.data && res.data.content) {
        setIsOrderValid(true);
        setError(null);
      } else {
        setIsOrderValid(false);
        setError("Invalid Order ID");
      }
    } catch (error) {
      setIsOrderValid(false);
      setError("Invalid Order ID");
    }
  };

  const handleUpdateBtn = () => {
    navigate("/linesupervisorcoveredamountform", { state: { orderId } });
  };

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100vh" }}
        >
          <h1
            style={{
              color: "#000435",
              marginTop: "5rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Order Covered Amount
            <Button onClick={() => { navigate('/orders') }}> <ArrowBackIosNewIcon/> </Button>
          </h1>
          <div>
            {error && <Error errorDisplay="block" errorMessage={error} />}
            {/* Error component */}
            <div className="App">
              <form onSubmit={fetchOrderId}>
                <input
                  type="text"
                  value={orderId}
                  onChange={handleSearchBtn}
                  placeholder="Enter Order ID"
                />
                <button id="searchBtn" type="submit">
                  Search
                </button>
              </form>

              <button
                id="updateBtn"
                disabled={!isOrderValid} // Disable button if order is not valid
                onClick={handleUpdateBtn}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
