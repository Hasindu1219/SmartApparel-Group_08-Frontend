import React from "react";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import BasicGrid from "../../components/Accounting/AccountingTilesGrid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import HomePage from "./HomePage/HomePage";



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
