import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error from "../../components/Error1/ErrorId";
import "./OrderShipment.css";

function OrderShipment() {
  const [orderId, setOrderId] = useState("");
  const [isOrderValid, setIsOrderValid] = useState(false);
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
      if (response.data.exists) {
        setIsOrderValid(true);
        setError("none");
      } else {
        setIsOrderValid(false);
        setError("block");
        setErrorType(errorMsg[0]);
      }
    } catch (err) {
      console.error(err);
      setIsOrderValid(false);
      setError("block");
      setErrorType("Server error. Please try again later.");
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
            Order Shipment
          </h1>
          <div>
            <Error errorDisplay={error} errorMessage={errorType} />
            <div className="App">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={orderId}
                  onChange={handleInputChange}
                  placeholder="Enter Order ID"
                />
                <button id="searchBtn" type="submit">Search</button>
              </form>
              <button
                id="billBtn"
                disabled={!isOrderValid}
                onClick={() => alert("Bill Generated")}
              >
                Generate Bill       
                {/* When click this download the relevant bill */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderShipment;

