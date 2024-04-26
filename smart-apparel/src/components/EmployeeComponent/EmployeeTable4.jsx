import React, { useEffect, useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeTable = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  // const EmployeesList ={
  // empId: "emp001",
  // name: "Michael Johnson",
  // address: "789 Oak Avenue",
  // nic: "543216789Z",
  // position: "sales associate",
  // email: "michael@example.com",
  // password: "securepassword",
  // phoneNumber: "+9551234567",
  // dateOfBirth: "1988-09-20",
  // accountNumber: "1357924680",
  // holderName: "Michael Johnson",
  // branchName: "West Branch",
  // bankName: "Test Bank"
  // }

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
    navigate(`/accounting/updateexpense/${id}`);
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

  return (
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
          
        {/* ======= Dummy 
          <TableRow>
              <TableCell component={'th'}>emp001</TableCell>
              <TableCell component={'th'}>Michael Johnson</TableCell>
              <TableCell>789 Oak Avenue</TableCell>
              <TableCell>543216789Z</TableCell>
              <TableCell>sales associate</TableCell>
              <TableCell>michael@example.com</TableCell>
              <TableCell>securepassword</TableCell>
              <TableCell>+9551234567</TableCell>
              <TableCell>1988-09-20</TableCell>
              <TableCell>1357924680</TableCell>
              <TableCell>Michael Johnson</TableCell>
              <TableCell>West Branch</TableCell>
              <TableCell>Test Bank</TableCell>
              <TableCell>
                  <Button sx={{margin:'0px 10px'}} onClick={()=>{navigate('/employee/updateemployee', {state: { EmployeesList }} )}}> Update </Button>
                  <Button sx={{margin:'0px 10px'}} onClick={()=>{navigate('/employee/deleteemployee')}}> Delete </Button>
              </TableCell>
          </TableRow>
        ========= Dummy  */}

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
                  {/* { state: { employee } } */}
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
  );
};

export default EmployeeTable;
