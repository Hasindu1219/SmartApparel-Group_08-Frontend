import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import Search from "./Search";

export default function CustomerUpdate() {
  return (
    <>
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Update Customer</h1>
        <Search />
        </Box>
      </Box>
    </>
  )
}
