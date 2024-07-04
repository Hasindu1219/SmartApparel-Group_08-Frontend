import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateExpense = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [expenseCategory, setExpenseCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/expense/searchExpense/${id}`
        );

        const expenseData = response.data.content;

        setExpenseCategory(expenseData.category);
        setDate(expenseData.date);
        setDescription(expenseData.description);
        setCurrency(String(expenseData.amount)); // Convert amount to string

      } catch (error) {
        console.error("Error fetching expense data:", error);
      }
    };

    fetchExpenseData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedExpenseData = {
      expense_ID: id,
      category: expenseCategory,
      date: date,
      description: description,
      amount: parseFloat(currency),
    };

    try {
      const response = await axios.put(
        "http://localhost:8080/api/v1/expense/updateExpense",
        updatedExpenseData
      );

      if (response.status === 202) {
        alert("Expense updated successfully.");
        navigate("/accounting/expensecontroller");
      } else {
        alert("Error occurred while updating expense.");
      }
    } catch (error) {
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
                              type="number"
                              step="0.01"
                              required
                              value={currency}
                              onChange={(e) => setCurrency(e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group" style={{ textAlign: "center" }}>
                            <button id="updateBtnExpense" type="submit">
                              Update Expense
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
