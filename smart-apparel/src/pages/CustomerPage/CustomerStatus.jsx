import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CustomerStatus.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error from "../../components/Error1/ErrorId";

export default function CustomerStatus() {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const [validOrderIds, setValidOrderIds] = useState([]);

  const [error, setError] = useState("none");
  const [errorType, setErrorType] = useState("none");
  const errorMsg = ["Invalid Order ID"];

  useEffect(() => { 
    const fetchValidOrderIds = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/smart-apperal/api/orders/orderId"
        );
        setValidOrderIds(response.data);
      } catch (error) {
        console.error("Error fetching valid order IDs:", error);
      }
    };

    fetchValidOrderIds();
  }, []);

  const handleInputChange = (event) => {
    setOrderId(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/api/orders/${orderId}`);
      if (response.data && response.data.status) {
        setOrderStatus(response.data.status);
        setError(null);
      } else {
        setOrderStatus(null);
        setError("Invalid Order ID");
        setErrorType(errorMsg[0]);
      }
    } catch (err) {
      setOrderStatus(null);
      setError("Invalid Order ID");
      setErrorType(errorMsg[0]);
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
            <Error errorDisplay={error} errorMsg={errorType} />
            <div className="App">
              <form onSubmit={handleSearch}>
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
              <div id="statusBox">
                Order Status: {orderStatus}
                {error}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
