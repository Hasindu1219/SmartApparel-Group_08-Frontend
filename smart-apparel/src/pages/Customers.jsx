import React from 'react'
import Sidebar from '../components/Sidebar.js'
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar/Navbar";
import CustomerHome from "./CustomerPage/CustomerHome";

export default function Customers() {
  // Render Customers component
  return (
    <>
      {/* Navbar component */}
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        {/* Sidebar component */}
        <Sidebar />
        <div style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100vh" }}>
          {/* Title for Customers */}
          <h1
            style={{
              color: "#000435",
              marginTop: "6rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Customers
          </h1>
          {/* CustomerHome component */}
          <CustomerHome/>
        </div>
      </Box>
    </>
  )
}
