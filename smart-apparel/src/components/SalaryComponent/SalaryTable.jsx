import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SalaryTable = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [salaryList, setSalaryList] = useState([]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredSalaryList = salaryList.filter(salary => salary.salaryId.toString().includes(searchQuery));

    useEffect(() => {
        axios.get('http://localhost:8080/salary/view')
            .then((response) => {
                const { data } = response;
                if (data && data.content) {
                    setSalaryList(data.content);
                } else {
                    console.error('Invalid response format:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching Attendance:', error);
            });
    }, []);

    const updateSalary = (id) => {
        navigate(`/attendance/updateattendance/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this Record?")) {
            axios.delete(`http://localhost:8080/salary/delete/${id}`)
                .then((response) => {
                    if (response.status === 202) {
                        alert("Removed successfully.");
                        // Reload data after successful deletion
                        setSalaryList(salaryList.filter(item => item.salaryId !== id));
                    } else {
                        throw new Error("Failed to remove Record.");
                    }
                })
                .catch((error) => {
                    console.error("Error removing Salary", error.message);
                });
        }
    };

    return (
        <div>
            <Grid container justifyContent="space-between" alignItems="center" style={{ marginBottom: '1rem' }}>
                <Button onClick={() => { navigate('/salary/addsalary') }}>Add new Record</Button>
                <TextField
                    label="Search by ID"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </Grid>

            <TableContainer component={Paper} container alignItems="center" justifyContent="space-between" style={{ marginBottom: '1rem' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Salary ID</TableCell>
                            <TableCell>Employee ID</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Year & Month</TableCell>
                            <TableCell>Basic</TableCell>
                            <TableCell>EPF by Employee</TableCell>
                            <TableCell>EPF by Employee</TableCell>
                            <TableCell>EPF by Employee</TableCell>
                            <TableCell>Net Salary</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {filteredSalaryList.length > 0 ? (
                            filteredSalaryList.map((salary) => (
                                <TableRow key={salary.salaryId}>
                                    <TableCell>{salary.empId}</TableCell>
                                    <TableCell>{salary.status}</TableCell>
                                    <TableCell>{salary.yearNMonth}</TableCell>
                                    <TableCell>{salary.basic}</TableCell>
                                    <TableCell>{salary.epfByEmployee}</TableCell>
                                    <TableCell>{salary.epfByCompany}</TableCell>
                                    <TableCell>{salary.etfPayment}</TableCell>
                                    <TableCell>{salary.netSalary}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" onClick={() => updateSalary(salary.salaryId)}>
                                            Update
                                        </Button>
                                        <Button variant="contained" color="error" onClick={() => handleDelete(salary.salaryId)} style={{ marginLeft: '10px' }}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    No Data
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default SalaryTable;
