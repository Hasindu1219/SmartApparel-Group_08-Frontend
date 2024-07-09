import React, { useState } from "react";
import axios from "axios";
import "./CustomerStatus.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error from "../../components/Error1/ErrorId";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function CustomerStatus() {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);

  const [error, setError] = useState(null);
  const [errorType, setErrorType] = useState("none");
  const errorMsg = ["Invalid Order ID"];

  const handleInputChange = (event) => {
    setOrderId(event.target.value);
  };

  const fetchOrderStatus = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:8080/order/viewOrder/${orderId}`
      );
      setOrderStatus(res.data.content.orderStatus);
      setError(null);
    } catch (error) {
      setOrderStatus(errorMsg);
      setError(errorMsg);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="formBodyContainer">
        <Sidebar />
        <div
          style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100vh" }}
        >
          <h1
            style={{
              color: "black",
              marginTop: "6rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Customer Status
            <Button onClick={() => { navigate('/customers') }}> <ArrowBackIosNewIcon/> </Button>
          </h1>
          <div>
          {error && <Error errorDisplay="block" errorMessage={error} />}
            <div className="App">
              <form onSubmit={fetchOrderStatus}>
                <input
                  type="text"
                  value={orderId}
                  onChange={handleInputChange}
                  placeholder="Enter Order ID"
                />
                <button id="searchBtn" type="submit">
                  Search
                </button>
              </form>
              <div id="statusBox">Order Status: {orderStatus}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
