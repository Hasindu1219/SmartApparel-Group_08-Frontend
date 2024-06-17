import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CustomerStatus.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";

export default function CustomerStatus() {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);

  const [error, setError] = useState("none");

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
      setOrderStatus("Invalid Order ID");
      setError("Invalid Order ID");
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
          </h1>
          <div>
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
