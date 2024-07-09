import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error from "../../components/Error1/ErrorShipping";
import "./OrderShipment.css";

function OrderShipment() {
  const [orderId, setOrderId] = useState("");
  const [isShipped, setIsShipped] = useState(false);
  const [error, setError] = useState(null);

  const errorMsg = "Order is not yet shipped or Invalid OrderId";

  const fetchOrderStatus = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/order/checkShipped/${orderId}`);
      if (response.data === true) {
        setIsShipped(true);
        setError(null); 
      } else {
        setIsShipped(false);
        setError(errorMsg); 
      }
    } catch (error) {
      setIsShipped(false);
      setError(errorMsg); 
    }
  };

  const generateBill = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/order/generateBill/${orderId}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'bill.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      setError("Error downloading the bill"); 
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
            {error && <Error errorDisplay="block" errorMessage={error} />} {/* Display error message if it exists */}
            <div className="App">
              <form onSubmit={fetchOrderStatus}>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter Order ID"
                />
                <button id="searchBtn" type="submit">
                  Search
                </button>
              </form>
              <button
                id="billBtn"
                onClick={generateBill}
                disabled={!isShipped} 
              >
                Generate Bill
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderShipment;
