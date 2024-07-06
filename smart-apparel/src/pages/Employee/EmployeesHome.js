import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Grid from "@mui/material/Grid";
import EmployeeTable from "../../components/EmployeeComponent/EmployeeTable";
import EmployeeCard from "../../components/EmployeeComponent/EmployeeCard";
import axios from "axios";

export default function EmployeesHome() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/employee/view')
      .then((response) => {
        const { data } = response;
        if (data && data.content) {
          setEmployees(data.content);
        } else {
          console.error('Invalid response format:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  },[]);

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
            <EmployeeCard title="Total Employees" value={employees.length} />
            {/* <EmployeeCard title="Present Employees" value={0} />
            <EmployeeCard title="Absant Employees" value={0} />
            <EmployeeCard title="Resigned Employees" value={0} /> */}
          </Grid>

          <Box height={30} />

          <EmployeeTable employees={employees}/>
          
        </Box>
      </Box>
    </>
  );
}
