import React from "react";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import ReportCard from "../../components/Report/ReportCard";
import ReportImage from "../../Assets/report.png";

export default function ReportController() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, backgroundColor: "#d7e3fc" }}
        >
          <h1>Reports</h1>
          
          <div class="container">
            <div class="row">
              <div class="d-flex justify-content-between">
                    <div style={{ margin: '40px' }}>
                        <ReportCard 
                        image={ReportImage} 
                        title="P/L Report" 
                        content="Financial report that summarizes a company's revenues and expenses over a specific period of time"
                        url="/report/ProfitandLoss" />
                    </div>
                    <div style={{ margin: '40px' }}>
                        <ReportCard image={ReportImage} 
                        title="Salary Report" 
                        content="" 
                        url=""/>
                    </div>
                    <div style={{ margin: '40px' }}>
                        <ReportCard image={ReportImage} 
                        title="Detailed Salary Report" 
                        content="" 
                        url=""/>
                    </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
