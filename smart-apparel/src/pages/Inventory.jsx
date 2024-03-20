import React from 'react'
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import BasicCard from "../components/Card"
import Card1 from '../components/Card1/Card1';

export default function Inventory() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Inventory</h1>
        <div>
          <BasicCard/>
          <Card1/>
        </div>
        </Box>
      </Box>
    </>
  )
}
