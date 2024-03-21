import React from 'react'
import Sidebar from '../components/Sidebar'
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar/Navbar";
import CustomerHome from "./CustomerPage/CustomerHome";


export default function Customers() {
  return (
    <>
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Customers</h1>
        <CustomerHome/>
        </Box>
      </Box>
    </>
  )
}
