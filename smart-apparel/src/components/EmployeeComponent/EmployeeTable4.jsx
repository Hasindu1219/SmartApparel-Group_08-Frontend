import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeTable = ({rows}) =>{
    const navigate = useNavigate();
// const [expenses, setExpenses] = useState([]);

  // useEffect(() => {
  //   axios.get(Rest_API_URL)
  //     .then((response) => {
  //       setExpenses(response.data.content);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []); // Adding empty dependency array to ensure useEffect runs only once

    const [employees,setEmployee] = useState([]);

    useEffect( 
        ()=> {
            axios.get("http//localhost:8080/employee/view")
            .then((response)=> {setEmployee(response.data.content.content)})
            .catch((error)=>{console.error(error)})
        }, []
    );

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
                        <TableCell>Date OF Birth</TableCell>
                        <TableCell>Bank Account Number</TableCell>
                        <TableCell>Holder Name</TableCell>
                        <TableCell>Branch</TableCell>
                        <TableCell>Bank</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        employees.length > 0 ? employees.map(employee =>(
                            <TableRow key={employee.empId}>
                                <TableCell component={'th'}>{employee.empId}</TableCell>
                                <TableCell component={'th'}>{employee.name}</TableCell>
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
                                    <Button sx={{margin:'0px 10px'}} onClick={()=>{navigate('/employee/updateemployee')}}> Update </Button>
                                    <Button sx={{margin:'0px 10px'}} onClick={()=>{navigate('/employee/deleteemployee')}}> Delete </Button>
                                </TableCell>
                            </TableRow>
                        ))
                        : (<TableRow>
                            <TableCell component={'th'}>No Data</TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmployeeTable;