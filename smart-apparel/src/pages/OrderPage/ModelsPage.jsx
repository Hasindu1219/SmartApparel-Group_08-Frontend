import React from "react";
import Sidebar from "../../components/Sidebar.js";
import { Box, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MainModels from "../OrderPage/MainModels";

export default function ModelsPage() {
  const navigate = useNavigate();
  // Render Model component
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100%" }}
        >
          <h1
            style={{
              color: "#000435",
              marginTop: "5rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Order Models
            <Button onClick={() => { navigate('/orders') }}> <ArrowBackIosNewIcon/> </Button>

          </h1>
          <MainModels />
        </div>
      </Box>
    </>
  );
}
