import React from "react";
import Sidebar from "../../components/Sidebar.js";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import "./OrderHome.css";
import OrderHomeImage from "../../Images/OrderHome.jpg";
import { Link } from "react-router-dom";

export default function LineSupervisorOrderHome() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100vh" }}
        >
          <h1
            style={{
              color: "#000435",
              marginTop: "5rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Orders (Line Supervisor)
          </h1>

          <div>
            <div className="CustomeHomePage">
              <div className="Botton">
                {/* Link to Order Details page */}
                <Link to={`/linesupervisororderdetails`}>
                  <button className="btn1">
                    <p className="Task1">Order Details</p>
                  </button>
                </Link>

                {/* Link to Order Covered Amount page */}
                <Link to={`/linesupervisorordercoveredamount`}>
                  <button className="btn1">
                    <p className="Task1">Order Covered Amount</p>
                  </button>
                </Link>
              </div>

              {/* Container for the home page image */}
              <div className="Frame">
                <img src={OrderHomeImage} alt="OrderHome" className="Image" />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
