import React from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar/Navbar";

export default function Overview() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>
        </Box>
      </Box>
    </>
  );
}
