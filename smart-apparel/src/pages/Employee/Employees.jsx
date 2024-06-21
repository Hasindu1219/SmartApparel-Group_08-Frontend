import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Grid from "@mui/material/Grid";
import EmployeeTable4 from "../../components/EmployeeComponent/EmployeeTable4";
import EmployeeCard from "../../components/EmployeeComponent/EmployeeCard";

export default function Employees() {

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1>Employees</h1>

          {/* Cards */}
          <Grid container spacing={2}>
            <EmployeeCard title="Total Employees" value={0} />
            <EmployeeCard title="Present Employees" value={0} />
            <EmployeeCard title="Absant Employees" value={0} />
            <EmployeeCard title="Resigned Employees" value={0} />
          </Grid>

          <Box height={30} />

          <EmployeeTable4 />
          
        </Box>
      </Box>
    </>
  );
}
