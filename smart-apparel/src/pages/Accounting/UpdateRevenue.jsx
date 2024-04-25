import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateRevenue = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [revenueCategory, setRevenueCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/revenue/searchRevenue/${id}`
        );

        const revenueData = response.data.content;

        setRevenueCategory(revenueData.category);
        console.log(revenueData.category);
        setDate(revenueData.date);
        setDescription(revenueData.description);
        setCurrency(String(revenueData.amount)); // Convert amount to string

      } catch (error) {
        console.error("Error fetching expense data:", error);
      }
    };

    fetchRevenueData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedRevenueData = {
      revenue_ID: id,
      category: revenueCategory,
      date: date,
      description: description,
      amount: parseFloat(currency),
    };

    try {
      const response = await axios.put(
        "http://localhost:8080/api/v1/revenue/updateRevenue",
        updatedRevenueData
      );

      if (response.status === 202) {
        alert("Revenue updated successfully.");
        navigate("/accounting/revenuecontroller");
      } else {
        alert("Error occurred while updating revenue.");
      }
    } catch (error) {
      alert("An error occurred while updating revenue.");
      console.error("Revenue update error:", error);
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
                onClick={() => navigate("/accounting/revenuecontroller")}
              >
                <ArrowBackIcon />
              </button>
              <h2 style={{ marginLeft: "40px" }}>Revenue Updating Form</h2>
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
                              value={revenueCategory}
                              onChange={(e) =>
                                setRevenueCategory(e.target.value)
                              }
                            >
                              <option value="">Select a category...</option>
                              <option value="Sales Income">Sales Income</option>
                              <option value="Rent Income">Rent Income</option>
                              <option value="Other Income">Other Income</option>
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
                            <label>Amount (Currency)</label>
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
                              Update Revenue
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

export default UpdateRevenue;
