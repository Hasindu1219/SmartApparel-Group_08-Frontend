import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/AccountingManager/Navbar/Navbar";
import Sidebar from "../../components/AccountingManager/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProfitLossReport from "../../components/Report/ProfitLossReport";
import "./styles.css";

export default function ProfitandLossReport() {
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
              <button id="backBtnExpense" onClick={() => navigate("/AM/Report")}>
                <ArrowBackIcon />
              </button>
            </div>
          </div>
          <ProfitLossReport />
        </div>
      </Box>
    </>
  );
}
