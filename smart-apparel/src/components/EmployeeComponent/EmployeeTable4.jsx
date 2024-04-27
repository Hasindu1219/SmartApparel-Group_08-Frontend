import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeTable = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/employee/view')
      .then((response) => {
        const { data } = response;
        if (data && data.content) {
          setEmployees(data.content);
          console.log(employees.name);
        } else {
          console.error('Invalid response format:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const updateEmployee = (id) => {
    navigate(`/employee/updateemployee/${id}`);
  };

  const handleDelete = (empId) => {

    // Check if id is logged correctly
    console.log("Removing Employee with ID:", empId); 

    if (window.confirm("Are you sure you want to delete this Employee?")) {
      axios.delete(`http://localhost:8080/employee/delete/${empId}`)
        .then((response) => {
          if (response.status === 202) {
            alert("Removed successfully.");
          } else {
            throw new Error("Failed to remove Employee.");
          }
        })
        .catch((error) => {
          console.error("Error removing Employee", error.message);
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

        <Grid item sx={{ display: 'inline-flex',marginBottom: '1rem' }}>
          <Button onClick={()=>{navigate('/employee/addemployee')}} >Add new Employee</Button>

          <TextField
            label="Search by Employee ID"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{marginLeft:'800px' }}
          />
        </Grid>

        <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
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

              {employees.length > 0 ? (
                employees.map((employee) => (
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
                      <Button sx={{ margin: '0px 10px' }} onClick={() => updateEmployee(employee.empId)}> 
                        Update
                      </Button>
                      <Button sx={{ margin: '0px 10px' }} onClick={() => handleDelete(employee.empId)}>
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
