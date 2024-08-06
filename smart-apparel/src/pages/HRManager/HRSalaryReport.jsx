import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/HRManager/HRSidebar";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DetailedSalaryReport from "../../components/Report/DetailedSalaryReport";
import "./styles.css";
import SalaryReport from "../../components/Report/SalaryReport";

export default function HRSalaryReport() {
  const navigate = useNavigate();

  return (
    <>
      <div className="hide-on-print">
        <Navbar />
      </div>
      <Box height={60} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Button to navigate back */}
        <div className="hide-on-print"><Sidebar /></div>
        <div className="container">
          <div className="card hide-on-print">
            <Box height={30} />
            <div
              className="card-title"
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "10px",
              }}
            >
              {/* Expense Listing title */}
              <button id="backBtnExpense" onClick={() => navigate("/PM/Report")}>
                <ArrowBackIcon />
              </button>
            </div>
          </div>
          <SalaryReport />
        </div>
      </Box>
    </>
  );
}
