import React from 'react'
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Card1 from '../components/Card1/Card1';
import FirstPage from './InventoryPage/FirstPage';

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
