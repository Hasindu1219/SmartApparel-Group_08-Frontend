import React, { useEffect, useState, useCallback } from 'react';
import { Box, Button } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../../components/HRManager/Navbar/Navbar';
import Sidebar from "../../components/HRManager/HRSidebar";
import EmployeeForm from '../../components/EmployeeComponent/EmployeeForm';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function HREmployeeUpdatePage() {
  const { Id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    empId: '',
    name: '',
    address: '',
    nic: '',
    position: '',
    email: '',
    password: '',
    phoneNumber: '',
    dateOfBirth: '',
    accountNumber: '',
    holderName: '',
    branchName: '',
    bankName: ''
  });

  const fetchEmployeeData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/employee/search/${Id}`);
      const fetchedEmployee = response.data.content;
      setEmployee(fetchedEmployee);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  }, [Id]);

  useEffect(() => {
    fetchEmployeeData();
  }, [fetchEmployeeData]);

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
            <Button onClick={() => { navigate("/HR/Employees") }}><ArrowBackIosNewIcon /></Button>
            Update Employee
          </Box>

          <EmployeeForm apiMethod="put" defaultFieldValues={employee} submitBtnName="Update" resetBtnName="Reset" />

        </Box>
      </Box>
    </>
  );
};

export default HREmployeeUpdatePage;
