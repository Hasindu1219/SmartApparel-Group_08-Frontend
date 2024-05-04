import React from 'react'
import Sidebar from '../../components/Sidebar.js'
import Box from '@mui/material/Box'
import Navbar from '../../components/Navbar/Navbar.jsx'
import MainModels from '../OrderPage/MainModels'

export default function ModelsPage() {
  // Render Model component
  return (
    <>
      {/* Navbar component */}
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        {/* Sidebar component */}
        <Sidebar />
        <div style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100%" }}>
          {/* Title for Orders */}
          <h1
            style={{
              color: "#000435",
              marginTop: "5rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Order Models
          </h1>
          <MainModels/>
        </div>
      </Box>
    </>
  )
}
