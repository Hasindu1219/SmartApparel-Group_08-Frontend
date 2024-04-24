import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateExpense = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  console.log(id);

  // State variables to manage form inputs
  const [expenseCategory, setExpenseCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");

  // Function to fetch existing expense data by ID
  useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/expense/searchExpense/${id}`
        );

        const expenseData = response.data;

        console.log(expenseData);

        // Populate form fields with fetched expense data
        setExpenseCategory(expenseData.category);
        setDate(expenseData.date);
        setDescription(expenseData.description);
        setCurrency(expenseData.amount.toString());

        window.location.reload();
      } catch (error) {
        console.error("Error fetching expense data:", error);
        // Handle error fetching data (e.g., redirect to error page)
      }
    };

    // Call fetchExpenseData() when the component mounts with the correct 'id'
    fetchExpenseData();
  }, [id]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create updated expense object to send to backend
    const updatedExpenseData = {
      category: expenseCategory,
      date: date,
      description: description,
      amount: parseFloat(currency), // Assuming currency input represents amount
    };

    try {
      // Make POST request to update expense data
      const response = await axios.post(
        `http://localhost:8080/api/v1/expense/updateExpense/${id}`,
        updatedExpenseData
      );

      // Handle different response statuses
      if (response.status === 202) {
        // Successful response
        alert("Expense updated successfully.");
        navigate("/accounting/expensecontroller");
      } else if (response.status === 400) {
        // Duplicate or invalid request
        alert("Expense update failed: Invalid request.");
      } else {
        // Other failure cases
        alert("Error occurred while updating expense.");
      }
    } catch (error) {
      // Handle network or server errors
      alert("An error occurred while updating expense.");
      console.error("Expense update error:", error);
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
              <h2 style={{ marginLeft: "40px" }}>Expense Updating Form</h2>
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
                            <label>Currency</label>
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
                              Update
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

export default UpdateExpense;
