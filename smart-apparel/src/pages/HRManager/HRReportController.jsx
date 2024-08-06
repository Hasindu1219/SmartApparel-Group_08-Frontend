import React from "react";
import Sidebar from "../../components/HRManager/HRSidebar";
import Box from "@mui/material/Box";
import Navbar from "../../components/HRManager/Navbar/Navbar";
import ReportCard from "../../components/Report/ReportCard";
import ReportImage from "../../Assets/report.png";

export default function HRReportController() {
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
                <div style={{ margin: "40px" }}>
                  <ReportCard
                    image={ReportImage}
                    title="P/L Report"
                    content="Financial report that summarizes a company's revenues and expenses over a specific period of time"
                    url="Report/ProfitandLoss"
                  />
                </div>
                <div style={{ margin: "40px" }}>
                  <ReportCard
                    image={ReportImage}
                    title="Salary Report"
                    content="This report provides a detailed overview of the salary disbursements for the employees of Smart Apparel International (PVT) LTD."
                    url="Report/SalaryReport"
                  />
                </div>
                <div style={{ margin: "40px" }}>
                  <ReportCard
                    image={ReportImage}
                    title="Detailed Salary Report"
                    content="The Detailed Salary Report provides a comprehensive overview of the salary payments made to employees."
                    url="Report/DetailedSalaryReport"
                  />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
