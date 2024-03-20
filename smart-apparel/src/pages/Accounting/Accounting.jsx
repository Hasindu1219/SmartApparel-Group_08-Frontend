import React from "react";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../../components/Navbar/Navbar";

export default function Accounting() {
  return (
    <>
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Accounting</h1>
          <div className="AccountingBody">

            <div className="AccountingTiles">

              <div className="division">
                <h2>Accounting Body Left</h2>
              </div>

              <div className="division">
                <h2>Accounting Body Left</h2>
              </div>

              <div className="division">
                <h2>Accounting Body Right</h2>
              </div>

            </div>

          </div>
        </Box>
      </Box>
    </>
  );
}
