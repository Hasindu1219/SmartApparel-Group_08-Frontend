import React from 'react'
import EmployeeForm from '../../components/EmployeeComponent/EmployeeForm'
import Navbar from '../../components/HRManager/Navbar/Navbar'
import { Box, Button } from '@mui/material'
import Sidebar from "../../components/HRManager/HRSidebar";
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function HREmployeeAdd() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
            <Button onClick={() => { navigate("/HR/Employees") }}><ArrowBackIosNewIcon /></Button>
            Add Employee
          </Box>

          <EmployeeForm submitBtnName="Add" resetBtnName="Clear" apiMethod="post" />

        </Box>
      </Box>
    </>
  )
}