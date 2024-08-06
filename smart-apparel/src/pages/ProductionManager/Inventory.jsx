import React from 'react'
import Box from "@mui/material/Box";
import Sidebar from "../../components/ProductionManager/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import FirstPage from '../ProductionManager/FirstPage';

export default function Inventory() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Inventory</h1>
        <div>
          {/* <Card1/> */}
          <FirstPage/>
        </div>
        </Box>
      </Box>
    </>
  )
}
