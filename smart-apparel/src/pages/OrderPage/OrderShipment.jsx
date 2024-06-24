import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error1 from "../../components/Error1/ErrorShipping";
import Error2 from "../../components/Error1/ErrorBill";
import "./OrderShipment.css";

function OrderShipment() {
  const [orderId, setOrderId] = useState("");
  const [isShipped, setIsShipped] = useState(false);
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);

  const errorMsg1 = "Order is not yet shipped or Invalid OrderId";
  const errorMsg2 = "Bill is not yet available for this order";

  const fetchOrderStatus = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/order/checkShipped/${orderId}`);
      if (response.data === true) {
        setIsShipped(true);
        setError1(null); 
      } else {
        setIsShipped(false);
        setError1(errorMsg1); 
      }
    } catch (error) {
      setIsShipped(false);
      setError1(errorMsg1); 
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
      setError2(errorMsg2); 
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
            {error1 && <Error1 errorDisplay="block" errorMessage={error1} />}
            {error2 && <Error2 errorDisplay="block" errorMessage={error2} />}
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
