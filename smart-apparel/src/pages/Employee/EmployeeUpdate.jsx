import React, { useEffect, useState } from 'react';
import { Button, Grid, Input, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeUpdatePage = () => {
  const navigate = useNavigate();
  const { Id } = useParams();

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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/employee/search/${Id}`);
        const fetchedEmployee = response.data.content;

        setEmployee(fetchedEmployee);

      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployeeData();
  }, [Id]);

  const handleSubmit = async () => {
    try {
      const response = await axios.put("http://localhost:8080/employee/update", employee);

      if (response.status === 202) {
        alert("Employee updated successfully.");
        navigate("/employees");
      } else {
        alert("Error occurred while updating employee.");
      }
    } catch (error) {
      alert("An error occurred while updating employee.");
      console.error("Employee update error:", error);
    }
  };

  const handleReset = () => {
    // Reset employee data to original state
    setEmployee({
      ...employee,
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

    // Clear all error messages
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };


  return (
    <>
      <Grid>
        <Button onClick={() => navigate('/employees')}>Back</Button>
      </Grid>

      <Grid container spacing={2} sx={{ backgroundColor: '#EEEEEE', margin: '100px', display: 'block' }}>
        <Grid>
          <Typography component={'h1'} sx={{ color: '#000000', fontSize: '30px', textAlign: 'center' }}>Update Employee</Typography>
        </Grid>

        {/* Render form fields */}
        {Object.keys(employee).map((field) => (
          <Grid key={field} item sx={{ display: 'flex' }}>
            <Typography component={'label'} htmlFor={field} sx={{ color: '#000000', marginLeft: '20px', fontSize: '16px', width: '100px', display: 'block' }}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeeUpdatePage;
