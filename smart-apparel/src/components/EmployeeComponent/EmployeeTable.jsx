import React, { useState } from 'react';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EmployeeTable({ employees }) {

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');


  const updateEmployee = (id) => {
    navigate(`/employee/updateemployee/${id}`);
  };

  const handleDelete = (empId) => {
    // Check if id is logged correctly
    // console.log("Removing Employee with ID:", empId);

    if (window.confirm("Are you sure you want to delete this Employee?")) {
      axios.delete(`http://localhost:8080/employee/delete/${empId}`)
        .then((response) => {
          if (response.status === 202) {
            alert("Deleted successfully.");
          } else {
            throw new Error("Failed to Delete Employee.");
          }
        })
        .catch((error) => {
          console.error("Error Deleting Employee", error.message);
        });
      window.location.reload();
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmployees = employees.filter(employee => employee.empId.includes(searchQuery));

  return (
    <div>

      <Grid container justifyContent="space-between" alignItems="center" style={{ marginBottom: '1rem' }}>
        <Button variant="contained" style={{fontWeight:"bold"}} onClick={() => { navigate('/employee/addemployee') }} >Add new Employee</Button>

        <TextField
          label="Search by Employee ID"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Grid>

      <TableContainer component={Paper} container justifyContent="space-between" style={{ marginBottom: '1rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>NIC</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>Bank Account Number</TableCell>
              <TableCell>Holder Name</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell>Bank</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <TableRow key={employee.empId}>
                  <TableCell>{employee.empId}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.address}</TableCell>
                  <TableCell>{employee.nic}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.password}</TableCell>
                  <TableCell>{employee.phoneNumber}</TableCell>
                  <TableCell>{employee.dateOfBirth}</TableCell>
                  <TableCell>{employee.accountNumber}</TableCell>
                  <TableCell>{employee.holderName}</TableCell>
                  <TableCell>{employee.branchName}</TableCell>
                  <TableCell>{employee.bankName}</TableCell>
                  <TableCell>
                    <Button size='small' color="primary" variant='outlined' sx={{fontWeight:"bold"}} onClick={() => updateEmployee(employee.empId)}>
                      Update
                    </Button>
                    <Button size='small' color="error" variant='outlined' sx={{fontWeight:"bold"}} onClick={() => handleDelete(employee.empId)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={14} align="center">
                  No Data
                </TableCell>
              </TableRow>
            )}
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeeTable;
