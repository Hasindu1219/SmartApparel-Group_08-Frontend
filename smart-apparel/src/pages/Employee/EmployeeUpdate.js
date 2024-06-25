import React, { useEffect, useState } from 'react';
import { Box, Button} from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import EmployeeForm from '../../components/EmployeeComponent/EmployeeForm';

function EmployeeUpdatePage() {
  
  const { Id } = useParams();
  const navigate = useNavigate();


  // State for employee data and error messages
  const [employee, setEmployee] = useState({
    empId: '',
    name: '',
    address: '',
    nic: '',
    position: '',
    email: '',
    password: '',
    phoneNumber: '',
    dob: '',
    accNumber: '',
    holderName: '',
    branchName: '',
    bankName: ''
  });

  // const [errors, setErrors] = useState({});

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/employee/search/${Id}`);
      const fetchedEmployee = response.data.content;
      setEmployee(fetchedEmployee);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, [Id]);

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.put("http://localhost:8080/employee/update", employee);

  //     if (response.status === 202) {
  //       alert("Employee updated successfully.");
  //       navigate("/employees");
  //     } else {
  //       alert("Error occurred while updating employee.");
  //     }
  //   } catch (error) {
  //     alert("An error occurred while updating employee.");
  //     console.error("Employee update error:", error);
  //   }
  // };

  // const handleReset = () => {

  //   fetchEmployeeData();

  //   setErrors({});
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEmployee((prevEmployee) => ({
  //     ...prevEmployee,
  //     [name]: value
  //   }));
  // };


  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box style={{ fontSize: "2em", fontWeight: "Bold", margin: "10px" }}>
            <Button variant='outlined' onClick={() => { navigate('/employees') }}>Back</Button>
            Update Employee
          </Box>

          <EmployeeForm apiMethod="put" defaultFieldValues={employee} submitBtnName="Update" resetBtnName="Reset"/>

          {/* Render form fields */}
          {/* {Object.keys(employee).map((field) => (
            <Grid key={field} item sx={{ display: 'flex' }}>
              <Typography component={'label'} htmlFor={field} sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '150px', display: 'block' }}>
                {field === 'empId' ? 'Employee ID' : field}
              </Typography>
              <Input
                type="text"
                name={field}
                id={field}
                sx={{ width: '400px' }}
                value={employee[field]}
                onChange={handleChange}
              />
              <Typography sx={{ color: 'red' }}>{errors[field]}</Typography>
            </Grid>
          ))}

          <Grid>
            <Button
              sx={{ margin: 'auto', backgroundColor: '#00c6e6', color: '#000000', marginLeft: '15px', marginTop: '20px', '&:hover': { Opacity: '0.7', backgroundColor: '#00c6e6' } }}
              onClick={handleSubmit}
            >
              Update
            </Button>
            <Button
              sx={{ margin: 'auto', backgroundColor: '#00c6e6', color: '#000000', marginLeft: '15px', marginTop: '20px', '&:hover': { Opacity: '0.7', backgroundColor: '#00c6e6' } }}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Grid>*/}


        </Box>
      </Box>


    </>
  );
};

export default EmployeeUpdatePage;
