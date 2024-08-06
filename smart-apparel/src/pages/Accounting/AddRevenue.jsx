import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Revenue.css";

const RevenueAdd = () => {
  const navigate = useNavigate();

  // State variables to manage form inputs
  const [chequeId, setChequeId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");
  const [completedOrderIds, setCompletedOrderIds] = useState([]);
  const [excludedOrderIds, setExcludedOrderIds] = useState([]);

  // Function to fetch completed order IDs from the API
  const fetchCompletedOrderIds = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/order/completedOrderId"
      );

      if (response.data && response.data.content) {
        console.log("Completed Order IDs:", response.data.content); // Debugging log
        setCompletedOrderIds(response.data.content);
      }

    } catch (error) {
      console.error("Error fetching completed order IDs:", error);
    }
  };

  // Function to fetch order details based on selected order ID
  const fetchOrderDetails = async (orderId) => {
    try {
      const response = await axios.get(`http://localhost:8080/order/viewOrder/${orderId}`);

      if (response.data && response.data.content) {
        const { largeSize, mediumSize, smallSize, orderAgreedPrice } = response.data.content;
        const amount = (largeSize + mediumSize + smallSize) * orderAgreedPrice;
        setCurrency(amount.toFixed(2)); // Set the calculated amount to the currency field
      }

    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  // Function to fetch revenue data and get excluded order IDs
  const fetchRevenueData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/revenue/viewRevenue");

      if (response.data && response.data.content) {
        const orderIds = response.data.content.map(revenue => revenue.order_Id);
        console.log("Excluded Order IDs:", orderIds); // Debugging log
        setExcludedOrderIds(orderIds);
      }

    } catch (error) {
      console.error("Error fetching revenue data:", error);
    }
  };

  // Use useEffect to fetch completed order IDs and revenue data when the component mounts
  useEffect(() => {
    fetchCompletedOrderIds();
    fetchRevenueData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create revenue data object to send to backend
    const revenueData = {
      order_Id: orderId,
      cheque_Id: chequeId,
      date: date,
      description: description,
      status: "Pending",
      amount: parseFloat(currency), // Assuming currency input represents amount
    };

    try {
      console.log("Revenue data:", revenueData);
      // Make POST request to backend API
      const response = await axios.post(
        "http://localhost:8080/api/v1/revenue/saveRevenue",
        revenueData
      );

      // Handle response statuses
      if (response.status === 202) {
        // Successful response
        alert("Revenue saved successfully.");
        navigate("/accounting/revenuecontroller");
      } else if (response.status === 400) {
        // Duplicate or invalid request
        alert("Expense already registered or invalid request.");
      } else {
        // Other failure cases
        alert("Error occurred while saving revenue.");
      }
    } catch (error) {
      // Handle network or server errors
      alert("An error occurred while saving revenue.");
      console.error("Revenue save error:", error);
    }
  };

  // Filtered order IDs for the dropdown
  const filteredOrderIds = completedOrderIds.filter(orderId => !excludedOrderIds.includes(orderId.toString()));

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#d7e3fc",
          alignItems: "center",
        }}
      >
        <Sidebar />
        <div className="container">
          <div className="card" style={{ backgroundColor: "#d7e3fc" }}>
            <Box height={30} />
            <div
              className="card-title"
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "10px",
              }}
            >
              <button
                id="backBtnExpense"
                onClick={() => navigate("/accounting/revenuecontroller")}
              >
                <ArrowBackIcon />
              </button>
              <h2 style={{ marginLeft: "40px" }}>Sales Adding Form</h2>
            </div>
            <div className="row">
              <div className="offset-lg-2 col-lg-8">
                <form className="container revenue-form" onSubmit={handleSubmit}>
                  <div style={{ textAlign: "left" }}>
                    <div className="card-body">
                      <div className="row">

                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="categorySelect">Order Id</label>
                            <select
                              required
                              id="orderId"
                              className="form-control"
                              value={orderId}
                              onChange={(e) => {
                                setOrderId(e.target.value);
                                fetchOrderDetails(e.target.value); // Fetch order details when an order ID is selected
                              }}
                            >
                              <option value="">Select an order ID...</option>
                              {filteredOrderIds.map((orderId) => (
                                <option key={orderId} value={orderId}>
                                  {orderId}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Cheque Id</label>
                            <input
                              type="text"
                              required
                              value={chequeId}
                              onChange={(e) => setChequeId(e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Date</label>
                            <input
                              type="date"
                              required
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Description</label>
                            <input
                              type="text"
                              required
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Amount(Rs.)</label>
                            <input
                              type="text"
                              required
                              value={currency}
                              readOnly // Make this field read-only as it is calculated
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div
                            className="form-group"
                            style={{ textAlign: "center" }}
                          >
                            <button id="updateBtnExpense" type="submit">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default RevenueAdd;
