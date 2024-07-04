import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ExpenseAdd = () => {
  const navigate = useNavigate();

  // State variables to manage form inputs
  const [expenseCategory, setExpenseCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create expense object to send to backend
    const expenseData = {
      category: expenseCategory,
      date: date,
      description: description,
      amount: parseFloat(currency), // Assuming currency input represents amount
    };

    try {
      // Make POST request to backend API
      console.log(expenseData);
      const response = await axios.post(
        "http://localhost:8080/api/v1/expense/saveExpense",
        expenseData
      );

      // Handle different response statuses
      if (response.status === 202) {
        // Successful response
        alert("Expense saved successfully.");
        navigate("/accounting/expensecontroller");
      } else if (response.status === 400) {
        // Duplicate or invalid request
        alert("Expense already registered or invalid request.");
      } else {
        // Other failure cases
        alert("Error occurred while saving expense.");
      }
    } catch (error) {
      // Handle network or server errors
      alert("An error occurred while saving expense.");
      console.error("Expense save error:", error);
    }
  };

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
                onClick={() => navigate("/accounting/expensecontroller")}
              >
                <ArrowBackIcon />
              </button>
              <h2 style={{ marginLeft: "40px" }}>Expense Adding Form</h2>
            </div>
            <div className="row">
              <div className="offset-lg-2 col-lg-8">
                <form className="container" onSubmit={handleSubmit}>
                  <div style={{ textAlign: "left" }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="categorySelect">Category</label>
                            <select
                              required
                              id="categorySelect"
                              className="form-control"
                              value={expenseCategory}
                              onChange={(e) =>
                                setExpenseCategory(e.target.value)
                              }
                            >
                              <option value="">Select a category...</option>
                              <option value="Electricity">Electricity</option>
                              <option value="Water">Water</option>
                              <option value="Other">Other</option>
                            </select>
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
                              type="textarea"
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
                              onChange={(e) => setCurrency(e.target.value)}
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

export default ExpenseAdd;
