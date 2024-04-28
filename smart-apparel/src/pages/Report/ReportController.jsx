import React from "react";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";


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

          <Box height={30} />

          <div className="firstPageContainer">
            <div className="Inventory_Page">
              <div className="Bottons" float="left">
                <div className="Bottons">
                  <Link to="/report/reportStructure" className="btns">
                    <p className="Task">Profit & Loss</p>
                  </Link>
                </div>

                <div className="Bottons">
                  <Link to="" className="btns">
                    <p className="Task"></p>
                  </Link>
                </div>

                <div className="Bottons">
                  <Link to="" className="btns">
                    <p className="Task"></p>
                  </Link>
                </div>
              </div>
              {/* <LineChart /> */}
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
