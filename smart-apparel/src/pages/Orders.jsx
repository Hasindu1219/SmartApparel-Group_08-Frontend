import React from 'react'
import Sidebar from '../components/Sidebar.js'
import Box from '@mui/material/Box'
import Navbar from "../components/Navbar/Navbar"
import OrderHome from "./OrderPage/OrderHome"

export default function Orders() {
  // Render Orders component
  return (
    <>
      {/* Navbar component */}
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        {/* Sidebar component */}
        <Sidebar />
        <div style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100vh" }}>
          {/* Title for Orders */}
          <h1
            style={{
              color: "#000435",
              marginTop: "5rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Orders
          </h1>
          {/* OrderHome component */}
          <OrderHome/>
        </div>
      </Box>
    </>
  )
}
