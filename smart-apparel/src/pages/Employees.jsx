import React from 'react'
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar";


export default function Employees() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Employees</h1>
        </Box>
      </Box>
    </>
  )
}
