import React from 'react'
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import GeneralArrivalFormAdd from "../components/EmployeeComponent/Form";

export default function Sales() {
  return (
    <>
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Sales</h1>
        {/* <GeneralArrivalFormAdd/> */}
        </Box>
      </Box>
    </>
  )
}
