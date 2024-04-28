import React from "react";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import BasicGrid from "../../components/Accounting/AccountingTilesGrid";
import HomePage from "../../components/Accounting/HomePage/HomePage";



export default function Accounting() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 , backgroundColor: "#d7e3fc"}}>
          <h1>Accounting</h1>
          <BasicGrid />

          <Box height={30} />

          <HomePage />

        </Box>
      </Box>

    </>
  );
}
