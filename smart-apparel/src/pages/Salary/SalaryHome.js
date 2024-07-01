import React from "react";
import { Box, Button } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import SalaryTable from "../../components/SalaryComponent/SalaryTable";
import { useNavigate } from "react-router-dom";

export default function SalaryHome() {
    const navigate= useNavigate();

    return (
        <>
            <Navbar />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Salary</h1>
                    <SalaryTable />
                    <Button variant="contained" onClick={()=>{navigate("/salary/param")}}>Salary Parameters {">"} </Button>
                    
                </Box>
            </Box>
        </>
    );
}