import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import SalaryTable from "../../components/SalaryComponent/SalaryTable";
import SalaryParamAccordionTable from "../../components/SalaryComponent/SalaryParamAccordionTable";

export default function SalaryHomePage(){


    return (
        <>
            <Navbar/>
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <Sidebar/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Salary</h1>
                    <Box height={30} />
                    <SalaryParamAccordionTable/>
                    <SalaryTable/>
                </Box>
            </Box>
        </>
    );
}